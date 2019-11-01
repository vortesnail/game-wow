import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 980px;
    margin: 0 auto;
    padding-top: 128px;
    font-size: 12px;
    position: relative;
`

export const HomeShow = styled.div`
	width: 100%;
	display: flex;
`

export const RecommendWrapper = styled.div`
    width: 980px;
    height: 220px;
    margin: 10px 0 10px 0;
    display: flex;
    align-items: center;
`

export const SlideShow = styled.div`
    width: 470px;
    height: 216px;
    position: relative;
    a {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .title {
        position: absolute;
        bottom: 10px;
        left: 0;
        color: #fff;
        font-size: 14px;
        padding-left: 10px;
    }
`

export const HotShow = styled.div`
    width: 510px;
    height: 216px;
    display: flex;
    .hot-show-box {
        width: 156px;
        margin-left: 10px;
        background-color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid #e5e9ef;
        &.first {
            margin-left: 22px;
        }
        &:hover {
            cursor: pointer;
        }
        .show-box-img {
            display: block;
            width: 100%;
            height: 96px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .title {
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            margin: 8px 0;
            padding: 0 10px;
            line-height: 22px;
            overflow: hidden;
            color: #222;
            &:hover {
                cursor: pointer;
                color: #ff4d4f;
            }
        }
        .read-comment-num {
            padding: 0 10px;
            color: #99A2AA;
            margin-top: 16px;
            .read-num {
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
            }
            .comment-num {
                margin-left: 24px;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
            }
        }
        .user {
            padding: 0 10px;
            color: #99A2AA;
            margin-top: 10px;
            .user-name {
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
            }
        }
    }
`

export const HomeLeft = styled.div`
    width: 680px;
    xbackground-color: lightblue;
`

export const ArticlesWrapper = styled.div`
    width: 680px;
    padding-bottom: 40px;
		.check-more {
			margin-top: 20px;
			width: 100%;
			height: 30px;
			border-radius: 4px;
            background-color: #E5E9EF;
			text-align: center;
			font-size: 14px;
			line-height: 30px;
			color: #222;
            &:hover {
                cursor: pointer;
			    background-color: #CCD0D7;
            }
		}
`

export const LatestRecommed = styled.div`
    width: 100%;
    display: flex;
    .latest-submission {
        font-size: 16px;
        color: #222;
        margin: 0 10px;
        padding: 4px 0;
        &:hover {
            cursor: pointer;
        }
        &.fistyly {
            margin-left: 0;
        }
        &.selected {
            color: #ff4d4f;
            border-bottom: 2px solid #ff4d4f;
        }
    }
`

export const ArticleItems = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const ArticleItem = styled.article`
    width: 100%;
    height: 140px;
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		&:hover {
			cursor: pointer;
			.left>.article-title {
				color: #ff4d4f;
			}
		}
    .left {
        width: 480px;
		box-sizing: border-box;
        padding: 15px 20px 15px 0;
        color: #222;
        .article-title {
            display: block;
            text-decoration: none
            font-size: 18px;
            margin-bottom: 8px;
            overflow: hidden;
            text-overflow: ellipsis; 
            white-space: nowrap; 
            transition: all .2s;
            &:link { color: #222; }
            &:visited { color: #222; }
            &:hover { color: #ff4d4f; }
            &:active { color: #222; }
        }
        .content {
            font-size: 13px;
            color: #999;
            line-height: 24px;
            margin-bottom: 8px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;      /* 可以显示的行数，超出部分用...表示*/
            -webkit-box-orient: vertical;
        }
				.article-info {
					width: 100%;
					color: #99A2AA;
					display: flex;
					.user {
						display: block;
						height: 24px;
						margin-right: 22px;
						text-decoration: none;
						display: flex;
						&:link { color: #99A2AA; } 
						&:visited { color: #99A2AA; } 
						&:hover { color: #ff4d4f; } 
						&:active { color: #99A2AA; }
						.user-img {
							width: 24px;
							height: 24px;
							border-radius: 50%;
						}
						.user-name {
							display: block;
							height: 24px;
							line-height: 24px;
							margin-left: 5px;
						}
					}
					.game-category {
						height: 24px;
						margin-right: 22px;
						line-height: 24px;
					}
					.watched,
					.zan,
					.comment {
						height: 24px;
						margin-right: 22px;
						box-sizing: border-box;
						padding-bottom: 2px;
						.iconfont {
							margin-right: 5px;
						}
						span {
							line-height: 24px;
						}
					}
				}
    }
		.right {
			width: 200px;
			padding: 15px 0;
			.artilce-cover {
				display: block;
				width: 100%;
				height: 100px;
				img {
					width: 100%;
					height: 100%;
					border-radius: 4px;
				}
			}
		}
`

export const HomeRight = styled.div`
    width: 300px;
`

export const RankListWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding-left: 30px;
	padding-bottom: 10px;
	color: #222;
	.rank-title {
		font-size: 16px;
		margin-bottom: 10px;
		padding: 4px 0;
	}
	.check-more {
		width: 100%;
		height: 26px;
		background-color: #E5E9EF;
		border-radius: 4px;
		margin-top: 16px;
		text-align: center;
		line-height: 26px;
		&:hover {
			cursor: pointer;
			background-color: #CCD0D7;
		}
	}
`

export const RankListItems = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const RankListItem = styled.div`
	width: 100%;
	height: 18px;
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	&.first-item { margin-top: 0; }
	.order {
		display: block;
		width: 18px;
		height: 18px;
		border-radius: 4px;
		background-color: #b8c0cc;
		text-align: center;
		line-height: 18px;
		color: #fff;
		font-weight: 900;
		margin-right: 10px;
		&.top-three {
			background-color: #1890ff;			
		}
	}
	.title {
		display: block;
		width: 240px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; 
		line-height: 18px;	
		text-decoration: none;
		&:link { color: #222; }	
		&:visited { color: #222; }	
		&:hover { color: #ff4d4f; }	
		&:active { color: #222; }	
	}
`

export const BackToTop = styled.div`
    position: fixed;
    bottom: 60px;
    right: 100px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #e5e9ef;
    transition: .1s ease-in;
    &:hover {
        background-color: hsla(0,0%,71%,.1);
        cursor: pointer;
    }
    .iconfont {
        color: #222;
        font-size: 20px;
    }
`

