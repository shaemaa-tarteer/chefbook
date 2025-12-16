<?php
// פרטי החיבור למסד הנתונים
$servername = "localhost";  
$username = "shaemaata_chefBook";  
$password = "ncV9NlnhpoV%";  
$database = "shaemaata_chefbook_db";  

// יצירת חיבור למסד הנתונים
$connection = new mysqli($servername, $username, $password, $database);

// בדיקת חיבור
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// קבלת נתוני הטופס באמצעות שיטת POST
$recipeName = $_POST['recipeName'];
$category = $_POST['category'];
$ingredients = $_POST['ingredients'];
$instructions = $_POST['instructions'];

// הכנת שאילתת ה-INSERT
$sql = "INSERT INTO recipes (name, category, ingredients, instructions)
        VALUES ('$recipeName', '$category', '$ingredients', '$instructions')";

// ביצוע השאילתה ובדיקת הצלחה
if ($connection->query($sql) === FALSE) {
    echo "Cannot add new recipe. Error is: " . $connection->error;
    exit();
} 

echo "New Recipe was added"; 

// סגירת החיבור
$connection->close();
?>