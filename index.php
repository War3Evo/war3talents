 <?php
	if(!empty($_COOKIE['canaccess']) && $_COOKIE['canaccess'] == 1234 )
	{
		header("Location: talent.php");
	}
	if(!empty($_POST['usernames']) && !empty($_POST['passs']))
	{
		$username = $_POST['usernames'];
		$password = $_POST['passs'];
		$userbool = false;
		
		$users = file("./pass.txt");
		foreach($users as $user)
		{
			$curuser = explode("|", $user)[0];
			$curpass = explode("|", $user)[1];
			
			if($username === $curuser)
			{
				if(trim(md5($password)) == trim($curpass))
				{
					setcookie("canaccess",1234);
					header('Location: ./talent.php');
					exit;
				}
				else{
					$userbool = true;
					break;
				}
			}
			else
			{
				$userbool = false;
			}
		}
		if($userbool == false)
			echo "<p class='error'>Invalid Username</p>";
		else
			echo "<p class='error'>" . md5($password) . "|" . $curpass . "</p>";
	}
 ?>
 <html>
 <head>
  
    <!-- meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- title -->
    <title>War3Evo Talent Login</title>
  
    <!-- stylesheets -->
    <link rel="stylesheet" type="text/css" href="./css/style.css" />

    <!-- javascripts -->
    <script type="text/javascript" src="./js/jquery-2.1.0.min.js"></script>

	<!-- Login -->
	<script language="javascript" type="text/javascript" src="js/vpb_script.js"></script>
	
    <script type="text/javascript">
    
    </script>
  
  </head>
<body bgcolor="black">
<!-- Login Box Starts Here -->
<div id="vpb_login_pop_up_box" class="vpb_signup_pop_up_box">
<div align="left" style="font-family:Verdana, Geneva, sans-serif; font-size:16px; font-weight:bold;">War3Evo Talent Picker Login</div><br clear="all">
<div align="left" style="font-family:Verdana, Geneva, sans-serif; font-size:11px;"> You need a username and password to access this page!
</div><br clear="all"><br clear="all">
<form id="login" action="./index.php" method="POST">
<div style="width:100px; padding-top:10px;margin-left:10px;float:left;" align="left">Your Username:</div>
<div style="width:300px;float:left;" align="left"><input type="text" id="usernames" name="usernames" value="" class="vpb_textAreaBoxInputs"></div><br clear="all"><br clear="all">

<div style="width:100px; padding-top:10px;margin-left:10px;float:left;" align="left">Your Password:</div>
<div style="width:300px;float:left;" align="left"><input type="password" id="passs" name="passs" value="" class="vpb_textAreaBoxInputs"></div><br clear="all"><br clear="all">

<div style="width:100px; padding-top:10px;margin-left:10px;float:left;" align="left">&nbsp;</div>
<div style="width:300px;float:left;" align="left">

<a href="javascript:void();" class="vpb_general_button" onClick="document.getElementById('login').submit();">Login</a>
</div>
</form>
<br clear="all"><br clear="all">
</div>
<!-- Login Box Ends Here -->
</body>
</html>
