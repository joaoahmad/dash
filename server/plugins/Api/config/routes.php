<?php
use Cake\Routing\Router;

Router::plugin(
    'Api',
    ['path' => '/api'],
    function ($routes) {
        $routes->extensions(['json']);
        $routes->resources('Users');
        $routes->fallbacks('DashedRoute');
    }
);
