<!DOCTYPE html>
<html>
<body>
<?php
echo("Hello!");

require('./dao/UserDAO.php');
$dao = new UserDAO();
$users = $dao->getAllUsers();
foreach($users as $user){
    echo($user->getUserName() . "<br/>" . $user->getPassword());
}
?>

</body>
</html>
