<?php
	require 'includes/lightopenid/openid.php';
	$_STEAMAPI = "1F71CFD32433523A7112B8FDED47B443";
	try 
	{
		$openid = new LightOpenID('http://timothyfenton.com/');
		if(!$openid->mode) 
		{
			if(isset($_GET['login'])) 
			{
				$openid->identity = 'http://steamcommunity.com/openid/?l=english';    // This is forcing english because it has a weird habit of selecting a random language otherwise
				header('Location: ' . $openid->authUrl());
			}
		 } 
		elseif($openid->mode == 'cancel') 
		{
			echo 'User has canceled authentication!';
		} 
		else 
		{
			if($openid->validate()) 
			{
					$id = $openid->identity;
					// identity is something like: http://steamcommunity.com/openid/id/76561197960435530
					// we only care about the unique account ID at the end of the URL.
					$ptn = "/^http:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/";
					preg_match($ptn, $id, $matches);
					//echo "User is logged in (steamID: $matches[1])\n";

					$url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$_STEAMAPI&steamids=$matches[1]";
					$json_object= file_get_contents($url);
					$json_decoded = json_decode($json_object);

					foreach ($json_decoded->response->players as $player)
					{
						setcookie("playid", $player->steamid);
						/* Redirect to a different page in the current directory that was requested */
						$host  = $_SERVER['HTTP_HOST'];
						$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
						$extra = 'talent.php';
						header("Location: http://$host$uri/$extra");
						exit;
					}

			} 
			else 
			{
					echo "User is not logged in.\n";
			}
		}
	} 
	catch(ErrorException $e) 
	{
		echo $e->getMessage();
	}
	if(!empty($_COOKIE['canaccess']) && $_COOKIE['canaccess'] == 1234 )
	{
		/* Redirect to a different page in the current directory that was requested */
		$host  = $_SERVER['HTTP_HOST'];
		$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
		$extra = 'talent.php';
		header("Location: http://$host$uri/$extra");
		exit;
	}
	if(!empty($_POST['usernames']) && !empty($_POST['passs']))
	{
		$username = $_POST['usernames'];
		$password = $_POST['passs'];
		$userbool = false;
		
		$users = file("./pass.txt");
		foreach($users as $user)
		{
			$exploded = explode("|", $user);
			$curuser = $exploded[0];
			$curpass = $exploded[1];
			
			if($username === $curuser)
			{
				if(trim(sha1($password)) === trim($curpass))
				{
					setcookie ("playid", "", time() - 3600);
					setcookie('playid',1234, time() + 60*60*24*30, '/');
					/* Redirect to a different page in the current directory that was requested */
					$host  = $_SERVER['HTTP_HOST'];
					$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
					$extra = 'talent.php';
					header("Location: http://$host$uri/$extra");
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
			echo "<p class='error'>Invalid Password</p>";
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
	<body background="./img/background.jpg">
		<div id="content">
			<div id="vpb_login_pop_up_box" class="vpb_signup_pop_up_box">
				<div id="container">
					<div align="center" style="font-family:Verdana, Geneva, sans-serif; font-size:16px; font-weight:bold;">
						War3Evo Talent Picker Login
					</div>
					
					<br clear="all">
					
					<div align="center" style="font-family:Verdana, Geneva, sans-serif; font-size:11px;">
						You need a username and password to access this page!
					</div>
					
					<br clear="all">
					<br clear="all">
					
					<form id="login" action="?login" method="POST">	

						<div id="submitbtn" align="center">
							<input type="image" src="http://cdn.steamcommunity.com/public/images/signinthroughsteam/sits_small.png">
						</div>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>