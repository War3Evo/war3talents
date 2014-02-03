/**
 * Talent - A talent calculator.
 * (c) Jan Küchler <borlox@worldofwar.de>
 * for WorldOfWar.de
 */

function strrep(str, n) {
	var res = "";
	for (i=0; i < n; ++i) {
		res += str;
	}
	return res;
}

var ClassMap = {
	DK: "DEATHKNIGHT",
	DU: "DRUID",
	HU: "HUNTER",
	MG: "MAGE",
	PA: "PALADIN",
	PR: "PRIEST",
	RG: "ROGUE",
	SH: "SHAMAN",
	WL: "WARLOCK",
	WR: "WARRIOR",
};

function GetShortClass(cls) {
	for (short in ClassMap) {
		if (ClassMap[short] == cls)
			return short;
	}
	return null;
}

var BASE_URL = "";

var Talent = {
	/* update style.css when chaning this */
	ICON_X_OFFSET : 20,
	ICON_Y_OFFSET : 20,
	ICON_X_SIZE : 40,
	ICON_Y_SIZE : 40,
	
	MAX_POINTS : 41,
	MAIN_TAB_POINTS : 31,
	POINTS_PER_ROW : 5,
	
	MAX_ROW : 7,
	MAX_COL :  4,
	
	MASTERY_ICON : "../icon/Spell_Holy_ChampionsBond.png",
	
	REQ_CORNER_X : 20,
	REQ_CORNER_Y : 20,
	
	isClassLocked : false,
	
	Initialize : function() {
		Talent.header = document.getElementById("class-name");
		Talent.header.innerHTML = Data.name;
		
		Talent.spellTooltip = Talent.CreateSpellTooltip();
		
		document.getElementById("class-icon").src = "../img/class-" + Class.toLowerCase() + ".png";
		
		$("#reset-all-btn").click(function() {
			Talent.ResetAll();
		});
		$("#toggle-btn").click(function() {
			Talent.ToggleSummary();
		});
		$("#link-btn").click(function() {
			prompt("Link zur aktuellen Talentverteilung", window.location);
		});
		$("#lock-btn").click(function() {
			Talent.OnLockBtn();
			//document.cookie = "talentClass=" + GetShortClass(Class);
		});
		$("#ingame-btn").click(function() {
			Talent.MakeIngameMakro();
		});
		Talent.UpdateLockBtn();
		
		Talent.ptsDispTotal = document.getElementById("pts-total");
		Talent.ptsDispCur   = document.getElementById("pts-cur");
		Talent.ptsDispTabs  = document.getElementById("short-points");
		
		Talent.ptsDispTotal.innerHTML = Talent.MAX_POINTS;
		Talent.ptsDispCur.innerHTML = 0;
		
		Talent.InitLinkPanel();
		Talent.InitTalentCalc();
		Talent.InitGlyphs();

		//Talent.mode = -1;
		//Talent.ChangeMode(Talent.MODE_TALENT);
		
		if (window.location.hash) {
			Talent.LoadLink(window.location.hash.substr(1));
		}
		else {
			Talent.ToggleSummary();
		}
		Talent.Update();
	},
	
	InitLinkPanel : function() {
		var panel = document.getElementById("link-panel");

		for (c in ClassMap) {
			var link = document.createElement("a");
			link.href = BASE_URL + "?" + c;
			
			var icon = document.createElement("img");
			icon.src = "../img/class-" + ClassMap[c].toLowerCase() + ".png";
			
			link.appendChild(icon);
			
			
			panel.appendChild(link);
		}
	},
	
	InitTalentCalc : function() {
		Talent.totalPoints = 0;
		
		Talent.container = document.getElementById("talent-calc");
		
		Talent.tab = new Array();
		Talent.tabSum = new Array();
		Talent.talentButtons = new Array();
		Talent.rowCount = new Array();
		Talent.talents = new Array();
		
		Talent.mainTab = -1;
		Talent.summaryShown = false;
	
		Talent.CreateBorder(false);
		Talent.CreateBorder(true);
		for (i=0; i < 3; ++i) {	
			Talent.tab[i] = Talent.CreateTab(i, Data.tabs[i]);
			Talent.tabSum[i] = Talent.CreateTabSummary(i, Data.tabs[i]);
			Talent.CreateBorder(true);
		}
		Talent.CreateBorder(false);
		
		Talent.InitReverseRequirements();
		Talent.DrawReqArrows();
		Talent.InitTooltip();
	},
	
	InitGlyphs : function() {
		$(".glyph-entry").mousedown(function(e) {
			if (e.which == 3) { // rightclick
				Talent.SetEmptyGlyph(this);
				Talent.MakeLink();
				Talent.HideTooltip();
			}
			else {
				Talent.ShowGlyphSelect(this, this.glyphType);
			}
		});
		$(".glyph-entry").map(function(id, btn) {
			btn.oncontextmenu = function() {
				return false;
			}
		});
		
		$(".glyph-entry").mouseover(function() {
			var gli = Talent.glyphs[this.glyphIndex];
			if (gli != -1) {
				var gl = Glyphs[gli];
				Talent.ShowGlyphTooltip(this.glyphIcon, gl.name, gl.desc);
			}
		});
		
		$(".glyph-entry").mouseout(function() {
			Talent.HideTooltip();
		});
		
		var gl = Talent.glyphs = new Array();
		var btn = Talent.glyphBtn = new Array();
		for (i=0; i < 9; ++i)
			gl[i] = -1;
		
		$("#glyph-0-pane .glyph-entry").map(function(id, div) {
			div.parentNode.glyphType = 0;
			div.glyphType = 0;
			div.glyphIndex = (0 * 3) + id;
			btn[div.glyphIndex] = div;
		});
		$("#glyph-1-pane .glyph-entry").map(function(id, div) {
			div.parentNode.glyphType = 1;
			div.glyphType = 1;
			div.glyphIndex = (1 * 3) + id;
			btn[div.glyphIndex] = div;
		});
		$("#glyph-2-pane .glyph-entry").map(function(id, div) {
			div.parentNode.glyphType = 2;
			div.glyphType = 2;
			div.glyphIndex = (2 * 3) + id;
			btn[div.glyphIndex] = div;
		});
		
		$(".glyph-entry").map(function(id, entry) {
			entry.glyphIcon = $(entry).children("img")[0];
			entry.glyphName = $(entry).children("span")[0];
		});
		
		$(".glyph-pane").map(function(id, div) {
			div.header = $(div).children("div")[0];
			
			div.header.appendChild(div.resetBtn = document.createElement("img"));
			div.resetBtn.src = "../img/cross.png";
			div.resetBtn.width = div.resetBtn.height = 10;
			div.resetBtn.className = "glyph-pane-reset";
			$(div.resetBtn).click(function() {
				Talent.ResetGlyphs(div.glyphType);
			});
		});
				
		var sel = Talent.glyphSelect = document.createElement("div");
		sel.id = "glyph-select";
		$("body")[0].appendChild(sel);
		
		var bg = sel.bg = document.createElement("div");
		bg.id = "glyph-select-bg";
		$("body")[0].appendChild(bg);
	
		$(bg).click(function() {
			$(sel).hide();
			$(bg).hide();
		});
		
		$(sel).hide();
		$(bg).hide();
	},
	
	InitTooltip : function() {
		var tt = document.createElement("div");
		tt.id = "talent-tooltip";
		Talent.tooltip = tt;
		tt.style.display = "none";
		
		var el = document.createElement("div");
		el.className = "ttt-name";
		tt.appendChild(el);
		tt.spellName = el;
		
		var el = document.createElement("div");
		el.className = "ttt-rank";
		tt.appendChild(el);
		tt.rankDisplay = el;
		
		var el = document.createElement("div");
		el.className = "ttt-req";
		tt.appendChild(el);
		tt.reqTal = el;
		var el = document.createElement("div");
		el.className = "ttt-req";
		tt.appendChild(el);
		tt.reqPoints = el;
				
		var el = document.createElement("div");
		el.className = "ttt-desc";
		tt.appendChild(el);
		tt.desc = el;
		
		var el = document.createElement("div");
		el.className = "ttt-desc-header";
		tt.appendChild(el);
		tt.descNextHdr = el;
		el.innerHTML = "Next Rank";
		
		var el = document.createElement("div");
		el.className = "ttt-desc";
		tt.appendChild(el);
		tt.descNext = el;
		
		$("body")[0].appendChild(tt);
	},
	
	CreateSpellTooltip : function() {
		var tt = document.createElement("div");
		tt.className = "tooltip";
				
		tt.appendChild(tt.headRankDiv = document.createElement("div"));
		tt.headRankDiv.className = "tt-headline";	
		tt.headRankDiv.appendChild(tt.rankDiv = document.createElement("div"));
		tt.rankDiv.className = "tt-right";
		tt.rankDiv.id = "stt-rank";
		tt.headRankDiv.appendChild(tt.headDiv = document.createElement("div"));
		
		tt.appendChild(tt.talentDiv = document.createElement("div"));
		
		tt.talentDiv.appendChild(tt.talRank = document.createElement("div"));
		tt.talentDiv.appendChild(tt.talReqTal = document.createElement("div"));
		tt.talReqTal.className ="ttt-req";
		tt.talentDiv.appendChild(tt.talReqPts = document.createElement("div"));
		tt.talReqPts.className ="ttt-req";
				
		tt.appendChild(tt.costRangeDiv = document.createElement("div"));
		tt.costRangeDiv.appendChild(tt.rangeDiv = document.createElement("div"));
		tt.rangeDiv.className = "tt-right";
		tt.costRangeDiv.appendChild(tt.costDiv = document.createElement("div"));
		
		tt.appendChild(tt.timeCdDiv = document.createElement("div"));
		tt.timeCdDiv.appendChild(tt.cdDiv = document.createElement("div"));
		tt.cdDiv.className = "tt-right";
		tt.timeCdDiv.appendChild(tt.timeDiv = document.createElement("div"));
		
		tt.appendChild(tt.descDiv = document.createElement("div"));
		tt.descDiv.className = "tt-desc";
		
		$(tt).hide();	
		$("body")[0].appendChild(tt);
		
		return tt;
	},
	
	CreateTab : function(tabId, data) {
		var div = document.createElement("div");
		
		div.className = "talent-tab";
		div.style.background = "url('" + data.background + "')";
		
		div.tabId = tabId;
		div.points = 0;
		div.data = data;
		div.rowPoints = new Array();
		
		div.talents = new Array();
		div.buttons = new Array();
		
		Talent.container.appendChild(div);
		Talent.talentButtons[tabId] = new Array();
		
		var hdr = document.getElementById("tab-" + tabId + "-header");
		
		//if ($.browser.mozilla && $.browser.version.substr(0,3) == "1.9")
		//	hdr.style.background = "-moz-linear-gradient(left, #222222, rgb(" + clr[0] + "," + clr[1] + "," + clr[2] + "), #222222)";
		
		var clr = StaticData.TabColors[Class][tabId];
		hdr.style.borderColor = "rgb(" + clr[0] + "," + clr[1] + "," + clr[2] + ")";
		hdr.style.borderColor = "rgba(" + clr[0] + "," + clr[1] + "," + clr[2] + ",0.8)";
		
		hdr.appendChild(hdr.icon = document.createElement("img"));
		hdr.icon.src = data.icon;
		hdr.icon.width = hdr.icon.height = 40;
		hdr.icon.className = "talent-header-icon";
		
		hdr.appendChild(hdr.resetBtn = document.createElement("img"));
		hdr.resetBtn.title = hdr.resetBtn.alt = "Reset";
		hdr.resetBtn.src = "../img/cross.png";
		hdr.resetBtn.width = hdr.resetBtn.height = 10;
		$(hdr.resetBtn).click(function() {
			Talent.ResetTab(div);
		});
		hdr.resetBtn.className = "talent-header-reset-btn";
		
		hdr.appendChild(hdr.titleText = document.createElement("span"));
		hdr.titleText.innerHTML = data.name;
		
		
		div.header = hdr;
						
		for (sid in data.talents) {
			var btn = Talent.CreateTalentButton(sid, data.talents[sid], div);
			
			Talent.talentButtons[tabId][sid] = btn;
			div.appendChild(btn);
		}

		return div;
	},
	
	CreateSummarySpell : function(data) {
		var div = document.createElement("div");
		div.className = "talent-summary-spell";
		
		div.spellData = data;
		
		$(div).mouseover(function() {
			Talent.ShowSpellTooltip(this.icon, this.spellData);
		});
		
		$(div).mouseout(function() {
			Talent.HideSpellTooltip();
		});
		
		div.appendChild(div.icon = document.createElement("img"));
		div.icon.src = data.icon;
		div.icon.width = div.icon.height = 20;
		
		div.appendChild(div.text = document.createElement("span"));
		if (data.displayName)
			div.text.innerHTML = data.displayName;
		else
			div.text.innerHTML = data.name;
		
		return div;
	},
	
	CreateTabSummary : function(tabId, data) {
		var div = document.createElement("div");
		div.className = "talent-summary";
			
		var clr = StaticData.TabColors[Class][tabId];
		div.style.border = "1px solid rgb(" + clr[0] + "," + clr[1] + "," + clr[2] + ")";
		div.style.border = "1px solid rgba(" + clr[0] + "," + clr[1] + "," + clr[2] + ",0.3)";
		
		div.tabId = tabId;
		
		div.appendChild(div.toggle = document.createElement("div"));
		div.toggle.className = "talent-summary-toggle red-button";
		div.toggle.innerHTML = data.name;
		$(div.toggle).click(function() {
			Talent.SelectMainTab(tabId);
		});
		
		div.appendChild(div.icon = document.createElement("div"));
		div.icon.className = "talent-summary-icon";
	
		div.icon.style.backgroundImage = "url('" + data.icon + "')";
		div.icon.style.MozBoxShadow = "0px 0px 100px rgb(" + clr[0] + "," + clr[1] + "," + clr[2] + ")";
		div.icon.appendChild(div.icon.borderImg = document.createElement("ins"));
		
		div.appendChild(div.desc = document.createElement("div"));
		div.desc.className = "talent-summary-desc";
		div.desc.innerHTML = data.desc;
		
		var first = -1;
		var passiv = [];
		for (var i=0; i < data.primaries.length; i++) {
			if (first != -1 || Talent.IsPassiveSpell(data.primaries[i]))
				passiv.push(i);
			else
				first = i;
		}
		
		var fsp = Talent.CreateSummarySpell(data.primaries[first]);
		div.appendChild(fsp);
		fsp.id = "talent-summary-first-spell";
		fsp.icon.height = fsp.icon.width = 35;
		
		for (var i=0; i < passiv.length; i++) {
			var sp = Talent.CreateSummarySpell(data.primaries[passiv[i]]);
			div.appendChild(sp);
		}
		
		div.appendChild(Talent.CreateSummarySpell({
			"icon" : Talent.MASTERY_ICON,
			"displayName" : "Mastery: " + data.mastery.name,
			"name" : data.mastery.name,
			"desc" : data.mastery.desc,
		}));
		
		Talent.container.appendChild(div);
		$(div).hide();
		return div;
	},
	
	CreateBorder : function(isVert) {
		var div = document.createElement("div");
		div.className = isVert ? "vert-border" : "hor-border";
		
		Talent.container.appendChild(div);
	},
	
	CreateTalentButton : function(id, spell, tab) {
		var div = document.createElement("div");
	
		div.className = "talent-button-enabled";
		div.style.left = Talent.GetIconLeft(spell.row, spell.col) + "px";
		div.style.top  = Talent.GetIconTop(spell.row, spell.col) + "px";	
		div.style.width = Talent.ICON_X_SIZE + "px";
		div.style.height = Talent.ICON_Y_SIZE + "px";
		
		div.spellId = id;
		div.spell = spell;
		div.points = 0;
		div.tab = tab;
		
		tab.rowPoints[spell.row] = 0;
		
		if (!tab.talents[spell.row]) {
			tab.talents[spell.row] = new Array();
			tab.buttons[spell.row] = new Array();
		}
		tab.talents[spell.row][spell.col] = spell;
		tab.buttons[spell.row][spell.col] = div;
		
		div.oncontextmenu = function() { return false; }	
		$(div).mousedown(Talent.OnTalentButtonClick);
		
		div.onmouseover = function() {
			if (this.spell.spell)
				Talent.ShowSpellTooltip(this.icon, this.spell.spell, this.spell, this);
			else
				Talent.ShowTooltip(this, true);
		}
		div.onmouseout = function() {
			if (this.spell.spell)
				Talent.HideSpellTooltip();
			else
				Talent.HideTooltip();
		}
				
		var icon = document.createElement("img");
		icon.src = spell.img;
		icon.width = Talent.ICON_X_SIZE;
		icon.height = Talent.ICON_Y_SIZE;		
		div.appendChild(icon);
		div.icon = icon;
		
		var rank = document.createElement("span");
		div.appendChild(rank);
		div.rank = rank;
		
		return div;
	},
	
	InitReverseRequirements : function() {
		for (var i = 0; i < 3; ++i) {
			var tab = Talent.tab[i];
			
			for (r in tab.talents) {
				var row = tab.talents[r];
				
				for (c in row) {
					var tal = row[c];
					
					if (typeof(tal.reqRank) == "number") {
						var req = tab.talents[tal.reqRow][tal.reqCol];
						req.isReq = true;
						
						var reqData = {
							"col" : c,
							"row" : r,
							"rank" : tal.reqRank,
						};
						
						if (!req.reqData)
							req.reqData = new Array;
						req.reqData.push(reqData);
						
						/*req.reqForCol = c;
						req.reqForRow = r;
						req.reqMinRank = tal.reqRank;*/
					}
				}
			}
		}
	},
	
	DrawReqArrow : function(tab, fromRow, fromCol, toRow, toCol) {
		var objs = new Array();
		
		if (fromRow == toRow) {
			var bar = document.createElement("div");
			bar.disabledClass = "req-item req-hor-grey";
			bar.enabledClass = "req-item req-hor-gold";
			bar.className = bar.disabledClass;
			tab.appendChild(bar);
			
			var leftToRight = fromCol < toCol;
			
			var dx = leftToRight ? toCol - fromCol : fromCol - toCol;
			var width = dx * Talent.ICON_X_OFFSET + (dx - 1) * Talent.ICON_X_SIZE - 4; // 4 = 2 * border width
			bar.style.width = width + "px";			
			
			var x = Talent.GetIconLeft(fromRow, fromCol);
			if (leftToRight) {
				x += Talent.ICON_X_SIZE + 4;
				bar.style.left = x + "px";
			}
			else {
				x -= width;
				bar.style.left = x + "px";
			}
			
			var y = Talent.GetIconTop(fromRow, fromCol);
			y += (Talent.ICON_Y_SIZE / 2);
			y -= 2; // bar height / 2
			bar.style.top = y + "px";

			var arrow = document.createElement("div");
			tab.appendChild(arrow);
			if (leftToRight) {
				arrow.disabledClass = "req-item req-arrow-hor req-arrow-right-grey";
				arrow.enabledClass = "req-item req-arrow-hor req-arrow-right-gold";
				
				arrow.className = arrow.disabledClass;
			}
			else {
				arrow.disabledClass = "req-item req-arrow-hor req-arrow-left-grey";
				arrow.enabledClass = "req-item req-arrow-hor req-arrow-left-gold";
				
				arrow.className = arrow.disabledClass;
			}
			
			if (leftToRight)
				arrow.style.left = (x + width - 2) + "px";
			else
				arrow.style.left = (x - 4) + "px";
				
			arrow.style.top = (y - 3) + "px";
			
			objs.push(bar);
			objs.push(arrow);
		}
		else if (fromCol == toCol) {
			var bar = document.createElement("div");
			bar.disabledClass = "req-item req-ver-grey";
			bar.enabledClass = "req-item req-ver-gold";
			bar.className = bar.disabledClass;
			tab.appendChild(bar);
			
			var down = fromRow < toRow;
			
			var dy = down ? toRow - fromRow : fromRow - toRow;
			var height = dy * Talent.ICON_Y_OFFSET + (dy - 1) * Talent.ICON_Y_SIZE - 4; // 4 = 2 * border width
			bar.style.height = height + "px";			
			
			var x = Talent.GetIconLeft(fromRow, fromCol);
			x += (Talent.ICON_X_SIZE / 2);
			x -= 2; // bar width / 2
			bar.style.left = x + "px";
			
			var y = Talent.GetIconTop(fromRow, fromCol);		
			if (down) {
				y += Talent.ICON_Y_SIZE + 4;
				bar.style.top = y + "px";
			}
			else {
				x -= height;
				bar.style.top = y + "px";
			}

			var arrow = document.createElement("div");
			tab.appendChild(arrow);
			if (down) {
				arrow.disabledClass = "req-item req-arrow-ver req-arrow-down-grey";
				arrow.enabledClass = "req-item req-arrow-ver req-arrow-down-gold";
				
				arrow.className = arrow.disabledClass;
			}
			else {
				arrow.disabledClass = "req-item req-arrow-hor req-arrow-up-grey";
				arrow.enabledClass = "req-item req-arrow-hor req-arrow-up-gold";
				
				arrow.className = arrow.disabledClass;
			}
			
			arrow.style.left = (x - 3) + "px";
			
			if (down)
				arrow.style.top = (y + height - 2) + "px";
			else
				arrow.style.top = (y - 4) + "px";
			
			objs.push(bar);
			objs.push(arrow);		
		}
		else {
			var leftToRight = fromCol < toCol;
			var down = fromRow < toRow;
			
			if (!down) //should not happen
				return;
			
			var dx = leftToRight ? toCol - fromCol : fromCol - toCol;
			var width = dx * Talent.ICON_X_OFFSET + (dx - 1) * Talent.ICON_X_SIZE - 4; // 4 = 2 * border width				
			var dy = down ? toRow - fromRow : fromRow - toRow;
			var height = dy * Talent.ICON_Y_OFFSET + (dy - 1) * Talent.ICON_Y_SIZE - 4; // 4 = 2 * border width

			width += 4;
			height += 4;
								
			var hor = document.createElement("div");
			tab.appendChild(hor);
			hor.disabledClass = "req-item req-hor-grey";
			hor.className = hor.enabledClass = "req-item req-hor-gold";
				
			var ver = document.createElement("div");
			tab.appendChild(ver);
			ver.disabledClass = "req-item req-ver-grey";
			ver.className = ver.enabledClass = "req-item req-ver-gold";
			
			var crn = document.createElement("div");
			tab.appendChild(crn);	
			if (leftToRight) {
				crn.disabledClass = "req-item req-corner req-corner-right-down-grey";
				crn.className = crn.enabledClass = "req-item req-corner req-corner-right-down-gold";
			}
			else {
				crn.disabledClass = "req-item req-corner req-corner-left-down-grey";
				crn.className = crn.enabledClass = "req-item req-corner req-corner-left-down-gold";			
			}
			
			var x, y
			
			x = Talent.GetIconLeft(fromRow, fromCol);
			if (leftToRight)
				x += Talent.ICON_X_SIZE + 4;
			else
				x -= width;
				
			y = Talent.GetIconTop(fromRow, fromCol);
			y += (Talent.ICON_Y_SIZE / 2);
			y -= 2; // bar height / 2
				
			hor.style.left = x + "px";
			hor.style.top = y + "px";		
			hor.style.width = width + "px";
			
			if (leftToRight)
				x += width;
			else
				x -= width;
			crn.style.left = x + "px";
			crn.style.top = y + "px";
			
			x += (Talent.REQ_CORNER_X / 2);
			x += 2; // bar width / 2

			y += Talent.REQ_CORNER_Y;
				
			ver.style.left = x + "px";	
			ver.style.top = y + "px";	
			ver.style.height = height + "px";
			
			var arrow = document.createElement("div");
			tab.appendChild(arrow);
			if (down) {
				arrow.disabledClass = "req-item req-arrow-ver req-arrow-down-grey";
				arrow.className = arrow.enabledClass = "req-item req-arrow-ver req-arrow-down-gold";
			}
			else {
				arrow.disabledClass = "req-item req-arrow-hor req-arrow-up-grey";
				arrow.className = arrow.enabledClass = "req-item req-arrow-hor req-arrow-up-gold";
			}
			
			arrow.style.left = (x - 3) + "px";
			
			if (down)
				arrow.style.top = (y + height - 2) + "px";
			else
				arrow.style.top = (y - 4) + "px";		
				
			objs.push(hor);
			objs.push(crn);
			objs.push(ver);
			objs.push(arrow);
		}
		
		var btn = tab.buttons[fromRow][fromCol];
		if (!btn.arrows)
			btn.arrows = new Array();
			
		btn.arrows = btn.arrows.concat(objs);
	},
	
	DrawReqArrows : function() {
		for (var i=0; i < 3; ++i) {
			var tab = Talent.tab[i];
					
			for (r in tab.talents) {
				var row = tab.talents[r];

				for (c in row) {
					var tal = row[c];
					
					if (typeof(tal.reqRank) == "number") {
						Talent.DrawReqArrow(tab, tal.reqRow, tal.reqCol, r, c);
					}
				}
			}
		}
	},
	
	ResetGlyphs : function(type, noUpdate) {
		for (var i=0; i < 3; ++i) {
			Talent.SetEmptyGlyph(Talent.glyphBtn[i + (3 * type)]);
		}
		if (!noUpdate)
			Talent.MakeLink();
	},
	
	ResetTab : function(tab, noUpdate) {
		if (Talent.mainTab == tab.tabId) {
			Talent.mainTab = -1;
			Talent.ResetAllTabs();
		}
		else if (Talent.mainTab == -1) {
			// no point spent
			Talent.ToggleSummary();
		}
	
		var total = tab.points;
		
		tab.points = 0;
		for (r in tab.rowPoints)
			tab.rowPoints[r] = 0;
			
		for (r in tab.buttons) {
			for (c in tab.buttons[r])
				tab.buttons[r][c].points = 0;
		}
		
		Talent.totalPoints -= total;
					
		if (!noUpdate) {			
			Talent.Update();
			Talent.MakeLink();
		}
	},
	
	ResetAllTabs : function(noUpdate) {
		for (var i=0; i < 3; ++i) {
			Talent.ResetTab(Talent.tab[i], true);
		}
		if (!noUpdate) {
			Talent.Update();
			Talent.MakeLink();
		}
		if (!Talent.summaryShown)
			Talent.ToggleSummary();
	},
	
	ResetAll : function() {
		Talent.ResetAllTabs(true);
		for (var t=0; t < 3; ++t)
			Talent.ResetGlyphs(t, true);
			
		Talent.Update();
		Talent.MakeLink();			
	},
	
	ToggleSummary : function() {
		if (Talent.summaryShown) {
			$(".talent-tab").show();
			$(".talent-summary").hide();
		}
		else {
			$(".talent-tab").hide();
			$(".talent-summary").show();
		}
		Talent.summaryShown = !Talent.summaryShown;
	},
	
	SelectMainTab : function(tabId) {
		if (Talent.mainTab == -1)
			Talent.mainTab = tabId;
		if (Talent.summaryShown)
			Talent.ToggleSummary();
		Talent.Update();
	},
	
	IsTalentEnabled : function(btn) {
		if (Talent.mainTab != -1) {
			var mt = Talent.tab[Talent.mainTab];
			var mtp = mt.points;
			if (mtp < Talent.MAIN_TAB_POINTS && btn.tab.tabId != Talent.mainTab) {
				return false;
			}
		}
		
		if (Talent.totalPoints == Talent.MAX_POINTS)
			return btn.points > 0;
			
		if (typeof(btn.spell.reqRank) == "number") {
			if (!Talent.RequirementsMet(btn, btn.spell))
				return false;
		}
	
		return btn.tab.points >= Talent.POINTS_PER_ROW * btn.spell.row;
	},
	
	UpdateTalentButton : function(btn) {
		btn.rank.innerHTML = btn.points;

		if (btn.points == btn.spell.ranks)
			btn.className = "talent-button-full";
		else if (Talent.IsTalentEnabled(btn))
			btn.className = "talent-button-enabled";
		else
			btn.className = "talent-button-disabled";
		
		if (Talent.IsTalentEnabled(btn))
			btn.icon.src = btn.spell.img;
		else
			btn.icon.src = btn.spell.img + ".grey.png";
			
		if (btn.arrows) {
			var full = btn.points == btn.spell.ranks;
			
			for (var i=0; i < btn.arrows.length; ++i) {
				var obj = btn.arrows[i];
				obj.className = full ? obj.enabledClass : obj.disabledClass;
			}
		}
	},
	
	UpdateTab : function(tabId) {
		var tab = Talent.tab[tabId];
		
		for (id in Talent.talentButtons[tabId]) {
			var btn = Talent.talentButtons[tabId][id];
			Talent.UpdateTalentButton(btn);
		}
		
		if (tabId == Talent.mainTab) {
			$(tab).addClass("talent-tab-active");
		}
		else {
			$(tab).removeClass("talent-tab-active");
		}
		
		tab.header.titleText.innerHTML = tab.data.name + " - " + tab.points;
	},
	
	Update : function() {
		for (i=0; i < 3; ++i)
			Talent.UpdateTab(i);
		Talent.UpdatePointsDisplay();			
	},
	
	GetIconLeft : function(row, col) {
		return ((col + 1) * this.ICON_X_OFFSET + col * this.ICON_X_SIZE);
	},
		
	GetIconTop : function(row, col) {
		return ((row + 1) * this.ICON_Y_OFFSET + row * this.ICON_Y_SIZE);
	},
	
	UpdatePointsDisplay : function() {
		Talent.ptsDispCur.innerHTML = Talent.totalPoints;
		
		Talent.ptsDispTabs.innerHTML = Talent.tab[0].points + "/" + Talent.tab[1].points + "/" + Talent.tab[2].points;
		
		$("#req-lvl").html(StaticData.PointsToLevel[Talent.totalPoints]);
	},
	
	OnTalentButtonClick : function(e) {	
		if (e.which == 3) // rightclick
			Talent.DecRank(this);
		else
			Talent.IncRank(this);
				
		return false;
	},
	
	IncRank : function(btn) {
		if (Talent.totalPoints + 1 > Talent.MAX_POINTS)
			return;
		if (btn.points + 1 > btn.spell.ranks)
			return;
		if (!Talent.IsTalentEnabled(btn)) {
			return;
		}
			
		Talent.totalPoints++;
		btn.tab.points++;
		btn.tab.rowPoints[btn.spell.row]++;
		btn.points++;
		
		if (Talent.totalPoints == 1) {
			Talent.mainTab = parseInt(btn.tab.tabId);
		}

		if (btn.spell.spell)
			Talent.ShowSpellTooltip(btn.icon, btn.spell.spell, btn.spell, btn);
		else
			Talent.ShowTooltip(btn, false);
		Talent.Update();

		Talent.MakeLink();
	},
	
	DecRank : function(btn) {
		// no negative points
		if (btn.points == 0)
			return;
			
		// check for basic point count
		var thisRow = btn.spell.row;
		
		var points = 0;
		for (r=0; r < thisRow; ++r) {
			points += btn.tab.rowPoints[r];	
		}
		points += btn.tab.rowPoints[thisRow] - 1; // -1 cause we're dec'ing this row
		
		var r = thisRow + 1;
		while (typeof(btn.tab.rowPoints[r]) == "number") {
			if (btn.tab.rowPoints[r] > 0 && points < r * Talent.POINTS_PER_ROW)
				return; // would be invalid
			points += btn.tab.rowPoints[r];
			r++;
		}
		
		// check for required talents
		var tal = btn.spell;
		if (tal.isReq) {
			/*var reqFor = btn.tab.buttons[tal.reqForRow][tal.reqForCol];
			if (reqFor.points > 0 && (btn.points - 1) < tal.reqMinRank)
				return false; */
				
			var data = tal.reqData;
			for (var i=0; i < data.length; ++i) {
				var dat = data[i];
				var other = btn.tab.buttons[dat.row][dat.col];
				if (other.points > 0 && (btn.points - 1) < dat.rank)
					return false;
			}
		}
		
		// check that the main tab does not get below 31 points, if other tabs have points
		var otherTabs = false;
		for (t=0; t < 3; ++t) {
			if (t != btn.tab.id && Talent.tab[t].points > 0)
				otherTabs = true;
		}
		if (otherTabs && btn.tab.id == Talent.mainTab && btn.tab.points == Talent.MAIN_TAB_POINTS) {
			return;
		}
		
		// we're still there, so it's ok the decrease the rank	
		Talent.totalPoints--;
		btn.tab.points--;
		btn.tab.rowPoints[btn.spell.row]--;
		btn.points--;
		
		if (Talent.totalPoints == 0) {
			Talent.mainTab = -1;
		}
		
		if (btn.spell.spell)
			Talent.ShowSpellTooltip(btn.icon, btn.spell.spell, btn.spell, btn);
		else
			Talent.ShowTooltip(btn, false);
			
		Talent.Update();
		Talent.MakeLink();
	},
	
	PlaceTooltip : function(tt, relTo, x, y) {
		var offs = $(relTo).offset();

		var atTop = offs.top <= ($(window).height() / 2);
		var atLeft = offs.left <= ($(window).width() / 2)

		if (atLeft)
			tt.style.left = (offs.left + $(relTo).outerWidth()) + "px";
		else
			tt.style.left = (offs.left - $(tt).outerWidth()) + "px";

    

		if (atTop){
		  var tt_top_val = offs.top + $(relTo).outerHeight();
		  if( (tt_top_val + $(tt).css("height") + 20) > $(window).height() ){
		    tt.style.top = ($(window).height() - 20 - $(tt).css("height")) + "px";
		  }else{
		    tt.style.top = tt_top_val + "px";
		  }
		}else{
		  var tt_top_val = offs.top - $(tt).outerHeight();
		  if( tt_top_val < 20  ){
		    tt.style.top = "20px";
		  }else{
		    tt.style.top = tt_top_val + "px";
		  }
			
		}
	},

	ShowGlyphTooltip : function(relTo, name, desc) {
		var tt = Talent.tooltip;
		
		tt.spellName.innerHTML = name;
		tt.desc.innerHTML = desc;
		
		$(tt).show();
		
		$(tt.reqTal).hide();
		$(tt.reqPoints).hide();
		$(tt.rankDisplay).hide();
		$(tt.descNextHdr).hide();
		$(tt.descNext).hide();
		
		Talent.PlaceTooltip(tt, relTo, 25, 25);
	},
	
	RequirementsMet : function(btn, tal) {
		var req = btn.tab.buttons[tal.reqRow][tal.reqCol];
		
		return req.points >= tal.reqRank;
	},
	
	ShowTooltip : function(btn, init) {
		var tal = btn.spell;
		var tt = Talent.tooltip;
		
		tt.rankDisplay.innerHTML = "Rank " + btn.points + "/" + tal.ranks;
		$(tt.rankDisplay).show();
		
		var cur = btn.points;

		tt.desc.innerHTML = (cur == 0 ? tal.desc[0] : tal.desc[cur-1]);

		if (cur > 0 && cur < tal.ranks) {
			$(tt.descNextHdr).show();
			$(tt.descNext).show();
			tt.descNext.innerHTML = tal.desc[cur];
		}
		else {
			$(tt.descNextHdr).hide();
			$(tt.descNext).hide();
		}	
		
		if (init) {
			tt.spellName.innerHTML = tal.name;

			if (typeof(tal.reqRank) == "number" && !Talent.RequirementsMet(btn, tal)) {
				var req = btn.tab.talents[tal.reqRow][tal.reqCol];
				tt.reqTal.innerHTML = "Ben&ouml;tigt " + tal.reqRank + " Punkte in '" + req.name + "'";
				$(tt.reqTal).show();
			}
			else {
				$(tt.reqTal).hide();
			}
		
			if (btn.tab.points < Talent.POINTS_PER_ROW * tal.row) {
				tt.reqPoints.innerHTML = "Ben&ouml;tigt " + Talent.POINTS_PER_ROW * tal.row + " Punkte";
				$(tt.reqPoints).show();
			}
			else {
				$(tt.reqPoints).hide();
			}

			$(tt).show();
			Talent.PlaceTooltip(tt, btn, Talent.ICON_X_SIZE, Talent.ICON_Y_SIZE);
		}
	},
	
	HideTooltip : function() {
		var tt = Talent.tooltip;
		tt.style.display = "none";
	},
	
	SpellTooltipAddLeftRight : function(leftDiv, rightDiv, left, right, leftAdd, rightAdd) {
		if (!left && right) {
			leftDiv.innerHTML = right + rightAdd;
			$(leftDiv).show();
			$(rightDiv).hide();
			
			return;
		}
		
		if (left) {
			leftDiv.innerHTML = left + leftAdd;
			$(leftDiv).show();
		}
		else {
			$(leftDiv).hide();
		}		
		if (right) {
			rightDiv.innerHTML = right + rightAdd;
			$(rightDiv).show();
		}
		else {
			$(rightDiv).hide();
		}
	},
	
	IsPassiveSpell : function(spell) {
		// HACK
		return spell.rank == "Passiv" || spell.rank == "Passive";
	},
	
	ShowSpellTooltip : function(relTo, spell, tal, btn) {
		var tt = Talent.spellTooltip;
		
		tt.headDiv.innerHTML = spell.name;
		if (spell.rank) {
			tt.rankDiv.innerHTML = spell.rank;
			$(tt.rankDiv).show();
		}
		else {
			$(tt.rankDiv).hide();
		}
		
		if (!tal) {
			$(tt.talentDiv).hide();
		}
		else {
			tt.talRank.innerHTML = "Rank " + btn.points + "/" + tal.ranks;
			
			$(tt.rankDiv).hide();
			
			if (typeof(tal.reqRank) == "number" && !Talent.RequirementsMet(btn, tal)) {
				var req = btn.tab.talents[tal.reqRow][tal.reqCol];
				tt.talReqTal.innerHTML = "Ben&ouml;tigt " + tal.reqRank + " Punkte in '" + req.name + "'";
				$(tt.talReqTal).show();
			}
			else {
				$(tt.talReqTal).hide();
			}
		
			if (btn.tab.points < Talent.POINTS_PER_ROW * tal.row) {
				tt.talReqPts.innerHTML = "Ben&ouml;tigt " + Talent.POINTS_PER_ROW * tal.row + " Punkte";
				$(tt.talReqPts).show();
			}
			else {
				$(tt.talReqPts).hide();
			}			
			
			$(tt.talentDiv).show();
		}
		
		if (!Talent.IsPassiveSpell(spell)) {
			Talent.SpellTooltipAddLeftRight(tt.costDiv, tt.rangeDiv, spell.cost, spell.range, "", "");
			Talent.SpellTooltipAddLeftRight(tt.timeDiv, tt.cdDiv, spell.cast, spell.cooldown,
				spell.cast != "Instant" ? " Cast" : "", " Cooldown");
		}
		else {
			$(tt.costDiv).hide();
			$(tt.rangeDiv).hide();
			$(tt.timeDiv).hide();
			$(tt.cdDiv).hide();
		}
		
		tt.descDiv.innerHTML = spell.desc;
		
		$(tt).show();
		Talent.PlaceTooltip(tt, relTo, Talent.ICON_X_SIZE, Talent.ICON_Y_SIZE);
	},
	
	HideSpellTooltip : function() {
		$(Talent.spellTooltip).hide();
	},
	
	MakeLink : function() {
		var link = "";
		for (i=0; i < 3; ++i) {
			var tab = Talent.tab[i];
			
			for (r=0; r < Talent.MAX_ROW; ++r) {
				if (!tab.buttons[r])
					break;
				
				var row = tab.buttons[r];
				
				var p = new Array();
				for (c=0; c <Talent.MAX_COL; ++c) {
					if (!row[c])
						continue;
						
					link += row[c].points;	
				}
			}
		}
		link += "!";
		
		for (i=0; i < 9; ++i) {
			if (i != 0)
				link += ",";
			link += Talent.glyphs[i];
		}

		var short = link.replace(/(000+)/g, function(z) { return "." + z.length + "-"; });
		window.location.hash = short;
	},
	
	LoadLink : function(shortLink) {
		if (shortLink.length == 0)
			return;
	
		var link = shortLink.replace(/(\.)(\d+)(\-)/g, 
			function(full, dot, len, end) { 
				return strrep("0", len);
			});

		var maxTab = 0;
		for (i=0; i < 3; ++i) {
			var tab = Talent.tab[i];
	
			var done = false;
			for (r=0; r < Talent.MAX_ROW; ++r) {
				if (!tab.buttons[r])
					break;
					
				var row = tab.buttons[r];
				for (c=0; c < Talent.MAX_COL; ++c) {
					if (!row[c])
						continue;
						
					var n = link.substr(0, 1);
					
					if (n == "!") {
						done = true;
						break;
					}
					
					link = link.substr(1);		
					var p = parseInt(n, 10);

					row[c].points = p;
					
					Talent.totalPoints += p;
					tab.rowPoints[r] += p;
					tab.points += p;
					
					if (tab.points >= Talent.MAIN_TAB_POINTS) {
						Talent.mainTab =  tab.tabId;
					}
				}
				
				if (done)
					break;
			}
			if (tab.points > maxTab) {
				Talent.mainTab = i;
				maxTab = tab.points;
			}
			if (done)
				break;
		}
		
		if (link.charAt(0) == "!") {
			var gls = link.substr(1).split(",");
			
			for (i=0; i < 9; ++i) {
				if (!gls[i])
					break;
					
				var id = parseInt(gls[i], 10);		
				if (id != -1) {
					Talent.SelectGlyph(Talent.glyphBtn[i], id, Glyphs[id]);
				}
			}
		}
	},
	
	CreateGlyphSelectEntry : function(img, text) {
		var entry = document.createElement("p");
					
		var icon = document.createElement("img");
		icon.src = img;

		icon.width = 21;
		icon.height = 21;

		var name = document.createElement("span");
		name.innerHTML = text;

		entry.appendChild(icon);
		entry.appendChild(name);

		return entry;
	},
	
	SelectGlyph : function(slot, id, glyph) {
		slot.glyphIcon.src = glyph.icon;
		slot.glyphName.innerHTML = glyph.name;
		
		Talent.glyphs[slot.glyphIndex] = id;
	},
	
	SetEmptyGlyph : function(slot) {
		slot.glyphIcon.src = "../icon/missing.png";
		slot.glyphName.innerHTML = "Keine Glyphe";
		
		Talent.glyphs[slot.glyphIndex] = -1;
	},
	
	ShowGlyphSelect : function(slot, type) {
		var sel = Talent.glyphSelect;
		
		if (sel.list) {
			try {
				sel.removeChild(sel.list);
			}
			catch (err) {
			
			}
		}
		var list = sel.list = document.createElement("table");
		sel.appendChild(list);
		
		//for (i in Glyphs) {
		for(i=0; i < Glyphs.length; ++i) {
			var g = Glyphs[i];
			
			if (g.type != type)
				continue;
				
			var used = $.inArray(i, Talent.glyphs) != -1;
			
			var row = document.createElement("tr");
			var col = null;
			
			col = document.createElement("td");
			var img = document.createElement("img");
			img.src = g.icon;
			img.width = 20;
			img.height = 20;
			col.appendChild(img);
			row.appendChild(col);
			
			col = document.createElement("td");
			col.innerHTML = g.name;
			col.className = "glyph-name";
			row.appendChild(col);
			
			col = document.createElement("td");
			col.innerHTML = g.desc;
			row.appendChild(col);
			
			row.glyphId = i;
			row.glyph = g;
			
			if (!used) {
				$(row).click(function() {
					Talent.SelectGlyph(slot, this.glyphId, this.glyph);
					Talent.MakeLink();
					$(sel).hide();
					$(sel.bg).hide();
				});
			}
			
			row.className = used ? "glyph-select-row-used" : "glyph-select-row-unused";
			
			list.appendChild(row);
		}
		
		var cls = document.createElement("tr");
		var c = document.createElement("td");
		c.colSpan = 3;
		c.innerHTML = "Keine Glyphe";
		c.className = "glyph-select-no-glyph";
		c.style.textAlign = "center";
		cls.appendChild(c);
		$(cls).click(function() {
			Talent.SetEmptyGlyph(slot);
			Talent.MakeLink();
			$(sel).hide();
			$(sel.bg).hide();
		});
		sel.list.appendChild(cls);
		
		$(sel).show();
		$(sel.bg).show();
		
		sel.style.position = "absolute";
		var body = $("body")[0];
		
		var totalWidth = $(window).width();
		var totalHeight = $(window).height();
		
		sel.style.maxWidth = (totalWidth * 0.8) + "px";
				
		sel.style.left = (totalWidth / 2 - $(sel).outerWidth() / 2) + "px";
		
		sel.style.top  = (totalHeight / 2 - $(sel).outerHeight() / 2 ) + $(window).scrollTop() + "px";

	},
	
	OnLockBtn : function() {
		if (Talent.isClassLocked && Talent.lockedClass == Class) {
			$.cookie('talentClass', null);
			Talent.isClassLocked = false;
		}
		else {
			var nextYear = new Date();
			nextYear.setMonth(nextYear.getMonth() + 12);
			$.cookie('talentClass', GetShortClass(Class), {expires: nextYear});
			Talent.lockedClass = Class;
			Talent.isClassLocked = true;
		}

		Talent.UpdateLockBtn();
	},
	
	UpdateLockBtn : function() {
		if (Talent.isClassLocked) {
			$("#lock-btn").html("SK: " + StaticData.ClassNames[Talent.lockedClass]);
		}
		else {
			$("#lock-btn").html("Standardklasse");	
		}
		
		if (Talent.lockedClass == Class && Talent.isClassLocked)
			$("#lock-btn").attr("title", "Klicken um die Standardklasse zu löschen");
		else
			$("#lock-btn").attr("title", "Klicken um '" + StaticData.ClassNames[Class] + "' als Standardklasse festzulegen.");
	},
	
	// The following function is heavily inspired by WoWTal's
	// talentlib.createPreviewTalentScript function.
	// The function is available under MIT License (like the original one)
	// (see http://www.opensource.org/licenses/mit-license.php)
	//
	// The code will break if there are any talents with more than 9 ranks
	// but this is very unlikly to happen.
	MakeIngameMakro : function() {
		if (Talent.mainTab == -1)
			return;	
		
		var data = ""
		var mainTab = Talent.mainTab;
		
		for (var i=0; i < 3; ++i) {
			var tab = (mainTab + i) % 3;
			data += (tab + 1) + ",";
			var idx = 0;
			for (var row = 0; row < Talent.MAX_ROW; ++row) {
				var waitPrereq = ""
				for (var col = 0; col < Talent.MAX_COL; ++col) {
					if (Talent.tab[tab].buttons[row][col])
						idx++;
					else
						continue;
					
					var btn = Talent.tab[tab].buttons[row][col];
					var pts = btn.points;
					if (pts > 0) {
						if (btn.spell.reqCol && btn.spell.reqCol > col) {
							waitPrereq = (idx * 10 + pts) + "," + waitPrereq;
						}
						else {
							data += (idx * 10 + pts) + ",";
						}
					}
				}
				data += waitPrereq;
			}
		}
		
		var makro = "/run t,p,a={" + data + "}SetPreviewPrimaryTalentTree(t[1],GetActiveTalentGroup())for i=1,#t do a=t[i]if a<9 then p=a else AddPreviewTalentPoints(p,floor(a/10),a%10)end end"
		prompt("Benutze den folgenden Chatbefehl im Spiel.\nFunktioniert nur, wenn der Charakter noch keine Talente gelernt hat und setzt nur Vorschau Punkte, ohne die Talente wirklich zu lernen. ", makro);
	},
};
