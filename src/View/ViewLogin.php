<?php
require_once('vendor/autoload.php');
session_start();
var_dump($_SESSION);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styleLogin.css">
    <script defer src="./scripts/sign.js"></script>
    <title>StreamPulse - </title>
</head>

<body>
    <?php require_once('header.php') ?>

    <button id="sign-up">SignUp</button>
    <button id="sign-in">SignIn</button>

    <div class="container-sign">

    </div>

</body>

</html>