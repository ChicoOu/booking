<?php
class RequestHelper{
    private static $s_instance = null;

    private function __construct(){
        
    }

    public function __destruct(){
        
    }

    private function __clone(){
        
    }

    public static function getInstance(){
        if( !(self::$s_instance instanceof self) ){
            self::$s_instance = new RequestHelper();
        }

        return self::$s_instance;
    }

    public function isGet(){
        return $_SERVER['REQUEST_METHOD'] == 'GET' ? true : false;
    }

    public function isPost(){
        return ($_SERVER['REQUEST_METHOD'] == 'POST' /*&& checkurlHash($GLOBALS['verify'])*/
&&(empty($_SERVER['HTTP_REFERER']) || preg_replace("~https?:\/\/([^\:\/]+).*~i", "\\1", $_SERVER['HTTP_REFERER']) == preg_replace("~([^\:]+).*~", "\\1", $_SERVER['HTTP_HOST']))) ? true : false;
    }

    public function isAjax(){
        if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
            strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
            return true;
        }else{
            return false;
        }
   }
}
?>
