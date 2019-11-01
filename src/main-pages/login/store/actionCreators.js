import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login/loginData.json?account='+account+'&password='+password).then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_LOGIN,
                isLogin: data.isLogin
            }
            dispatch(action);
        }).catch(() => {
            alert('登录失败')
            console.log('can not receive data');
        })
    }
}

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    isLogin: false,
})