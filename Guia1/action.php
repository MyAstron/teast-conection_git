<?php 
error_reporting(0);
	if (isset($_POST['btn_Env'])) {
		$code_found = $_POST['code_found'];
		echo include_once ("./edit.php");
	}else
	if (isset($_POST['btn_Bak'])) {
		$code_found = $_POST['code_found'];
		echo include_once ("./index.php");
	}
?>