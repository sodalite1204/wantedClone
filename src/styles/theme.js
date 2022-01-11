import { css } from 'styled-components';

const theme = {
  black: '#363636',
  borderGrey: '#DBDBDB',
  background: '#FAFAFA',
  white: '#FFFFFF',
  vermilion: '#ff7425',
  orange: '#FF9900',
  opacityOrange: 'rgba(242,153,74,0.5)',
  yellow: '#FFD66C',
  grey: 'e5e5e5',
  middleGrey: 'd1d1d1',
  deepGrey: '#606060',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  // mixin
  flexSet: (justify = 'center', align = 'center') =>
    `display: flex; justify-content: ${justify}; align-items: ${align};`,
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default theme;
