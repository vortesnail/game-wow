import React, { Component } from 'react';
import {
	NavWrapper,
	Nav,
	NavItem,
} from './style.js';

class Navigator extends Component {
	render() {
		return (
			<NavWrapper>
				<Nav>
					<ul className="nav-ul">
						<NavItem className="current-nav-item">
							<span className="new-num index"><i className="iconfont">&#xe6e2;</i></span>
							<span className="title console-game">首页</span>
						</NavItem>
						<NavItem>
							<span className="new-num">22</span>
							<span className="title console-game">头条新闻</span>
						</NavItem>
						<NavItem>
							<span className="new-num">221</span>
							<span className="title console-game">单机游戏</span>
						</NavItem>
						<NavItem>
							<span className="new-num">333</span>
							<span className="title console-game">网络游戏</span>
						</NavItem>
						<NavItem>
							<span className="new-num">999</span>
							<span className="title console-game">电子竞技</span>
						</NavItem>
						<NavItem>
							<span className="new-num">0</span>
							<span className="title console-game">手机游戏</span>
						</NavItem>
						<NavItem>
							<span className="new-num">10</span>
							<span className="title console-game">欢乐囧图</span>
						</NavItem>
					</ul>
				</Nav>
			</NavWrapper>
		)
	}
}

export default Navigator;