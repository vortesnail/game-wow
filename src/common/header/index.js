import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store/index.js';
import { actionCreators as loginActionCreators } from '../../main-pages/login/store/index.js';
import {
  HeaderWrapper,
  BannerAndSearch,
  NavWrapper,
  NavBlurBg,
  NavMask,
  LeftNavWrapper,
  LeftNavUlLi,
  RightNavWrappper,
  RightNavUlLi,
  WriteWrapper,
  UserPop,
  BaseInfo,
  UserMenu,
  ExitAccount,
} from './style.js';

// 图片资源(需上传 url)
import bannerImg from '../img/bannerImg.png';
import logo from '../img/logo500.png';
import userImg from '../img/userImg.jpeg';
import propertyJia from '../img/jia.png';
import propertyWow from '../img/wow.png';
import articleImg from '../img/articleImg.jpg';

class Header extends Component {
  render() {
    // 根据路由信息判断header组件是否要关掉某些元素
    const indexRouter = String(window.location.pathname);
    const shouldBannerDisplay = (indexRouter === '/' ? true : false);

    const {
      userImgHovered, userPopEnter, messageHovered, dynamicHovered, collectionHovered, historyHovered,
      userList, messageList, dynamicList, collectionList, historyList, isLogin,
    } = this.props;
    const {
      handleUserImgMouseEnter,
      handleUserImgMouseLeave,
      handleMessageMouseEnter,
      handleMessageMouseLeave,
      handleDynamicMouseEnter,
      handleDynamicMouseLeave,
      handleCollectionMouseEnter,
      handleCollectionMouseLeave,
      handleHistoryMouseEnter,
      handleHistoryMouseLeave,
    } = this.props;
    return (
      <HeaderWrapper>
        {/* 此处的banner图可判断路由决定是否显示 display: none | block */}
        <BannerAndSearch className="banner-img" style={{display: `${shouldBannerDisplay === true ? 'block' : 'none'}`}}>
          <div className="banner-img"><img src={bannerImg} alt="banner-img" /></div>
          <div className="search-wrapper">
            <div className="search-box">
              <div className="hot-chart"><i className="iconfont">&#xe6e1;</i><span className="title">热榜</span></div>
              <div className="search-input">
                <input className="input" type="text" />
                <i className="iconfont search-icon">&#xe6cc;</i>
              </div>
            </div>
          </div>
        </BannerAndSearch>
        <div className="blur" style={{ position: 'absolute', top: '0', left: '0', width: '1280px', height: '42px', overflow: 'hidden', display: `${shouldBannerDisplay === true ? 'block' : 'none'}`}}>
          <NavBlurBg style={{ backgroundImage: `url(${bannerImg})` }} />
        </div>
        <NavMask />
        <NavWrapper>
          <LeftNavWrapper>
            <ul>
              <LeftNavUlLi className="logoAndIndex">
                <div className="logo"><img src={logo} alt="logo" /></div>
                主页
              </LeftNavUlLi>
              <LeftNavUlLi>精选文章</LeftNavUlLi>
              <LeftNavUlLi>游戏列表</LeftNavUlLi>
              <LeftNavUlLi>趣文</LeftNavUlLi>
              <LeftNavUlLi>游戏推荐</LeftNavUlLi>
            </ul>
          </LeftNavWrapper>
          <WriteWrapper>
            <div className="writeButton">写文章</div>
          </WriteWrapper>
          <RightNavWrappper>
            <ul>
              <RightNavUlLi className="user" style={{display: `${isLogin ? 'block' : 'none'}`}}>
                <div
                  className={(userImgHovered || userPopEnter) ? 'userImg hovered' : 'userImg'}
                  onMouseEnter={() => { handleUserImgMouseEnter(userList) }}
                  onMouseLeave={handleUserImgMouseLeave}
                ><img src={userImg} alt="用户头像" /></div>
                {this.controlUserPop(userImgHovered, userPopEnter)}
              </RightNavUlLi>
              <Link to='/login'><RightNavUlLi className="loginBtn" style={{display: `${isLogin ? 'none' : 'block'}`}}>登陆</RightNavUlLi></Link>
              <RightNavUlLi
                onMouseEnter={() => { handleMessageMouseEnter(messageList) }}
                onMouseLeave={handleMessageMouseLeave}
                style={{display: `${isLogin ? 'block' : 'none'}`}}
              >消息
                {this.controlMessagePop(messageHovered)}
              </RightNavUlLi>
              <RightNavUlLi
                onMouseEnter={() => { handleDynamicMouseEnter(dynamicList) }}
                onMouseLeave={handleDynamicMouseLeave}
              >动态
                {this.controlDynamicPop(dynamicHovered)}
              </RightNavUlLi>
              <RightNavUlLi
                onMouseEnter={() => { handleCollectionMouseEnter(collectionList) }}
                onMouseLeave={handleCollectionMouseLeave}
                style={{display: `${isLogin ? 'block' : 'none'}`}}
              >收藏
                {this.controlCollectionPop(collectionHovered)}
              </RightNavUlLi>
              <RightNavUlLi
                onMouseEnter={() => { handleHistoryMouseEnter(historyList) }}
                onMouseLeave={handleHistoryMouseLeave}
              >历史
                {this.controlHistoryPop(historyHovered)}
              </RightNavUlLi>
            </ul>
          </RightNavWrappper>
        </NavWrapper>
      </HeaderWrapper>
    )
  }

  // 当鼠标移至头像位置，显示个人用户面板
  controlUserPop(hovered, enter) {
    if (hovered || enter) {
      return (
        <UserPop
          onMouseEnter={this.props.handleUserPopMouseEnter}
          onMouseLeave={this.props.handleUserPopMouseLeave}
        >
          {
            this.props.userList.map((item) => {
              return (
                <div key={item.id}>
                  <BaseInfo IndexEx={item.indexEx}>
                    <div className="baseinfoStyle username">{item.username}</div>
                    <div className="baseinfoStyle property">
                      <div className="propertyJia"><img src={propertyJia} alt="佳数" />{item.jia}</div>
                      <div className="propertyWow"><img src={propertyWow} alt="W数" />{item.w}</div>
                      <p className="personalProperty">个人资产</p>
                    </div>
                    <div className="baseinfoStyle level">
                      <p className="levelTitle">等级</p>
                      <div className="levelProgress">
                        <div className="progressBg">
                          {/* 此处等级需要后台 */}
                          <p className="levelNum">{item.level}</p>
                          <div className="progressRate"></div>
                        </div>
                      </div>
                    </div>
                  </BaseInfo>
                  <UserMenu>
                    <div className="userMenuItem">
                      <i className="iconfont">&#xe70a;</i>
                      <span>个人中心</span>
                    </div>
                    <div className="userMenuItem">
                      <i className="iconfont">&#xe6c3;</i>
                      <span>稿件管理</span>
                    </div>
                    <div className="userMenuItem">
                      <i className="iconfont">&#xe70b;</i>
                      <span>资产管理</span>
                    </div>
                  </UserMenu>
                  <ExitAccount>
                    <p className="exitButton" onClick={this.props.logout}>退出账户</p>
                  </ExitAccount>
                </div>
              )
            })
          }
        </UserPop>
      )
    }
  }

  // 当鼠标移至消息位置，显示消息框
  controlMessagePop(hovered) {
    if (hovered) {
      return (
        <div>
          {
            this.props.messageList.map((item) => {
              return (
                <div className="message" key={item.id}>
                  {/* 此处数目需要后台数据 */}
                  <a href={item.replyHref} className="messageItem replyToMe">回复我的<i className={item.replyNum > 0 ? "haveData" : ""}>{item.replyNum > 0 ? item.replyNum : ""}</i></a>
                  <a href={item.atHref} className="messageItem atToMe">@我的<i className={item.atNum > 0 ? "haveData" : ""}>{item.atNum > 0 ? item.atNum : ""}</i></a>
                  <a href={item.zanHref} className="messageItem receivedFavour">收到的赞<i className={item.zanNum > 0 ? "haveData" : ""}>{item.zanNum > 0 ? item.zanNum : ""}</i></a>
                  <a href={item.myMessageHref} className="messageItem myMessage">我的消息<i className={item.myMessageNum > 0 ? "haveData" : ""}>{item.myMessageNum > 0 ? item.myMessageNum : ""}</i></a>
                  <a href={item.systemMessageHref} className="messageItem officialMessage">系统消息<i className={item.systemMessageNum > 0 ? "haveData" : ""}>{item.systemMessageNum > 0 ? item.systemMessageNum : ""}</i></a>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

  // 当鼠标移至动态位置，显示动态框
  controlDynamicPop(hovered) {
    if (hovered) {
      return (
        <div className="dynamic">
          {/* 此处可以加标题div */}
          <div className="content">
            {/* 此处数据需要后台数据 map */}
            {
              this.props.dynamicList.map((item) => {
                return (
                  <div className="dynamicItem" key={item.id}>
                    <div className="articleImg"><a href={item.href}><img src={articleImg} alt="*" /></a></div>
                    <div className="userAndTitle">
                      <p className="articleUser"><a href={item.href}>{item.username}</a><span>发表文章</span></p>
                      <p className="title"><a href={item.href}>{item.title}</a></p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }

  // 当鼠标移至收藏位置，显示收藏框
  controlCollectionPop(hovered) {
    if (hovered) {
      return (
        <div className="collection">
          <ul className="content">
            <div className="list">
              {/* 此处需要后台数据 */}
              {
                this.props.collectionList.map((item) => {
                  return (
                    <li className="listItem" key={item.id}>{item.title}</li>
                  )
                })
              }
            </div>
          </ul>
        </div>
      )
    }
  }

  // 当鼠标移至历史位置，显示历史框
  controlHistoryPop(hovered) {
    if (hovered) {
      return (
        <div className="history">
          <ul className="content">
            <div className="list">
              {/* 此处需要后台数据 */}
              {
                this.props.historyList.map((item) => {
                  return (
                    <li className="listItem" key={item.id}>{item.title}</li>
                  )
                })
              }
            </div>
          </ul>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    // userImgHovered: state.getIn(['header', 'userImgHovered'])  
    userImgHovered: state.get('header').get('userImgHovered'),
    userPopEnter: state.get('header').get('userPopEnter'),
    messageHovered: state.get('header').get('messageHovered'),
    dynamicHovered: state.get('header').get('dynamicHovered'),
    collectionHovered: state.get('header').get('collectionHovered'),
    historyHovered: state.get('header').get('historyHovered'),
    // 菜单栏后台数据
    userList: state.get('header').get('userList'),
    messageList: state.get('header').get('messageList'),
    dynamicList: state.get('header').get('dynamicList'),
    collectionList: state.get('header').get('collectionList'),
    historyList: state.get('header').get('historyList'),
    // 是否登陆
    isLogin: state.get('login').get('isLogin'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserImgMouseEnter(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getUserList());
      }
      const action = actionCreators.userImgHovered();
      dispatch(action);
    },

    handleUserImgMouseLeave() {
      const action = actionCreators.userImgUnhovered();
      dispatch(action);
    },

    handleUserPopMouseEnter() {
      const action = actionCreators.userPopEnter();
      dispatch(action);
    },

    handleUserPopMouseLeave() {
      const action = actionCreators.userPopLeave();
      dispatch(action);
    },

    handleMessageMouseEnter(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getMessageList());
      }
      const action = actionCreators.messageHovered();
      dispatch(action);
    },

    handleMessageMouseLeave() {
      const action = actionCreators.messageUnhovered();
      dispatch(action);
    },

    handleDynamicMouseEnter(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getDynaminList());
      }
      const action = actionCreators.dynamicHovered();
      dispatch(action);
    },

    handleDynamicMouseLeave() {
      const action = actionCreators.dynamicUnhovered();
      dispatch(action);
    },

    handleCollectionMouseEnter(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getCollectionList());
      }
      const action = actionCreators.collectionHovered();
      dispatch(action);
    },

    handleCollectionMouseLeave() {
      const action = actionCreators.collectionUnhovered();
      dispatch(action);
    },

    handleHistoryMouseEnter(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getHistoryList());
      }
      const action = actionCreators.historyHovered();
      dispatch(action);
    },

    handleHistoryMouseLeave() {
      const action = actionCreators.historyUnhovered();
      dispatch(action);
    },
    logout() {
      const action = loginActionCreators.logout();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);