import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index.js';

import {
	WritterWrapper,
} from '../style.js';

class Writter extends Component {
	render() {
		const { userInfo, moreArticleList } = this.props;
		return (
			<WritterWrapper>
				<div className="user-img-info">
					<div className="user-img"><img src={userInfo.get('userImg')} alt=""/></div>
					<div className="info">
						<p className="username">{userInfo.get('username')}</p>
						<p className="fans-reading">
							<span className="fans">粉丝:{userInfo.get('fansNum')}</span>
							<span className="reading">阅读:{userInfo.get('readingNum')}</span>
						</p>
						<div className="focus-btn">关注</div>
					</div>
				</div>
				<p className="more">更多精彩</p>
				{
					moreArticleList.map((item) => {
						return (
							<div className="more-fitst" key={item.get('id')}>
								<p className="title">{item.get('title')}</p>
								<p className="read-num">阅读{item.get('readingNum')}</p>
							</div>
						)
					})
				}
			</WritterWrapper>
		)
	}

	componentDidMount() {
		this.props.getWritterData(this.props.id);
  }

}

const mapStateToProps = (state) => ({
	userInfo: state.get('read').get('userInfo'),
	moreArticleList: state.get('read').get('moreArticleList'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		getWritterData(id) {
			dispatch(actionCreators.getWritterData(id));
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Writter);