<?php
require 'vendor/autoload.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- LINK CSS -->
    <link rel="stylesheet" href="./assets/style.css">
    <!-- LINK JS -->
    <script defer src="./scripts/script.js"></script>
    <script defer src="./scripts/searchbar.js"></script>
    <title>CineGenius</title>
</head>

<body>



<?php require_once('./src/View/header.php')?>

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