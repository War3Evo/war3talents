<?php
	$steamid = $_GET['steamid'];
	
	setcookie('playid',$steamid, time() + 60*60*24*30, '/');
	/* Redirect to a different page in the current directory that was requested */
	$host  = $_SERVER['HTTP_HOST'];
	$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
	$extra = 'talent.php';
	header("Location: http://$host$uri/$extra");
?>