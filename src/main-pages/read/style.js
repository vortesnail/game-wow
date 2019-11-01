import styled from 'styled-components';

export const ReadWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    padding: 10px 0 0 0;
    position: relative;
    .article-and-writter {
        display: flex;
        flex-wrap: wrap;
    }
`

export const ArticleWrapper = styled.div`
    width: 670px;
    padding: 24px;
    color: #222;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    .title {
        font-size: 28px;
        margin-bottom: 14px;
    }
    .info {
        color: #9B9B9B;
        font-size: 12px;
        .category { margin-right: 12px; }
        .date { margin-right: 12px }
        .read-num { margin-right: 12px }
        .favor-num { margin-right: 12px }
        .comment-num { margin-right: 12px }
        margin-bottom: 24px;
    }
    .content {

    }
    .favor-jia-collect {
        padding: 20px 0 10px 0;
        display: flex;
        .box {
            display: flex;
            font-size: 16px;
            margin-right: 50px;
            &:hover {
                cursor: pointer;
                color: #ff4d4f;
            }
            .iconfont { 
                font-size: 24px;
                display: block;
                padding-right: 10px;
            }
            .name {
                display: block;
                line-height: 24px;
            }
        }
    }
`

export const WritterWrapper = styled.div`
    box-sizing: border-box;
    width: 260px;
    height: 290px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 4px;
    margin-left: 20px;
    .user-img-info {
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e9ef;;
        display: flex;
        flex-wrap: nowrap;
        .user-img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            overflow: hidden;
            background-color: lightcoral;
        }
        .info {
            color: #222;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            .username {
                margin-top: 4px;
                font-size: 14px;
            }
            .fans-reading {
                margin-top: 10px;
                font-size: 12px;
                color: #99A2AA;
                .fans {
                    margin-right: 14px;
                }
            }
            .focus-btn {
                margin-top: 10px;
                font-size: 14px;
                text-align: center;
                width: 110px;
                height: 22px;
                line-height: 22px;
                color: #fff;
                background-color: #f9787f;
                border-radius: 4px;
            }
        }
    }
    .more {
        width: 100%;
        margin-top: 10px;
        color: #222;
        font-size: 16px;
    }
    .more-fitst {
        margin-top: 16px;
        .title {
            font-size: 14px;
            margin-bottom: 6px;
            line-height: 18px;
            &:hover {
                color: #f9787f;
                cursor: pointer;
            }
        }
        .read-num {
            font-size: 12px;
            color: #969696;
        }
    }
`

export const CommentWrapper = styled.div`
    width: 670px;
    padding: 24px;
    color: #222;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    .comment-nu {
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e9ef;
    }
    .push-comment {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e9ef;
        .user-img {
            width: 52px;
            height: 52px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;
            }
        }
        .comment-box {
            font-size: 12px;
            box-sizing: border-box;
            background-color: #f2f2f2;
            border: 1px solid #e5e9ef;
            overflow: auto;
            border-radius: 4px;
            color: #555;
            width: 495px;
            height: 65px;
            transition: 0s;
            padding: 5px 10px;
            line-height: normal;
            outline: none;
            resize: none;
            position: relative;
            &:hover {
                background-color: #fff;
                border-color: #ff4d4f;
            }
            &:focus {
                background-color: #fff;
                border-color: #ff4d4f;
            }
            margin-left: 33px;
        }
        .comment-submit {
            width: 70px;
            height: 65px;
            padding: 4px 15px;
            margin-left: 20px;
            font-size: 14px;
            color: #fff;
            border-radius: 4px;
            text-align: center;
            min-width: 60px;
            vertical-align: top;
            cursor: pointer;
            background-color: #f9757c;
            border: 1px solid #f76f7d;
            transition: .1s;
            user-select: none;
            outline: none;
            &:hover {
                background-color: #f76f7d;
            }
        }
        .emoj {
            width: 50px;
            height: 26px;
            border: 1px solid #e5e9ef;
            border-radius: 4px;
            margin-left: 85px;
            margin-top: 4px;
            line-height: 26px;
            padding: 0 10px;
            color: #99A2AA;
            &:hover {
                cursor: pointer;
                color: #7d7d7d;
                border: 1px solid #7d7d7d;
            }
            .iconfont {
                font-size: 14px;
                margin-right: 6px;
            }
            .text {
                font-size: 14px;
            }
        }
    }
`

export const CommentList = styled.div`
    padding: 0 0 24px 0;

`

export const CommentListItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    .userImg {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        overflow: hidden;
        background-color: lightcoral;
        img {
            width: 100%;
        }

    }
    .user-comment {
        margin-left: 33px;
        width: 585px;
        border-bottom: 1px solid #e5e9ef;
        padding-bottom: 20px;
        .username {
            color: #6d757a;
            font-size: 14px;
            text-decoration: none;
            &:link { color: #6D757A; }
            &:visited { color: #6D757A; }
            &:hover { color: #ff4d4f; }
            &:active { color: #6D757A; }
        }
        .comment {
            margin-top: 12px;
            line-height: 20px;
            padding: 2px 0;
            font-size: 14px;
            text-shadow: none;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-word;
        }
        .info {
            display: flex;
            font-size: 12px;
            color: #B0B0B0;
            margin-top: 12px;
            .date {
                line-height: 19px;   
                margin-right: 18px;
            }
            .favor {
                margin-right: 18px;                             
                .iconfont {
                    font-size: 16px;
                    padding-right: 2px;
                }
                &:hover {
                    color: #ff4d4f;
                    cursor: pointer;
                }
            }
            .unfavor {
                margin-right: 18px;                             
                .iconfont {
                    font-size: 16px;
                    padding-right: 2px;
                }
                &:hover {
                    color: #ff4d4f;
                    cursor: pointer;
                }
            }
            .reply {
                line-height: 19px; 
                padding: 0 2px;
                &:hover {
                    color: #ff4d4f;
                    background-color: #E5E9EF;
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
        }
    }
`