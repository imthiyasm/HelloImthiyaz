<?php
    
    include('config.php');

	$data = json_decode(file_get_contents("php://input"));
    
    $userName = mysql_real_escape_string($data->userName);
    $userMobile = mysql_real_escape_string($data->mobileNo);
    $userArea = mysql_real_escape_string($data->area);
    $formType = mysql_real_escape_string($data->form);	
	
    $rowCount = mysql_query("SELECT * FROM Signup");
    if(mysql_num_rows($rowCount) == 0){
        if($formType == 'signUp'){
	       mysql_query("INSERT INTO `signup`(`userName`, `userMobileNo`, `userArea`) VALUES ('$userName' , $userMobile, '$userArea')");
		   $arr = array("New User", $userName, $userMobile, $userArea);
		   echo json_encode($arr);
        }
    }else{
        $recordExists = mysql_query("SELECT * FROM `signup` WHERE userMobileNo = $userMobile");
        if(mysql_num_rows($recordExists) > 0){
           $arr = array("User Exists", $userName, $userMobile, $userArea);
		   echo json_encode($arr);
        }else{
            if($formType == 'signUp'){
                mysql_query("INSERT INTO `signup`(`userName`, `userMobileNo`, `userArea`) VALUES ('$userName' , '$userMobile', '$userArea')");
            }
			$arr = array("New User", $userName, $userMobile, $userArea);
			echo json_encode($arr);
        }
    }
    //echo json_encode($data);
?>