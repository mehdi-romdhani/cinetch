<?php
require_once '/var/www/html/Projets/cinetch/vendor/autoload.php';

use App\Controller\ControllerLogin;
$connect = new ControllerLogin();

if(isset($_GET['connect'])){
    $connect->connectUser(['login' => $_POST['login'],'password' => $_POST['password']]);
    die();
}


?>

    <form method="POST" id="signIn">

        <label for="login">Login</label>

        
        <input type="text" name="login" id="login">
        
        <label for="password">Password</label>
        
        <input type="password" name="password" id="password">
        
        <input type="submit" value="Connect">
        
        <p id="messConnect"></p>
    </form>
