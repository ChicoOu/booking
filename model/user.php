<?php
class User{
    private $username;
    private $password;

    function __construct(){
        $this->username = "";
        $this->password = "";
    }

    function setUserName($username){
        $this->username = $username;
    }

    function getUserName(){
        return $this->username;
    }

    function setPassword($password){
        $this->password = $password;
    }

    function getPassword(){
        return $this->password;
    }
}
?>
