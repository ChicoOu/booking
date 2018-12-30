<?php
require('../model/user.php');

class UserDAO {
    private $servername= 'localhost';
    private $username = 'root';
    private $password = '123456';
    private $dbname = 'booking';
    private $conn = null;

    function __construct(){
        $this->connect();
    }

    function __destruct(){
        $conn = null;
    }

    function connect(){
        try{
            $conn = new PDO('mysql:host=$servername;dbname=$dbname', $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e)
        {
            echo($e->getMessage());
            $conn = null;
        }
    }

    function getAllUsers(){
        if( $conn == null ){
            connect();
        } 

        if( $conn == null ){
            return null;
        }

        $sql = "SELECT * FROM user"; 
        $res = $pdo->query($sql);
        $result = array();
        $i = 0;
        foreach($res as $row){
            $obj = new User();
            $obj->setUserName($row['username']);
            $obj->setPassword($row['password']);
            $result[$i] = $obj; 
            $i++;
        }
        $conn = null;
        return $result;
    }
}
?>
