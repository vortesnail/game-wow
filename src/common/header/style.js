import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	width: 1280px;
	height: 42px;
	position: relative;
	z-index: 100;
`
export const BannerAndSearch = styled.div`
	width: 100%;
	height: 170px;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	.banner-img {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		img {
			width: 100%;
		}
	}
	.search-wrapper {
		width: 980px;
		height: 100%;
		min-width: 980px;
		margin: 0 auto;
		position: relative;
		.search-box {
			position: absolute;
			right: 0;
			bottom: 20px;
			box-sizing: border-box;
			width: 340px;
			height: 34px;
			background-color: rgba(0, 0, 0, 0.17);
			border-radius: 6px;
			padding: 2px;
			display: flex;
			.hot-chart {
				width: 68px;
				height: 30px;
				background-color: rgba(255, 255, 255, 0.88);
				border-radius: 4px;
				line-height: 30px;
				&:hover {
					cursor: pointer;
					background-color: #fff;
				}
				.iconfont {
					font-size: 14px;
					color: #ff4d4f;
					padding: 0 6px;
				}
				.title {
					font-size: 14px;
					color: #ff4d4f;
				}
			}
			.search-input {
				width: 268px;
				height: 30px;
				box-sizing: border-box;
				padding-left: 2px;
				.input {
					box-sizing: border-box;
					width: 100%;
					height: 30px;
					border: 0px;
					outline: none;
					padding-left: 6px;
					padding-right: 30px;
					border-radius: 4px;
					background-color: rgba(255, 255, 255, 0.88);
					&:hover,
					&:focus {
						background-color: #fff;
					}
				}
				.search-icon {
					display: block;
					width: 30px;
					height: 30px;
					position: absolute;
					top: 2px;
					right: 2px;
					line-height: 30px;
					text-align: center;
					font-size: 24px;
					color: #1890ff;
					&:hover {
						color: #ff4d4f;
						cursor: pointer;
					}
				}
			}
		}
	}
`

export const NavBlurBg = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;
	background-repeat: no-repeat;
	filter: blur(4px);
	overflow: hidden;
`

export const NavMask = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 3;
	left: 0;
	top: 0;
	background-color: hsla(0,0%,100%,.4);
	box-shadow: 0 1px 2px rgba(0,0,0,.1);
`

export const NavWrapper = styled.nav`
	width: 980px;
	min-width: 980px;
	height: 100%;
	margin: 0 auto;
	position: relative;
	z-index: 4;
`

const NavWrapperCommonStyle = styled.div`
	height: 100%;
	ul {
		height: 100%;
		position: relative;
		display: flex;
	}
`

const NavUlLiStyle = styled.li`
	height: 100%;
	color: #222;
	line-height: 42px;
	padding: 0 7px;
	font-size: 12px;
	display: block;
	position: relative;
	&:hover {
		background-color: hsla(0,0%,100%,.3);
		cursor: pointer;
	}
`

export const LeftNavWrapper = styled(NavWrapperCommonStyle)`
	float: left;
`

export const LeftNavUlLi = styled(NavUlLiStyle)`
	&.logoAndIndex {
		display: flex;
		padding-left: 7px;
		margin-left: -7px;
		.logo {
			width: 18px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 5px;
			margin-left: 0px;
			img {
				width: 100%;
			}
		}
	}
`

export const RightNavWrappper = styled(NavWrapperCommonStyle)`
	float: right;
	position: relative;
	z-index: 120;
	margin-right: 8px;
	a { text-decoration: none; }
`

export const RightNavUlLi = styled(NavUlLiStyle)`
	&.user {
		width: 32px;
		height: 100%;
		margin-right: 8px;
		.userImg {
			position: relative;
			z-index: 102;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			box-sizing: border-box;
			border: 1px solid #fff;
			margin-top: 6px;
			transition: all .2s ease-out;
			img {
				width: 100%;
				border-radius: 50%;
			}
			&.hovered {
				transform: scale(2);
				margin-top: 30px;
			}
		}
		&:hover {
			background-color: hsla(0,0%,100%,0);
		}
	}

	&.loginBtn {
		color: #fff;
		background-color: #ff4d4f;
		&:hover {
			background-color: #f98288;
		}
	}

	.message {
		position: absolute;
		left: 50%;
		margin-left: -55px;
		top: 42px;
		width: 110px;
		height: auto;
		box-shadow: rgba(0,0,0,0.16) 0px 2px 4px;
		border-radius: 0 0 4px 4px;
		background-color: #fff;
		.messageItem {
			display: block;
			width: 100%;
			height: 42px;
			color: #222;
			line-height: 42px;
			text-align: center;
			text-decoration: none;
			position: relative;
			&:hover {
				background-color: #E5E9Ef;
			}
			i {
				display: none;
				box-sizing: border-box;
				width: 12px;
				height: 12px;
				border-radius: 50%;
				background-color: #ff4d4f;
				position: absolute;
				right: 10px;
				top: 50%;
				margin-top: -6px;
				text-align: center;
				line-height: 12px;
				font-size: 10px;
				color: #fff;
				&.haveData {
					display: block;
				}
			}
		}
	}

	.dynamic {
		width: 360px;
		height: auto;
		position: absolute;
		top: 42px;
		left: 50%;
		margin-left: -180px;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
		border: 1px solid #E5E9EF;
		padding: 10px 0 0 0;
		&:hover {
			cursor: default;
		}
		.content {
			width: 100%;
			height: auto;
			.dynamicItem {
				box-sizing: border-box;
				width: 100%;
				height: 56px;
				padding: 6px 12px 10px;
				display: flex;
				&:hover {
					background-color: #E5E9EF;
				}
				.articleImg {
					width: 40px;
					height: 100%;
					overflow: hidden;
					a {
						display: block;
						width: 100%;
						height: 30px;
						margin-top: 4px;
						border-radius: 4px;
						overflow: hidden;
						&:hover { cursor: pointer; }
					}
					img {
						width: 100%;
						height: 100%;
					}
				}
				.userAndTitle {
					box-sizing: border-box;
					padding-left: 10px;
					width: 296px;
					height: 100%;
					padding-top: 4px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					line-height: 12px;
					.articleUser {
						width: 100%;
						height: 17px;
						a {
							text-decoration: none;
							color: #222;
							&:hover {
								color: #ff4d4f;
							}
						}
						span {
							margin-left: 16px;
							color: #99A2AA;
						}
					}
					.title {
						width: 100%;
						height: 15px;
						overflow: hidden;
						text-overflow: ellipsis; 
						white-space: nowrap;
						color: #ff4d4f;
						a {
							text-decoration: none;
							&:link { 
								color: #ff4d4f;
							}
							&:visited {
								color: #ff4d4f;								
							}
							&:hover {
								color: #ff4d4f;	
								text-decoration: underline;
							}
							&:active {
								color: #ff4d4f;								
							}
						}
					}
				}
			}
		}
	}

	.collection {
		width: 320px;
		height: auto;
		position: absolute;
		top: 42px;
		left: 50%;
		margin-left: -160px;
		padding: 10px 0 0 0;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
		border: 1px solid #E5E9EF;
		box-sizing: border-box;
		&:hover {
			cursor: default;
		}
		.content {
			width: 100%;
			.list {
				width: 100%;
				.listItem {
					width: 100%;
					height: 28px;
					padding: 0 12px 0 38px;
					line-height: 28px;
					position: relative;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis; 
					white-space: nowrap;
					&::before{
						content: "∙";
						position: absolute;
						left: 18px;
						color: #6D757A;
						font-size: 20px;
					}
					&:hover {
						cursor: pointer;
						background-color: #E5E9EF;
						color: #ff4d4f;
					}
				}
			}
		}
	}

	.history {
		width: 320px;
		height: auto;
		position: absolute;
		top: 42px;
		left: 50%;
		margin-left: -160px;
		padding: 10px 0 0 0;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
		border: 1px solid #E5E9EF;
		box-sizing: border-box;
		&:hover {
			cursor: default;
		}
		.content {
			width: 100%;
			.list {
				width: 100%;
				.listItem {
					width: 100%;
					height: 28px;
					padding: 0 12px 0 38px;
					line-height: 28px;
					position: relative;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis; 
					white-space: nowrap;
					&::before{
						content: "∙";
						position: absolute;
						left: 18px;
						color: #6D757A;
						font-size: 20px;
					}
					&:hover {
						cursor: pointer;
						background-color: #E5E9EF;
						color: #ff4d4f;
					}
				}
			}
		}
	}
`
export const WriteWrapper = styled.div`
	width: 70px;
	height: 50px;
	float: right;
	position: relative;
	z-index: 100;
	color: #fff;
	.writeButton {
		width: 100%;
		height: 100%;
		line-height: 42px;
		text-align: center;
		background-color: #1890ff;
		font-size: 14px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		&:hover {
			background-color: #2ba3fc;
			cursor: pointer;
		}
	}
`
// 个人中心弹框
export const UserPop = styled.div`
	width: 260px;
	position: absolute;
	z-index: 101;
	left: 50%;
	margin-left: -130px;
	padding: 50px 0 0 0;
	top: 42px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0,0,0,.16);
	border-radius: 0 0 4px 4px;
	&:hover {
		cursor: default;
	}
`

export const BaseInfo = styled.div`
	width: 100%;
	color: #222;
	box-sizing: border-box;
	padding-bottom: 10px;
	border-bottom: 1px solid #e5e9ef;
	.baseinfoStyle {
		width: 100%;
		height: 30px;
		padding: 4px 0;
		&.username {
			text-align: center;
			line-height: 30px;
			padding-top: 0;
		}
		&.property {
			display: flex;
			position: relative;
			.propertyJia {
				padding-left: 0px;
				width: 60px;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					display: block;
					width: 18px;
					height: 18px;
					padding-right: 4px;
					padding-left: 20px;
				}
			}
			.propertyWow {
				padding-left: 10px;
				width: 20px;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					display: block;
					width: 18px;
					height: 18px;
					padding-left: 20px;
					padding-right: 4px;
				}
			}
			.personalProperty {
				display: block;
				height: 100%;
				text-align: center;
				position: absolute;
				right: 20px;
				top: 50%;
				margin-top: -15px;
				line-height: 30px;
			}
		}
		&.level {
			display: flex;
			.levelTitle {
				height: 100%;
				padding-left: 20px;
				line-height: 30px;
				text-align: center;
			}
			.levelProgress {
				width: 216px;
				box-sizing: border-box;
				padding-left: 10px;
				display: flex;
				align-items: center;
				.progressBg {
					position: relative;
					z-index: 1;
					width: 186px;
					height: 10px;
					background: #eee;
				}
				.levelNum {
					position: absolute;
					z-index: 3;
					top: -50%;
					left: -2px;
					width: 20px;
					height: 20px;
					background-color: #1890ff;
					line-height: 20px;
					text-align: center;
					border-radius: 50%;
				}
				.progressRate {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
					/* 此处的百分比需要后台计算 */
					width: ${props => props.IndexEx ? props.IndexEx : 0}%;
					height: 100%;
					background-color: #1890ff;
				}
			}
		}
	}
`

export const UserMenu = styled.div`
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	.userMenuItem {
		width: 110px;
		height: 30px;
		line-height: 30px;
		i {
			margin-right: 10px;
			font-size: 16px;
			vertical-align: bottom;
		}
		span {
			font-size: 12px;
			vertical-align: bottom;
		}
		&:hover {
			cursor: pointer;
			color: #ff4d4f;
		}
	}
`

export const ExitAccount = styled.div`
	width: 100%;
	height: 30px;
	background-color: #F4F5F7;
	position: relative;
	.exitButton {
		position: absolute;
		right: 20px;
		text-align: center;
		line-height: 30px;
		&:hover {
			color: #ff4d4f;
			cursor: pointer;
		}
	}
`