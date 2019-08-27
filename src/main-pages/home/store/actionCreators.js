import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home/homeData.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.CHANGE_HOMEDATA,
                recommendList: data.recommendList,
                articleList: data.articleList,
                rankList: data.rankList
            }
            dispatch(action);;
        }).catch(() => {
            console.log('can not receive data');
        })
    }
}

export const getMoreArticleList = (page) => {
    return (dispatch) => {
        axios.get('/api/home/moreArticle.json?page=' + page).then((res) => {
            const data = res.data.data;
            const action = {
                type: constants.ADD_MORE_ARTICLE,
                list: fromJS(data),
                page: page + 1
            }
            dispatch(action);
        }).catch((err) => {
            console.log(err);
            console.log('can not get the data');
        })
    }
}

export const changeScrollBtn = (show) => ({
    type: constants.CHANGE_SCROLL_BTN,
    show
})
