<?php
namespace Api\Controller;

use Api\Controller\AppController;
use Api\Utility\SUV;
use Cake\Utility\Hash;
use Cake\Network\Exception\InternalErrorException;

/**
* Users Controller
*
* @property \Api\Model\Table\UsersTable $Users
*/
class UsersController extends AppController
{

    /**
    * Index method
    *
    * @return \Cake\Network\Response|null
    */

    public function filter(){

    }
    public function index($arr = array())
    {

        $filter = SUV::apply(array('status'), $this->request->query);
        $filter = SUV::prefix('Users.', $filter);

        $this->paginate = [
            'conditions' => $filter
        ];

        $users = $this->paginate($this->Users);

        $this->set(compact('users'));
        $this->set('_serialize', ['users']);
    }

    /**
    * View method
    *
    * @param string|null $id User id.
    * @return \Cake\Network\Response|null
    * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function view($id = null)
    {
        $user = $this->Users->get($id, [
            // 'contain' => ['Groups', 'Companies', 'ActivityLog', 'Addresses', 'Notifications', 'Orders', 'PasswordsTokens', 'Payments', 'UserOrder', 'UsersCredits', 'UsersCreditsLogs', 'UsersVouchers']
        ]);

        $this->set('user', $user);
        $this->set('_serialize', ['user']);
    }

    /**
    * Add method
    *
    * @return \Cake\Network\Response|void Redirects on successful add, renders view otherwise.
    */
    public function add()
    {

        $user = $this->Users->newEntity();
        if ($this->request->is('post')) {
            $user = $this->Users->patchEntity($user, $this->request->data);
            if ($this->Users->save($user)) {
                $this->set(compact('user'));
                $this->set('_serialize', ['user']);
            } else {
                // $this->set('_serialize', ['user']);
                throw new InternalErrorException();
            }
        }
        $this->set('_serialize', ['user']);
    }

    /**
    * Edit method
    *
    * @param string|null $id User id.
    * @return \Cake\Network\Response|void Redirects on successful edit, renders view otherwise.
    * @throws \Cake\Network\Exception\NotFoundException When record not found.
    */
    public function edit($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $user = $this->Users->patchEntity($user, $this->request->data);
            if ($this->Users->save($user)) {
                $this->set(compact('user'));
                $this->set('_serialize', ['user']);
            } else {
                throw new InternalErrorException();
            }
        }
        $this->set(compact('user'));
        $this->set('_serialize', ['user']);
    }

    /**
    * Delete method
    *
    * @param string|null $id User id.
    * @return \Cake\Network\Response|null Redirects to index.
    * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);

        if (!$id){
            // delete multiples
            $users = $this->request->data['users'];
            foreach ($users as $id) {
                $user = $this->Users->get($id);
                if ($this->Users->delete($user)) {
                    $response[] = $user;
                }
            }

            $this->set('users', $response);
            $this->set('_serialize', ['user']);
        }else{
            // delete single
            $user = $this->Users->get($id);
            if ($this->Users->delete($user)) {
                $this->set(compact('user'));
                $this->set('_serialize', ['user']);
            } else {
                throw new InternalErrorException();
            }
        }
    }
}
