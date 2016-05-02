<?php
use Cake\Routing\DispatcherFactory;

// DispatcherFactory::add('Api.REST', ['priority' => 1]);
DispatcherFactory::add('Api.REST');
DispatcherFactory::add('Api.Cors');
