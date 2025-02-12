<?php

namespace App\Models;

use App\Constant\BillTag;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class Member extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * 变更会员余额
     * @param int $money 余额
     * @param int $user_id 会员ID
     * @param BillTag $memo 备注
     * @throws \Exception
     */
    public static function money($money, $user_id, $memo)
    {
        $user = self::query()->where('id', $user_id)->first();
        if (!$user) {
            throw new \Exception('会员不存在');
        }
        if ($user->balance + $money < 0) {
            throw new \Exception('余额不足');
        }

        DB::beginTransaction();
        try {
            if ($money != 0) {
                $before = $user->balance;
                $after = function_exists('bcadd') ? bcadd($user->balance, $money, 2) : $user->balance + $money;
                //更新会员信息
                $user->balance = $after;
                $user->save();

                $type = $money > 0 ? 1 : 2;

                //写入日志
                UserBill::create(['member_id' => $user_id, 'type' => $type, 'amount' => $money, 'before_balance' => $before, 'after_balance' => $after, 'tag' => $memo->name]);
            }
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 变更会员币种余额
     * @param int $money 余额
     * @param int $user_id 会员ID
     * @param int $currency_id 币种ID
     * @param BillTag $memo 备注
     * @throws \Exception
     */
    public static function coinMoney($money, $user_id, $currency_id, $memo)
    {
        $user = self::query()->where('id', $user_id)->first();
        if (!$user) {
            throw new \Exception('会员不存在');
        }

        $userCurrency = UserCryptoBalance::query()->where('member_id', $user_id)->where('currency_id', $currency_id)->first();

        if (!$userCurrency) {
            $userCurrency = UserCryptoBalance::query()->create(['member_id' => $user_id, 'currency_id' => $currency_id, 'balance' => 0]);
        }

        if ($userCurrency->balance + $money < 0) {
            throw new \Exception('余额不足');
        }

        DB::beginTransaction();
        try {
            if ($money != 0) {
                $before = $userCurrency->balance;
                $after = function_exists('bcadd') ? bcadd($userCurrency->balance, $money, 2) : $userCurrency->balance + $money;
                //更新会员信息
                $userCurrency->balance = $after;
                $userCurrency->save();

                $type = $money > 0 ? 1 : 2;

                //写入日志
                UserBill::create(['member_id' => $user_id, 'type' => $type, 'amount' => $money, 'before_balance' => $before, 'after_balance' => $after, 'tag' => $memo->name, 'currency_id' => $currency_id]);
            }
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            throw new \Exception($e->getMessage());
        }
    }

    function getBalanceAttribute()
    {
        $userCryptoBalance = UserCryptoBalance::query()->where('member_id', $this->id)->where('currency_id', 4)->first();
        if (!$userCryptoBalance) {
            $userCryptoBalance = UserCryptoBalance::query()->create(['member_id' => $this->id, 'currency_id' => 4, 'balance' => 0]);
        }
        return $userCryptoBalance->balance;
    }

    public function title()
    {
        return $this->email;
    }

    function parent()
    {
        return $this->belongsTo(Member::class, 'parent_id', 'id');
    }

    function banks()
    {
        return $this->hasMany(UserBank::class, 'member_id', 'id');
    }

    function initWallet()
    {
//        $udun = uDun::getInstance();
        $currencies = Currency::all();
//        $has_add_chain = [];
        foreach ($currencies as $currency) {
            $walletBalance = new UserCryptoBalance();
            $walletBalance->member_id = $this->id;
            $walletBalance->currency_id = $currency->id;
            $walletBalance->save();

//            if (isset($has_add_chain[$currency->main_coin_type])) {
//                //如果已经存在地址 则直接保存
//                $userCryptoWallet = new UserCryptoAddress();
//                $userCryptoWallet->member_id = $this->id;
//                $userCryptoWallet->currency_id = $currency->id;
//                $userCryptoWallet->address = $has_add_chain[$currency->main_coin_type];
//                $userCryptoWallet->save();
//                continue;
//            }
//            $data = $udun->createAddress($currency->main_coin_type);
////            $data = json_decode($data, true);
//            if ($data['code'] != 200) {
//                throw new \Exception('创建钱包地址失败');
//            }
//            $address = $data['data']['address'];
//            $has_add_chain[$currency->main_coin_type] = $address;
//            $userCryptoWallet = new UserCryptoAddress();
//            $userCryptoWallet->member_id = $this->id;
//            $userCryptoWallet->currency_id = $currency->id;
//            $userCryptoWallet->address = $address;
//            $userCryptoWallet->save();
        }
    }
}
