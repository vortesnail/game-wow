import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 980px;
    margin: 0 auto;
    xbackground-color: lightblue;
    font-size: 12px;
`

export const Nav = styled.nav`
    width: 100%;
    height: 58px;
    box-sizing: border-box;
    padding: 8px 0 0 0;
    border-bottom: 1px solid #e5e9ef;
    .nav-ul {
        width: 100%;
        height: 100%;
        display: flex;
    }
`

export const NavItem = styled.li`
    padding: 2px 0 0 0;
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: -1px;
    box-sizing: content-box;
    &.current-nav-item {
        border-bottom: 2px solid #ff4d4f;
        .title {
            color: #ff4d4f;
        }
    }
    &:hover {
        cursor: pointer;
    }
    .new-num {
        display: block;
        text-align: center;
        border-radius: 2px;
        background-color: rgba(24, 144, 255, 0.58);
        line-height: 14px;
        margin: 2px 10px 4px 10px;
        color: #fff;
        &.index {
            background-color: transparent;
            margin: 0px 10px 4px 10px;
            color: rgba(24, 144, 255, 0.58);
            font-weight: 900;
        }
    }
    .title {
        display: inline-block;
        text-align: center;
        color: #222;
    }
`