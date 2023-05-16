<?php 

require 'vendor/autoload.php';
var_dump('vendor/autoload.php');

$router = new AltoRouter();
var_dump($router);

$router->setBasePath('/Projets/cinetch/');
//route


$router->map( 'GET', '/index', function(){
    require_once(__DIR__.'/index.php');
}, '/index' );


//Config route
$match = $router->match();

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>