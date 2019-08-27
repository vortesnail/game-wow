import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	SlideShow,
	HotShow,
} from '../style.js';

import renwangImg from '../../common/img/renwangBanner.png';
import hotImg1 from '../../common/img/hotImg-1.png';
// import hotImg2 from '../../common/img/hotImg-2.png';
// import hotImg3 from '../../common/img/hotImg-3.png';

class Recommend extends Component {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.recommendList.map((item) => {
						if (item.get('hotRank') === 1) {
							return (
								<SlideShow key={item.get('hotRank')}>
									<a href={item.get('href')}><img src={renwangImg} alt="" /></a>
									<p className="title">《仁王2》主视觉图、截图公布 TGS将展出全新试玩版</p>
								</SlideShow>
							)
						}
						return null;
					})
				}
				<HotShow>
					{
						this.props.recommendList.map((item) => {
							if (item.get('hotRank') > 1) {
								return (
									<div className="hot-show-box first" key={item.get('hotRank')}>
										<a href={item.get('href')} className="show-box-img"><img src={hotImg1} alt="" /></a>
										<p className="title">{item.get('title')}</p>
										<p className="read-comment-num">
											<span className="read-num"><i className="iconfont">&#xe72d;</i>{item.get('readNum')}</span>
											<span className="comment-num"><i className="iconfont">&#xe6d7;</i>{item.get('commentNum')}</span>
										</p>
										<p className="user">
											<span className="user-name"><i className="iconfont">&#xe768;</i>{item.get('username')}</span>
										</p>
									</div>
								)
							}
							return null;
						})
					}
				</HotShow>
			
			</RecommendWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	recommendList: state.get('home').get('recommendList'),
})

export default connect(mapStateToProps, null)(Recommend);