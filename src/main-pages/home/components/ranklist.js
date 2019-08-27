import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	RankListWrapper,
	RankListItems,
	RankListItem,
} from '../style.js';

class RankList extends Component {
	render() {
		return (
			<RankListWrapper>
				<p className="rank-title">热门</p>
				<RankListItems>
					{/* 此处数据需要后台数据 */}
					{
						this.props.rankList.map((item) => {
							return(
								<RankListItem className={item.get('rank') === 1 ? "first-item" : ""} key={item.get('rank')}>
									<i className={item.get('rank') <= 3 ? "order top-three" : "order"}>{item.get('rank')}</i>
									<a href={item.get('href')} className="title">{item.get('title')}</a>
								</RankListItem>
							)
						})
					}
				</RankListItems>
				<p className="check-more">查看更多</p>
			</RankListWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	rankList: state.get('home').get('rankList'),
})

export default connect(mapStateToProps, null)(RankList);