<?php
namespace Api\Model\Entity;

use Cake\ORM\Entity;

/**
 * User Entity.
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property int $group_id
 * @property \Api\Model\Entity\Group $group
 * @property string $password
 * @property string $telephone
 * @property string $ramal
 * @property int $company_id
 * @property \Api\Model\Entity\Company $company
 * @property string $status
 * @property bool $trash
 * @property string $tmp_address
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 * @property \Api\Model\Entity\ActivityLog[] $activity_log
 * @property \Api\Model\Entity\Address[] $addresses
 * @property \Api\Model\Entity\Notification[] $notifications
 * @property \Api\Model\Entity\Order[] $orders
 * @property \Api\Model\Entity\PasswordsToken[] $passwords_tokens
 * @property \Api\Model\Entity\Payment[] $payments
 * @property \Api\Model\Entity\UserOrder[] $user_order
 * @property \Api\Model\Entity\UsersCredit[] $users_credits
 * @property \Api\Model\Entity\UsersCreditsLog[] $users_credits_logs
 * @property \Api\Model\Entity\UsersVoucher[] $users_vouchers
 */
class User extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false,
    ];

    /**
     * Fields that are excluded from JSON an array versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password'
    ];
}
