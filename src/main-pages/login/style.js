import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 700px;
    .logo {
        width: 100%;
        height: 86px;
        .logo-wrapper {
            width: 980px;
            padding-top: 20px;
            margin: 0 auto;
            img {
                width: 100px;
            }
        }
    }
`

export const LoginBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 456px;
    padding: 50px 50px 30px 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    .login-register {
        display: flex;
        justify-content: center;
        padding: 10px;
        a {
            display: block;
            padding: 10px;
            text-decoration: none;
            font-size: 18px;
            font-weight: 900;
        }
        .login {
            &:link { color: #ff4d4f; }
            &:visited { color: #ff4d4f; }
            &:hover { color: #ff4d4f; }
            &:active { color: #ff4d4f; }
            border-bottom: 2px solid #ff4d4f;
        }
        .dot {
            padding: 10px;
            color: #969696;
        }
        .register {
            &:link { color: #969696; }
            &:visited { color: #969696; }
            &:hover { 
                color: #969696; 
                border-bottom: 2px solid #ff4d4f;
            }
            &:active { color: #969696; }
        }
    }
    .input-box {
        .container {
            position: relative;
            .iconfont {
                position: absolute;
                top: 32px;
                left: 9px;
                color: #999;
            }
        }
        .btn-box {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            .remember-btn {
                font-size: 12px;
                color: #969696;
            }
            .forget-btn {
                font-size: 12px;
                color: #969696;
                text-align: center;
                a {
                    line-height: 17px;
                    text-decoration: none;
                    &:link { color: #969696; }
                    &:visited { color: #969696; }
                    &:hover { color: #ff4d4f; }
                    &:active { color: #969696; }
                }
            }
        }
    }
`

export const Input = styled.input`
    padding: 10px 10px 10px 34px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px;
    font-size: 14px;
`

export const Button = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 4px;
    background-color: #1890ff;
    margin-top: 10px;
    outline: none;
    border: none;
    color: #fff;
    &:hover {
        background-color: #3dabfc;
        cursor: pointer;
    }
`

export const Social = styled.div`
    width: 100%;
    margin-top: 40px;
    border-top: 1px solid #B5B5B5;
    position: relative;
    .title {
        font-size: 13px;
        font-weight: 700;
        width: 100px;
        position: absolute;
        top: -8px;
        left: 50%;
        margin-left: -50px;
        background-color: #fff;
        text-align: center;
        color: #B5B5B5;
    }
`

export const SocialIcon = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    a {
        margin: 0 20px;
        img {
            display: block;
            width: 30px;
            height: 30px;
        }
    }
`