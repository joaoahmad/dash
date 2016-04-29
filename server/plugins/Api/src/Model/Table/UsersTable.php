<?php
namespace Api\Model\Table;

use Api\Model\Entity\User;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Users Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Groups
 * @property \Cake\ORM\Association\BelongsTo $Companies
 * @property \Cake\ORM\Association\HasMany $ActivityLog
 * @property \Cake\ORM\Association\HasMany $Addresses
 * @property \Cake\ORM\Association\HasMany $Notifications
 * @property \Cake\ORM\Association\HasMany $Orders
 * @property \Cake\ORM\Association\HasMany $PasswordsTokens
 * @property \Cake\ORM\Association\HasMany $Payments
 * @property \Cake\ORM\Association\HasMany $UserOrder
 * @property \Cake\ORM\Association\HasMany $UsersCredits
 * @property \Cake\ORM\Association\HasMany $UsersCreditsLogs
 * @property \Cake\ORM\Association\HasMany $UsersVouchers
 */
class UsersTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->table('users');
        $this->displayField('name');
        $this->primaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Groups', [
            'foreignKey' => 'group_id',
            'className' => 'Api.Groups'
        ]);
        $this->belongsTo('Companies', [
            'foreignKey' => 'company_id',
            'className' => 'Api.Companies'
        ]);
        $this->hasMany('ActivityLog', [
            'foreignKey' => 'user_id',
            'className' => 'Api.ActivityLog'
        ]);
        $this->hasMany('Addresses', [
            'foreignKey' => 'user_id',
            'className' => 'Api.Addresses'
        ]);
        $this->hasMany('Notifications', [
            'foreignKey' => 'user_id',
            'className' => 'Api.Notifications'
        ]);
        $this->hasMany('Orders', [
            'foreignKey' => 'user_id',
            'className' => 'Api.Orders'
        ]);
        $this->hasMany('PasswordsTokens', [
            'foreignKey' => 'user_id',
            'className' => 'Api.PasswordsTokens'
        ]);
        $this->hasMany('Payments', [
            'foreignKey' => 'user_id',
            'className' => 'Api.Payments'
        ]);
        $this->hasMany('UserOrder', [
            'foreignKey' => 'user_id',
            'className' => 'Api.UserOrder'
        ]);
        $this->hasMany('UsersCredits', [
            'foreignKey' => 'user_id',
            'className' => 'Api.UsersCredits'
        ]);
        $this->hasMany('UsersCreditsLogs', [
            'foreignKey' => 'user_id',
            'className' => 'Api.UsersCreditsLogs'
        ]);
        $this->hasMany('UsersVouchers', [
            'foreignKey' => 'user_id',
            'className' => 'Api.UsersVouchers'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        $validator
            ->requirePresence('name', 'create')
            ->notEmpty('name');

        $validator
            ->email('email')
            ->requirePresence('email', 'create')
            ->notEmpty('email');

        $validator
            ->allowEmpty('password');

        $validator
            ->allowEmpty('telephone');

        $validator
            ->allowEmpty('ramal');

        $validator
            ->allowEmpty('status');

        $validator
            ->boolean('trash')
            ->allowEmpty('trash');

        $validator
            ->allowEmpty('tmp_address');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->isUnique(['email']));
        $rules->add($rules->existsIn(['group_id'], 'Groups'));
        $rules->add($rules->existsIn(['company_id'], 'Companies'));
        return $rules;
    }
}
