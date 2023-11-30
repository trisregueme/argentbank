import { createGlobalStyle } from "styled-components";
import AvenirFont from '../../assets/fonts/AvenirRegular.ttf'

const size = {
    mobile: '720px',
    tablet: '920px',
}
   
export const device = {
    tablet: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.tablet})`,
}

export const colors = {
    green: '#00bc77',
    background: '#12002b',
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Avenir';
        src: url(${AvenirFont}) format('truetype');
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    a{
        text-decoration: none;
        color: black;
    }
    p{
        font-size: 1rem;
    }
`
export default GlobalStyle