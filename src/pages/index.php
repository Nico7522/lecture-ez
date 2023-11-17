<?php session_start(); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eden Zero chapitre 264</title>
    <link rel="stylesheet" href="./styles.css">
</head>


<body>
<?php include_once('./db.php'); ?>
<?php include_once('./login.php'); ?>
<?php if(isset($_SESSION['LOGGED_USER'])): ?>

    <h1><img src="./titre.png" alt=""></h1>

    <!-- <form class="recherche-page">
        <label for="recherche">Rechercher une page</label>
        <input type="text" name="" id="recherche"> 
    </form> -->

<div class="container">
    <ul class="liste-page">
        
    </ul>
</div>

    <!-- <h1>CAHPITRE SUIVANT</h1>

<div class="container2">
    <ul class="liste2">
        
    </ul>
</div>    -->

<?php else: ?>
    


<?php endif; ?>
    



    <!-- <script src="newJS.js"></script> -->
    <script src="JS.js"></script>
</body>
</html>