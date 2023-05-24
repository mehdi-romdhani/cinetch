<?php

namespace App\Model;
use PDO;
use PDOException;

abstract class AbstractModelUser{

    protected ?string $table = "";

    protected $pdo;
    
    public function __construct()
    {
        try {
            $host = "localhost";
            $dbname = "cinetech";
            $username = "root";
            $password = "";
        
            $this->pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        
            // Set error handling to throw exceptions
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
            // Perform database operations here
        
        } catch (PDOException $e) {
            // Handle the exception/error here
            echo "Connection failed: " . $e->getMessage();
        }
        
    }


    public function registerDb(string $login,string $mail, string $password) :void
    {
        
        $req = "INSERT INTO $this->table(login,mail,password) VALUES(:login,:mail,:password)";

        $stmt = $this->pdo->prepare($req);
        $stmt->bindParam(':login',$login);
        $stmt->bindParam(':mail',$mail);
        $stmt->bindParam(':password',$password);
        $stmt->execute();
  
    }


}

?>