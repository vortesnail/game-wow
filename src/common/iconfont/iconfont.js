import { createGlobalStyle } from 'styled-components';

export const IconGlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1357573 */
  src: url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.eot');
  src: url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.woff') format('woff'),
  url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1357573_82vxyhl78jy.svg#iconfont') format('svg');
}

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`