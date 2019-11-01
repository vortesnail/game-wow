import { fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
	// 文章内容的数据
	title: "",
	category: "",
	date: "",
	readNum: "",
	favorNum: "",
	commentNum: "",
	content: "",

	// 个人信息的数据
	userInfo: {},
	moreArticleList: [],

	// 评论的数据
	commentList: [],
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_ARTICLE_DATA:
			return state.merge({
				title: action.title,
				category: action.category,
				date: action.date,
				readNum: action.readNum,
				favorNum: action.favorNum,
				jiaNum: action.jiaNum,
				collectNum: action.collectNum,
				commentNum: action.commentNum,
				content: action.content,
			});
		case constants.GET_WRITTER_DATA:
			return state.merge({
				userInfo: action.userInfo,
				moreArticleList: action.moreArticleList,
			})
		case constants.GET_COMMENT_DATA:
			return state.merge({
				commentList: action.commentList,
			})

		default:
			return state;
	}
}