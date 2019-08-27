import React, { Component } from 'react';
import {
	FooterWrapper,
	RelativeInfoWrapper,
	RelativeInfo,
	WarningInfo,
} from './style.js';

import footerLogo from '../img/footer-text-logo.png';

class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<RelativeInfoWrapper>
					<RelativeInfo>
						<a href="/">关于简书</a><i>&nbsp;·&nbsp;</i>
						<a href="/">联系我们</a><i>&nbsp;·&nbsp;</i>
						<a href="/">加入我们</a><i>&nbsp;·&nbsp;</i>
						<a href="/">游佳出版</a><i>&nbsp;·&nbsp;</i>
						<a href="/">品牌与徽标</a><i>&nbsp;·&nbsp;</i>
						<a href="/">帮助中心</a><i>&nbsp;·&nbsp;</i>
						<a href="/">合作伙伴</a><i>&nbsp;·&nbsp;</i>
					</RelativeInfo>
					<WarningInfo>
						<img src={footerLogo} alt="*"/>
					</WarningInfo>
				</RelativeInfoWrapper>
			</FooterWrapper>
		)
	}
}

export default Footer;