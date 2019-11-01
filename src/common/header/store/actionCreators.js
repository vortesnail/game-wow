import * as constants from './constants.js';
// import { fromJS } from 'immutable';
import axios from 'axios';

export const userImgHovered = () => ({
    type: constants.USER_IMG_HOVERED
})

export const userPopEnter = () => ({
    type: constants.USER_POP_ENTER
})

export const userPopLeave = () => ({
    type: constants.USER_POP_LEAVE
})

export const userImgUnhovered = () => ({
    type: constants.USER_IMG_UNHOVERED
})

export const messageHovered = () => ({
    type: constants.MESSAGE_HOVERED
})

export const messageUnhovered = () => ({
    type: constants.MESSAGE_UNHOVERED
})

export const dynamicHovered = ()=> ({
    type: constants.DYNAMIC_HOVERED
})

export const dynamicUnhovered = ()=> ({
    type: constants.DYNAMIC_UNHOVERED
})

export const collectionHovered = ()=> ({
    type: constants.COLLECTION_HOVERED
})

export const collectionUnhovered = ()=> ({
    type: constants.COLLECTION_UNHOVERED
})

export const historyHovered = () => ({
    type: constants.HISTORY_HOVERED
})

export const historyUnhovered = () => ({
    type: constants.HISTORY_UNHOVERED
})

// 数据请求
export const getUserList = () => {
    return (dispatch) => {
        axios.get('/api/header/userList.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_USER_LIST,
                data: data
            }
            dispatch(action);
        }).catch(() => {
            console.log('can not get the data');
        })
    }
}

export const getMessageList = () => {
    return (dispatch) => {
        axios.get('/api/header/messageList.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_MESSAGE_LIST,
                data: data
            }
            dispatch(action);
        }).catch(() => {
            console.log('can not get the data');
        })
    }
}

export const getDynaminList = () => {
    return (dispatch) => {
        axios.get('/api/header/dynamicList.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_DYNAMIC_LIST,
                data: data
            }
            dispatch(action);
        }).catch(() => {
            console.log('can not get the data');
        })
    }
}

export const getCollectionList = () => {
    return (dispatch) => {
        axios.get('/api/header/collectionList.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_COLLECTION_LIST,
                data: data
            }
            dispatch(action);
        }).catch(() => {
            console.log('can not get the data');
        })
    }
}

export const getHistoryList = () => {
    return (dispatch) => {
        axios.get('/api/header/historyList.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_HISTORY_LIST,
                data: data
            }
            dispatch(action);
        }).catch(() => {
            console.log('can not get the data');
        })
    }
}