<?php
require 'connection.php'; 
//$userScreeningTest;
$userInput = $_POST['userInput'];
$likeUserInput = "%" .$userInput."%";
$getUserMessage = $connect->prepare("SELECT reply FROM message WHERE questions LIKE ?");
$getUserMessage->bind_param('s',$likeUserInput);
$getUserMessage->execute();
$getUserMessage->store_result();
$getUserMessage->bind_result($reply);
$fetch = $getUserMessage->fetch();
if($rows = $getUserMessage->num_rows>0){   
    echo $reply;
}
else{
    if($rows = $getUserMessage->num_rows<=0){
        echo "Sorry. I cannot understand you"; 
    }
    
}




?>