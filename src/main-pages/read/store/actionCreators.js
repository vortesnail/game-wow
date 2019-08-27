import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getArticleData = (id) => {
    return (dispatch) => {
        axios.get('/api/read/articleData.json?id=' + id).then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.GET_ARTICLE_DATA,
                title: data.title,
				category: data.category,
				date: data.date,
				readNum: data.readNum,
                favorNum: data.favorNum,
                jiaNum: data.jiaNum,
                collectNum: data.collectNum,
				commentNum: data.commentNum,
				content: data.content,
            }
            dispatch(action);
        }).catch((e) => {
            console.log(e);
            console.log('can not receive data');
        })
    }
}

export const getWritterData = (id) => {
    return (dispatch) => {
        axios.get('/api/read/writterData.json?id=' + id).then((res) => {
            const data = res.data.data;
            const action ={
                type: constants.GET_WRITTER_DATA,
                userInfo: fromJS(data.userInfo),
                moreArticleList: fromJS(data.moreArticleList),
            }
            dispatch(action);
        }).catch((e) => {
            console.log(e);
            console.log('can not receive data');
        })
    }
}

export const getCommentData = (id) => {
    return (dispatch) => {
        axios.get('/api/read/commentList.json?id=' + id).then((res) => {
            const data = res.data.data;
            const action ={
                type: constants.GET_COMMENT_DATA,
                commentList: fromJS(data),
            }
            dispatch(action);
        }).catch((e) => {
            console.log(e);
            console.log('can not receive data');
        })
    }
}