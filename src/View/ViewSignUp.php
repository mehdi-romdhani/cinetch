
<?php
require_once '/var/www/html/Projets/cinetch/vendor/autoload.php';

use App\Controller\ControllerLogin;
$insertUser = new ControllerLogin();

if(isset($_GET['login'])){
    $insertUser->insertUser(['login' => $_POST['login'], 'mail' => $_POST['mail'],'password' => $_POST['password']]);
    die();
}


?>

<form method="POST"id="signUp">
        <label for="login">Login</label>
        <input type="text" name="login" id="login">
        <label for="email">Email</label>
        <input type="text" name="mail" id="mail">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <label for="confpass">Confirm Password</label>
        <input type="password" id="confpass" name="confpass">
        <input type="submit" name="submit"value="Subscribe" id="in">
        <p id="messError"></p>
    </form>
