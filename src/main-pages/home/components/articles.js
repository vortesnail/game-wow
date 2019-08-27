import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { actionCreators } from '../store/index.js';
import {
	ArticlesWrapper,
	ArticleItems,
	LatestRecommed,
	ArticleItem,
} from '../style.js';

import userImg from '../img/userImg.jpeg';
import articleCover1 from '../img/articleCover.png';
// import articleCover2 from '../img/articleCover-2.png';
// import articleCover3 from '../img/articleCover-3.png';

class Articles extends Component {
	render() {
		return (
			<ArticlesWrapper>
				<LatestRecommed>
					<p className="latest-submission fistyly selected">推荐</p>
					<p className="latest-submission">最新</p>
				</LatestRecommed>
				<ArticleItems>
					{/* 此处的数据需后台数据 map */}
					{
						this.props.articleList.map((item, index) => {
							return (
								<ArticleItem key={index}>
									<div className="left">
										<a href={'/read/' + item.get('id')} className="article-title">{item.get('title')}</a>
										<p className="content">{item.get('content')}</p>
										<div className="article-info">
											<a href={'/user/' + item.get('id')} className="user"><img src={userImg} className="user-img" alt="*" /><span className="user-name">{item.get('username')}</span></a>
											<p className="game-category">{item.category}</p>
											<div className="watched"><i className="iconfont">&#xe6de;</i><span>{item.get('watched')}</span></div>
											<div className="zan"><i className="iconfont">&#xe711;</i><span>{item.get('zan')}</span></div>
											<div className="comment"><i className="iconfont">&#xe745;</i><span>{item.get('comment')}</span></div>
										</div>
									</div>
									<div className="right">
										<a href={'/read/' + item.get('id')} className="artilce-cover"><img src={articleCover1} alt="*" /></a>
									</div>
								</ArticleItem>
							)
						})
					}
				</ArticleItems>
				<p className="check-more" onClick={() => { this.props.handleGetMoreArticleList(this.props.moreArticleIndexPage) }}>阅读更多</p>
			</ArticlesWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	articleList: state.get('home').get('articleList'),
	moreArticleIndexPage: state.get('home').get('moreArticleIndexPage'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetMoreArticleList(page) {
			dispatch(actionCreators.getMoreArticleList(page));
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);