<?php
namespace Api\Controller;

use Api\Controller\AppController;
use Api\Utility\SUV;
use Cake\Utility\Hash;

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
            'contain' => ['Groups', 'Companies'],
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
                $this->Flash->success(__('The user has been saved.'));
                return $this->redirect(['action' => 'index']);
            } else {
                $this->Flash->error(__('The user could not be saved. Please, try again.'));
            }
        }
        $groups = $this->Users->Groups->find('list', ['limit' => 200]);
        $companies = $this->Users->Companies->find('list', ['limit' => 200]);
        $this->set(compact('user', 'groups', 'companies'));
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
            // pr($user); die;
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));
                // $this->set(compact('user', 'groups', 'companies'));
                $this->set('_serialize', ['user']);
                // return $this->redirect(['action' => 'index']);
            } else {
                $this->Flash->error(__('The user could not be saved. Please, try again.'));
            }
        }
        $groups = $this->Users->Groups->find('list', ['limit' => 200]);
        $companies = $this->Users->Companies->find('list', ['limit' => 200]);
        $this->set(compact('user', 'groups', 'companies'));
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
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $this->Flash->success(__('The user has been deleted.'));
        } else {
            $this->Flash->error(__('The user could not be deleted. Please, try again.'));
        }
        return $this->redirect(['action' => 'index']);
    }
}
