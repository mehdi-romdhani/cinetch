<?php
// var_dump(__DIR__ . '/assets/img/transform.png');
?>
<div class="container-logo">
    <img src="../assets/img/transform.png" alt="logo">
    <nav class="navbar">
        <!-- <img src="./assets/img/logo-stream.png" alt="logo"> -->
        <ul>
            <li> <a href="/Projets/cinetch/home">Home</a> </li>
            <li> <a href="/Projets/cinetch/movies">Movies</a> </li>
            <li> <a href="/Projets/cinetch/series">Series</a> </li>
            <?php if (isset($_SESSION['user']['login'])) : ?>
                <li> <a href="/Projets/cinetch/login">Logout</a> </li>
            <?php else : ?>
                <li> <a href="/Projets/cinetch/login">Login</a> </li>
            <?php endif; ?>
        </ul>
    </nav>

    <header>
        <form action="" id="search-bar">
            <label for="search"></label>
            <input type="text" placeholder="Search" id="search-bar">
        </form>
    </header>

</div>