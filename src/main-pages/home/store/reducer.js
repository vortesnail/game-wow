import { fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
   recommendList: [],
   articleList: [],
   rankList: [],
   moreArticleIndexPage: 1,
   showScrollBtn: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOMEDATA:
            return state.merge({
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList),
                rankList: fromJS(action.rankList)
            })
            // state.set('recommendList', action.recommendList).set.......
        case constants.ADD_MORE_ARTICLE:
            return state.set('articleList', state.get('articleList').concat(action.list))
                        .set('moreArticleIndexPage', action.page);
        case constants.CHANGE_SCROLL_BTN:
            return state.set('showScrollBtn', action.show);
        default:
            return state;
    }
}