<?php

  //include settings:
  require ("../settings.php");

  $filename = '../wowtal.zip';
  if( file_exists( $filename ) ) {
      $last_modified =  date( "Y. F d H:i:s." , filemtime( $filename ) );
  }

?>

<!DOCTYPE html>

  <head>
  
    <!-- meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta property="fb:admins" content="<?=$your_facebook_id;?>"/>
    <meta property="fb:app_id" content="<?=$your_facebook_app_id;?>"/>

    <!-- title -->
    <title>World of Warcraft - Cataclysm Talentplaner</title>
  
    <!-- stylesheets -->
    <link rel="stylesheet" type="text/css" href="../css/general.css" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" type="text/css" href="../css/dd.css" /><!-- MSDropDown -->
    <link rel="stylesheet" type="text/css" href="../css/flags.css" /><!-- MSDropDown -->

    <!-- javascripts -->
    <script type="text/javascript" src="../js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/jquery.dd.js"></script><!-- MSDropDown -->
    <script type="text/javascript" src="../js/jquery.backstretch.min.js"></script><!-- background img -->
    
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

        $.backstretch("../img/background.jpg");//set background
        
        try{
		      var pages = $("#language-select select").msDropdown({
		        roundedCorner:false,
		        on:{
              change:function(data, ui){
                var current = "ger";
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
        
        //Facebook JavaScript SDK
        (function(d, s, id) {  
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=<?=$your_facebook_app_id;?>";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

      });    
       
    </script>
  
  </head>
  
  <body>
    <div id="fb-root"></div>
  
    <div id="link-panel">
      <div id="language-select">
        <select>
          <option value="eng" data-image="../img/blank.gif" data-imagecss="flag gb" data-title="English">English</option>
          <option value="ger" data-image="../img/blank.gif" data-imagecss="flag de" data-title="German" selected="selected">German</option>
          <option value="hun" data-image="../img/blank.gif" data-imagecss="flag hu" data-title="Hungarian" disabled="disabled">Hungarian</option>
        </select>
      </div>
      
      <h1>WoW Cataclysm Talentplaner</h1>
      
    </div>
  
    <div id="header-calc">
    
      <div class="button-panel">
        <img id="class-icon" width="36" height="36" />
        <span id="class-name"></span>
        <span id="points-display">
          <span id="short-points"></span> – <span id="pts-cur"></span>/<span id="pts-total"></span> Punkte vergeben - Level <span id="req-lvl"></span>
        </span><!-- #points-display -->
        <span id="reset-all-btn" class="red-button">Alles zurücksetzen</span>
      </div><!-- .button-panel -->
      
      <div class="button-panel">
				<span id="toggle-btn" class="red-button">Umschalten</span>
				<!--<span id="link-btn" class="red-button">Link</span>-->
				<!--<span id="lock-btn" class="red-button" title="Klicken um &#39;Krieger&#39; als Standardklasse festzulegen.">Standardklasse</span>-->
				<!--<span id="ingame-btn" class="red-button">Im Spiel nutzen</span>-->
			</div><!-- .button-panel -->
			
		</div><!-- #header-calc -->
			
	  <div id="calc_and_glyph_container">
			
		  <div id="talent-calc">
		    <div id="tab-0-header" class="talent-tab-header"></div>
		    <div id="tab-1-header" class="talent-tab-header"></div>
		    <div id="tab-2-header" class="talent-tab-header"></div> 
		  </div><!-- #talent-calc -->
		
		  <div id="glyph-container">
		    <div id="glyph-2-pane" class="glyph-pane">
		      <div class="glyph-header">Primäre Glyphen:</div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		    </div>
		    <div id="glyph-0-pane" class="glyph-pane">
		      <div class="glyph-header">Erhebliche Glyphen:</div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		    </div>
		    <div id="glyph-1-pane" class="glyph-pane">
		      <div class="glyph-header">Geringe Glyphen:</div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		      <div class="glyph-entry">
		        <img src="../icon/missing.png" height="25" width="25">
				    <span>Keine Glyphe</span>
		      </div>
		    </div>
		  </div><!-- #glyph-container -->
		  
	  </div><!-- #calc_and_glyph_container -->
		
		<div class="clearfix"></div>
			
		<div id="footer">
		
		  <div id="fb-num-comments">
		    <fb:comments-count href="<?=$your_wowtal_directory;?>/ger/"></fb:comments-count> awesome comments
		  </div>
		
		  <div id="fb-comments">
		    <fb:comments numposts="4" title="Wowtal comments" data-href="<?=$your_wowtal_directory;?>/ger/" data-width="771px" colorscheme="dark"></fb:comments>
		  </div>
		  
		  <div id="download">
		    <a href="../wowtal.zip">Quellcode Downloaden:</a>
		    <a href="../wowtal.zip"><img src="../img/download.png" width="80px"/></a>
		    <p id="last-updated">Zuletzt aktualisiert:</p>
		    <p id="last-updated-time"><?=$last_modified;?></p>
		  </div>
		  
		  <div id="original">
		    <p>Sie können die deutsche Originalfassung hier finden:</p>
		    <a href="http://wow.gamona.de/talentcalc/" target="_blank"><img src="../img/link.png" width="70px"/></a>
		    <a id="original-link" href="http://wow.gamona.de/talentcalc/" target="_blank">http://wow.gamona.de/talentcalc/</a>
		  </div>
		  
		  <div class="clearfix"></div>
		  
    </div><!-- #footer -->
  
  </body>

</html>

