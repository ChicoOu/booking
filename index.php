<!DOCTYPE html>
<html>
<body>
<?php
echo("Hello!");

require('./dao/UserDAO.php');
$users = getAllUsers();
foreach($users as $user){
    echo($user->getUserName() + "<br/>" + $user->getPassword());
}
?>

</body>
</html>
