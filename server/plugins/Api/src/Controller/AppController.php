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

        header("Access-Control-Allow-Origin: *");

        // $this->response->cors($this->request)
        // ->allowOrigin(['*'])
        // ->allowMethods(['GET', 'POST'])
        // ->build();
    }
}
