<!DOCTYPE html>
<html>
<body>
<?php
echo("Hello!");

require('./common/requesthelper.php');
$helper = RequestHelper::getInstance();
if( $helper->isGet() ){
    echo("It's a get method!");
}
else if( $helper->isPost() ){
    echo("It's a post method!");
}
else{
    echo("It's unknonw method!");
}


require('./dao/UserDAO.php');
$dao = new UserDAO();
$users = $dao->getAllUsers();
foreach($users as $user){
    echo($user->getUserName() . "<br/>" . $user->getPassword());
}
?>

</body>
</html>
