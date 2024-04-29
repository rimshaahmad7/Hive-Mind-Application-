<?php
// connecting to DataBase
$conn = mysqli_connect("localhost", "root", "", "aichatbot") or die("Database Error");

// getting user message through ajax
$getMesg = mysqli_real_escape_string($conn, $_POST['text']);

// checking user query to database query
$check_data = "SELECT replies FROM `ai assistant` WHERE queries LIKE '%$getMesg%'";

$run_query = mysqli_query($conn, $check_data) or die("Error");

// if user query matched to database query we will show the reply otherwise it go to else statement 
if (mysqli_num_rows($run_query) > 0){
    $row = mysqli_fetch_array($run_query);
    $replay = $row['replies'];
    echo $replay;
} else {
    echo "Sorry can't be able to understand you!";
}
 
?>


