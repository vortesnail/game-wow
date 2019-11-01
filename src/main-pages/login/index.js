import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import Header from '../../common/header/index.js';
import Footer from '../../common/footer/index.js';
import {
	LoginWrapper,
	LoginBox,
	Box,
	Input,
	Button,
	Social,
	SocialIcon,
} from './style.js';

import textLogo from './img/textlogo.png';
import wechat from './img/wechat.png';
import qq from './img/qq.png';
import weibo from './img/weibo.png';
import douban from './img/douban.png';

class Login extends Component {
	render() {
		if (!this.props.isLogin) {
			return (
				<Fragment>
					<Header />
					<div className="bgc" style={{ backgroundColor: '#F7F7F7', paddingBottom: '30px' }}>
						<LoginWrapper>
							<div className="logo">
								<div className="logo-wrapper"><Link to='/'><img src={textLogo} alt="@" /></Link></div>
							</div>
							<LoginBox>
								<Box>
									<div className="login-register">
										<a href="/login" className="login">登陆</a>
										<p href="/" className="dot">∙</p>
										<a href="/register" className="register">注册</a>
									</div>
									<div className="input-box">
										<div className="container">
											<i className="iconfont">&#xe618;</i>
											<Input placeholder="手机号或邮箱" ref={(input) => { this.account = input }} />
										</div>
										<div className="container">
											<i className="iconfont">&#xe620;</i>
											<Input type="password" placeholder="密码" ref={(input) => { this.password = input }} />
										</div>
										<div className="btn-box">
											<div className="remember-btn">
												<input type="checkbox" value="false" />
												<span>记住我</span>
											</div>
											<div className="forget-btn">
												<a href="">登陆遇到问题？</a>
											</div>
										</div>
										<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
									</div>
									<Social>
										<p className="title">社交账号登录</p>
										<SocialIcon>
											<a href="/login"><img src={wechat} alt="" /></a>
											<a href="/login"><img src={qq} alt="" /></a>
											<a href="/login"><img src={weibo} alt="" /></a>
											<a href="/login"><img src={douban} alt="" /></a>
										</SocialIcon>
									</Social>
								</Box>
							</LoginBox>
						</LoginWrapper>
					</div>
					<Footer />
				</Fragment>
			)
		} else {
			return <Redirect to='/' />
		}
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.get('login').get('isLogin'),
})

const mapDispatchToProps = (dispatch) => {
	return {
		login(account, password) {
			dispatch(actionCreators.login(account.value, password.value));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);