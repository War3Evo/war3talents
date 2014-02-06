<?php
	if(empty($_COOKIE['playid']))
	{
		header("Location: index.php");
		exit;
	}
	else if($_COOKIE['playid'] === 0)
	{
		header("Location: index.php");
		exit;
	}
	
	$steamint = $_COOKIE['playid'];
	function sixtyfourthirtytwo( $int )
	{		
	
		$commid = $int - 76561197960265728;
		$authserv = $int % 2;
		$commid = $commid - $authserv;
		$authid = $commid / 2;
		$ret = "STEAM_0:" . $authserv . ":" . $authid;
		
		return $ret;
	}
	
	//$steamvarchar = sixtyfourthirtytwo($steamint);
	
?>
<html>
	<head>
		<!-- meta -->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<!-- title -->
		<title>World of Warcraft - Cataclysm Talent Calculator</title>

		<!-- stylesheets -->
		<link rel="stylesheet" type="text/css" href="./css/general.css" />
		<link rel="stylesheet" type="text/css" href="./css/style.css" />
		<link rel="stylesheet" type="text/css" href="./css/dd.css" /><!-- MSDropDown -->

		<!-- javascripts -->
		<script type="text/javascript" src="./js/jquery-2.1.0.min.js"></script>
		<script type="text/javascript" src="./js/jquery.dd.js"></script><!-- MSDropDown -->
		<script type="text/javascript" src="./js/jquery.backstretch.min.js"></script><!-- background img -->

		<!-- Login -->
		<script language="javascript" type="text/javascript" src="js/vpb_script.js"></script>

		<script type="text/javascript" src="js/talent.js"></script>
		<script type="text/javascript" src="js/static-data.js"></script>
		<script type="text/javascript">
			var initCounter = 0;
			var NUM_INIT = 2;
			function init() {
				initCounter++;
				if (initCounter >= NUM_INIT)
				  Talent.Initialize();
			}

			$(document).ready(function(){
			$.backstretch("./img/background.jpg");//set background

			try{
				var pages = $("#language-select select").msDropdown({
					roundedCorner:false,
					on:{
				change:function(data, ui){
					var current = "eng";
					var to = data.value;
					if(to!=""){
						var from = document.location.href;
						var url = from.replace('/' + current + '/','/' + to + '/');
						document.location = url;
					}
				}
					}
				}).data("dd");
			}catch(e) {
				console.log(e);	
			}

			var q = "SH";
			var lockedClass = $.cookie("talentClass");

			if( lockedClass && ClassMap[lockedClass] ){
				q = lockedClass;
				Talent.lockedClass = ClassMap[lockedClass];
				Talent.isClassLocked = true;
			}

			if (window.location.search != "") {
				q = window.location.search.substr(1);
			}

			if( q ){
				if( !ClassMap[q] ){
					alert( "Unknown class " + q )
				}else{
					Class = ClassMap[q];
				}
			}

			$.getJSON("data/data-" + Class + ".js", function(d) {
				Data = d;
				init();
			});


			$.getJSON("data/glyph-" + Class + ".js", function(d) {
				Glyphs = d;
				init();
			});


			});
		</script>
	</head>
	<body>
		<div id="content">
			<div id="testing">
				<div id="link-panel">
				  <h1>Your SteamID: <?php echo $steamint; ?> War3Evo Talent Selector</h1>
				</div>
				<div id="header-calc">
					<div class="button-panel">
						<img id="class-icon" width="36" height="36" />
						<span id="class-name"></span>
						<span id="points-display">
							<span id="short-points"></span>
							<span id="pts-cur"></span>/
							<span id="pts-total"></span>
							Used points &mdash; Level 
							<span id="req-lvl"></span>
						</span><!-- #points-display -->
						<span id="logout-btn" class="red-button">
						Logout
						</span>
					</div><!-- .button-panel -->
					<div class="button-panel">
						<span id="reset-all-btn" class="red-button">Reset</span>
						<span id="toggle-btn" class="red-button">Change View</span>
						<span id="other-btn" class="red-button">Other Button</span>
						<span id="ingame-btn" class="red-button">Update</span>
					</div><!-- .button-panel -->	
				</div><!-- #header-calc -->	
				<div id="calc_and_glyph_container">	
					<div id="talent-calc">
						<div id="tab-0-header" class="talent-tab-header"></div>
						<div id="tab-1-header" class="talent-tab-header"></div>
						<div id="tab-2-header" class="talent-tab-header"></div> 
					</div><!-- #talent-calc -->
				</div><!-- #calc_and_glyph_container -->
				<div class="clearfix"></div>
				<div id="footer">
					<div class="clearfix"> </div>
					<span>Copyright &copy; 2014 <a href="http://war3evo.info/">War3Evo</a> --  V.1.0.1</span>
				</div><!-- #footer -->
			</div>
		</div>  
	</body>
</html>

