<?php

require 'vendor/autoload.php';
// var_dump('vendor/autoload.php');

$router = new AltoRouter();
// var_dump($router);

$router->setBasePath('/Projets/cinetch');
//route


$router->map('GET', '/home', function () {
    require_once(__DIR__ . '/src/View/viewIndex.php');
    // var_dump(__DIR__ );
    // echo "hello";
}, 'home');

$router->map('GET', '/movie/[i:id]', function ($id) {
    require_once(__DIR__ . '/src/View/viewOneMovie.php');
}, 'oneMovie');

$router->map('GET', '/serie/[i:id]', function ($id) {
    require_once(__DIR__ . "/src/View/ViewOneSerie.php");
}, 'serie');

$router->map('GET','/movies',function(){
    require_once(__DIR__."/src/View/ViewMovies.php");
},'movies');

$router->map('GET', '/login', function () {
    require_once(__DIR__ . '/src/View/ViewLogin.php');
}, 'login');

//Config route
$match = $router->match();

// var_dump($match);

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
