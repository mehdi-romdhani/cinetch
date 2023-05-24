<?php
require_once 'vendor/autoload.php';
session_start();
// var_dump($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- LINK CSS -->
    <link rel="stylesheet" href="./assets/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Montserrat&display=swap" rel="stylesheet">
    <!-- LINK JS -->
    <script defer src="./scripts/script.js"></script>
    <script defer src="./scripts/searchbar.js"></script>
    <title>Vidopia - All movies</title>
</head>

<body>



    <?php require_once('header.php') ?>

    <div class="title">
        <p>Upcoming Movie</p>
    </div>

    <div class="container-upcoming-movie">

    </div>

    <div class="title">
        <p>Movie Top Rated</p>
    </div>

    <div class="container-movie-top-rated">

    </div>

    <div class="title">
        <p>Series Top Rated</p>
    </div>

    <div class="container-serie">

    </div>



</body>

</html>