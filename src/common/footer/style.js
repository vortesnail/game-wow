import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #f6f9fa;
    padding-top: 25px;
`

export const RelativeInfoWrapper = styled.div`
    width: 980px;
    margin: 0 auto;
`

export const RelativeInfo = styled.div`
    width: 600px;
    height: 30px;
    display: flex;
    color: #969696;
    font-size: 13px;
    align-items: center;
    a {
        text-decoration: none;
        &:link { color: #969696; }
        &:visited { color: #969696; }
        &:hover { color: #969696; }
        &:active { color: #969696; }
    }
`

export const WarningInfo = styled.div`
    width: 60px;
    margin-top: 30px;
    padding-bottom: 30px;
    img {
        width: 100%;
    }
`