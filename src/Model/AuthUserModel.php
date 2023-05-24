<?php

namespace App\Model;
class AuthUserModel extends AbstractModelUser{

    protected ?string $table = "user";

        public function __construct()
        {
            parent::__construct();
        }



        public function checkUser($mail){
            
            $req = "SELECT mail FROM $this->table WHERE mail = :mail";
            $stmt = $this->pdo->prepare($req);
            $stmt->bindParam('mail',$mail);
            $stmt->execute();
            $result =   $stmt->fetch($this->pdo::FETCH_ASSOC);
            return $result;
        }

        function rowCountUser(string $login)
        {
      
          $queryCheck = "SELECT * FROM user WHERE login = :login";
          $stmt1 = $this->pdo->prepare($queryCheck);
          $stmt1->bindParam(':login', $login);
          $stmt1->execute();
          $result = $stmt1->rowCount();
          return $result;
        }
       
        public function connectUser($login){
            $req = "SELECT id,login,password FROM $this->table WHERE login=:login";
            $stmt = $this->pdo->prepare($req);
            $stmt->bindParam('login',$login);
            $stmt->execute();
            $result = $stmt->fetch($this->pdo::FETCH_ASSOC);
            return $result;
        }


}

