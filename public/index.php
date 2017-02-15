<?php
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

require __DIR__ . '/../api/vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../api/src/settings.php';

$container = new \Slim\Container($settings);

$container['persons'] = function ($container) {        
    return require __DIR__ . '/../api/src/data.php';   
};

$app = new \Slim\App($container);

// Set up dependencies
require __DIR__ . '/../api/src/dependencies.php';

// Register middleware
require __DIR__ . '/../api/src/middleware.php';

// Register routes
require __DIR__ . '/../api/src/routes.php';


// Run app
$app->run();
