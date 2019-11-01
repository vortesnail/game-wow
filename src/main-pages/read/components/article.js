import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index.js';

import {
	ArticleWrapper,
} from '../style.js';


class Article extends Component {
	render() {
		const { title, category, date, readNum, favorNum, commentNum, jiaNum, collectNum, content } = this.props;
		return (
			<ArticleWrapper>
				<p className="title">{title}</p>
				<p className="info">
					<span className="category">{category}</span>
					<span className="date">{date}</span>
					<span className="read-num">{readNum}阅读</span>
					<span className="favor-num">{favorNum}赞</span>
					<span className="comment-num">{commentNum}评论</span>
				</p>
				<div className="content" dangerouslySetInnerHTML={{ __html: content}}></div>
				<div className="favor-jia-collect">
					<div className="box">
						<i className="iconfont">&#xe711;</i>
						<span className="name">{favorNum}</span>
					</div>
					<div className="box">
						<i className="iconfont">&#xe702;</i>
						<span className="name">{jiaNum}</span>
					</div>
					<div className="box">
						<i className="iconfont">&#xe703;</i>
						<span className="name">{collectNum}</span>
					</div>
				</div>
			</ArticleWrapper>
		)
	}

	componentDidMount() {
		this.props.getArticleData(this.props.id);
	}

}

const mapStateToProps = (state) => ({
	title: state.get('read').get('title'),
	category: state.get('read').get('category'),
	date: state.get('read').get('date'),
	readNum: state.get('read').get('readNum'),
	favorNum: state.get('read').get('favorNum'),
	commentNum: state.get('read').get('commentNum'),
	"jiaNum": state.get('read').get('jiaNum'),
	"collectNum": state.get('read').get('collectNum'),
	content: state.get('read').get('content'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		getArticleData(id) {
			dispatch(actionCreators.getArticleData(id));
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);