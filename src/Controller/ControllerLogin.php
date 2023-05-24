<?php

namespace App\Controller;

use App\Model\AuthUserModel;

class ControllerLogin
{

    public function insertUser(array $array) :void
    {
        $login = htmlspecialchars(trim($array['login']));
        $mail = htmlspecialchars(trim($array['mail']));
        $pass = htmlspecialchars(trim($array['password']));
        // var_dump($pass);

        $password = password_hash($pass, PASSWORD_DEFAULT);

        $mess = [];

        $user = new AuthUserModel();

        if ($user->checkUser($mail)) {
            $mess['mailExist'] = "this count already exist";
        } elseif (empty($login)) {
            $mess['mailFail'] = "Required Champs";
        } elseif (!empty($login) && !empty($mail) & !empty($mail) && !empty($password)) {
            $user->registerDb($login, $mail, $password);
            $mess['insertUser'] = "Subscribe done";
        }

        echo json_encode($mess);
    }

    public function connectUser(array $array) : void
    {
        // $login = htmlspecialchars(trim($array['login']));
        // $pass = htmlspecialchars(trim($array['password']));
        $user = new AuthUserModel();
        $checkUser = $user->rowCountUser($array['login']);


        $user = $user->connectUser($array['login']);


        $mess = [];

        if(empty($array['login']) && empty($array['password'])){
            $mess['empty']="Required All Champs";
        }elseif($checkUser == 0){
            $mess['user'] = "User doesn't exist";
        }elseif( $checkUser >0 && $array['password'] == password_verify($array['password'],$user['password'])){
            session_start();
            $mess['log'] = "You are Cconnect";
            $_SESSION['user'] = ["id" => $user['id'], "login" => $user['login'], "password"=>$user['password']];
            
        }

        echo json_encode($mess);
       

        
    }
}
