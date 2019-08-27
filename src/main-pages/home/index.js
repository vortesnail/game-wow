import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import { actionCreators } from './store/index.js';
import Header from '../../common/header/index.js';
import Footer from '../../common/footer/index.js';
import Navigator from '../common/navigator/index.js';
import Recommend from './components/recommend.js';
import Articles from './components/articles.js';
import RankList from './components/ranklist.js';
import {
	HomeWrapper,
	HomeShow,
	HomeLeft,
	HomeRight,
	BackToTop,
} from './style.js';

class Home extends Component {

	render() {
		return (
			<Fragment>
				<Header />
				<HomeWrapper>
					<Navigator />
					<Recommend />
					<HomeShow>
						<HomeLeft>
							<Articles />
						</HomeLeft>
						<HomeRight>
							<RankList />
						</HomeRight>
					</HomeShow>
					{
						this.props.showScrollBtn ? <BackToTop onClick={this.handlScrollToTop}><i className="iconfont">&#xe6c8;</i></BackToTop> : null
					}
				</HomeWrapper>
				<Footer />
			</Fragment>
		)
	}

	handlScrollToTop() {
		window.scrollTo(0, 0);
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeShowScrollBtn)
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeShowScrollBtn)
	}
}

const mapStateToProps = (state) => ({
	showScrollBtn: state.get('home').get('showScrollBtn'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		changeHomeData() {
			dispatch(actionCreators.getHomeData());
		},
		changeShowScrollBtn() {
			if (document.documentElement.scrollTop > 350) {
				dispatch(actionCreators.changeScrollBtn(true));
			} else {
				dispatch(actionCreators.changeScrollBtn(false))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);