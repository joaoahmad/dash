<?php

namespace Api\Utility;
use Cake\Utility\Hash;

class SUV {

    /**
     * Prefix array keys
     */
    public static function prefix($prefix = '', $arr = array()){
        foreach($arr as $key => $val){
            $arr[$prefix . $key] = $val;
            unset($arr[$key]);
        }
        return $arr;
    }

    /**
     * Apply a array keys A by array B values
     */
    public static function apply($arrA = array(), $arrB = array()){
        $new_arr = array();
        foreach($arrA as $key){
            if(isset($arrB[$key])){
                $new_arr[$key] = $arrB[$key];
            }
        }
        return Hash::filter($new_arr);
    }


}
