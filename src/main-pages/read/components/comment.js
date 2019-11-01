import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index.js';

import {
	CommentWrapper,
	CommentList,
	CommentListItem,
} from '../style.js';

import userImg from '../img/userImg.jpeg';

class Comment extends Component {
	render() {
		const { userInfo, commentList } = this.props;
		return (
			<CommentWrapper>
				<p className="comment-nu">4评论</p>
				<div className="push-comment">
					{/* <div className="user-img"><img src={userInfo.get('userImg')} alt="#"/></div> */}
					<div className="user-img"><img src={userImg} alt="#" /></div>
					<textarea cols="80" rows="5" className="comment-box" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></textarea>
					<button type="submit" className="comment-submit">发表评论</button>
					<div className="emoj">
						<i className="iconfont">&#xe62c;</i>
						<span className="text">表情</span>
					</div>
				</div>
				<CommentList>
					{/* 后台数据 */}
					{
						commentList.map((item) => {
							return (
								<CommentListItem key={item.get('id')}>
									<div className="userImg"><img src={item.get('userImg')} alt="#" /></div>
									<div className="user-comment">
										<a href={`/user/${item.get('id')}`} className="username">{item.get('username')}</a>
										<p className="comment">{item.get('content')}</p>
										<div className="info">
											<p className="date">{item.get('date')}</p>
											<p className="favor"><i className="iconfont">&#xe61d;</i>{item.get('favorNum')}</p>
											<p className="unfavor"><i className="iconfont">&#xe61e;</i>{item.get('unfavorNum')}</p>
											<p className="reply">回复</p>
										</div>
									</div>
								</CommentListItem>
							)
						})
					}
				</CommentList>
			</CommentWrapper>
		)
	}

	componentDidMount() {
		this.props.getCommentData(this.props.id);
	}

}

const mapStateToProps = (state) => ({
	userInfo: state.get('read').get('userInfo'),
	commentList: state.get('read').get('commentList'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		getCommentData(id) {
			dispatch(actionCreators.getCommentData(id));
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);