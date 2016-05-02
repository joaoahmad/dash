<?php

namespace Api\Controller;

use App\Controller\AppController as BaseController;
use Cake\Event\Event as Event;

class AppController extends BaseController{

    public $components = [
        'RequestHandler'
    ];

    // public function initialize(){
    //     parent::initialize();
    // }

    public function beforeFilter(Event $event) {
        parent::beforeFilter($event);
    }
}
