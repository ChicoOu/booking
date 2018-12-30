<?php
require('../model/user.php');

class UserDAO {
    private $servername= 'localhost';
    private $username = 'root';
    private $password = '';
    private $dbname = 'booking';
    private $conn = null;

    function __construct(){
        $this->connect();
    }

    function __destruct(){
        $this->conn = null;
    }

    function connect(){
        try{
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e)
        {
            echo($e->getMessage());
            $this->conn = null;
        }
    }

    function getAllUsers(){
        if( $this->conn == null ){
            $this->connect();
        } 

        if( $this->conn == null ){
            return null;
        }

        $sql = "SELECT * FROM user"; 
        $res = $this->conn->query($sql);
        $result = array();
        $i = 0;
        foreach($res as $row){
            $obj = new User();
            $obj->setUserName($row['username']);
            $obj->setPassword($row['PASSWORD']);
            $result[$i] = $obj; 
            $i++;
        }
        return $result;
    }
}
?>
