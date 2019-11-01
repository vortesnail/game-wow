import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	userImgHovered: false,
	userPopEnter: false,
	messageHovered: false,
	dynamicHovered: false,
	collectionHovered: false,
	historyHovered: false,
	
	// axois 请求数据
	userList:[],
	messageList: [],
	dynamicList: [],
	collectionList: [],
	historyList: [],
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.USER_IMG_HOVERED:
			return state.set('userImgHovered', true) 
		case constants.USER_IMG_UNHOVERED:
			return state.set('userImgHovered', false)
		case constants.USER_POP_ENTER:
			return state.set('userPopEnter', true) 
		case constants.USER_POP_LEAVE:
			return state.set('userPopEnter', false)
		case constants.MESSAGE_HOVERED:
			return state.set('messageHovered', true);
		case constants.MESSAGE_UNHOVERED:
			return state.set('messageHovered', false);
		case constants.DYNAMIC_HOVERED:
			return state.set('dynamicHovered', true);
		case constants.DYNAMIC_UNHOVERED:
			return state.set('dynamicHovered', false);
		case constants.COLLECTION_HOVERED:
			return state.set('collectionHovered', true);
		case constants.COLLECTION_UNHOVERED:
			return state.set('collectionHovered', false);
		case constants.HISTORY_HOVERED:
			return state.set('historyHovered', true);
		case constants.HISTORY_UNHOVERED:
			return state.set('historyHovered', false);
		// 数据请求列表
		case constants.CHANGE_DYNAMIC_LIST:
			return state.set('dynamicList', action.data);
		case constants.CHANGE_COLLECTION_LIST:
			return state.set('collectionList', action.data);
		case constants.CHANGE_HISTORY_LIST:
			return state.set('historyList', action.data);
		case constants.CHANGE_USER_LIST:
			return state.set('userList', action.data);
		case constants.CHANGE_MESSAGE_LIST:
			return state.set('messageList', action.data);
		default:
			return state;
	}
}