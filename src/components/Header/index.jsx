import styled from "styled-components"
import usercircle  from "../../assets/circle-user-solid.svg"
import logo from "../../assets/argentbankLogo.webp"
import { Link } from "react-router-dom"

const HeaderDiv = styled.header`
    width: 100%;
    padding: 0.35rem 1.25rem;
`
const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderLogo = styled(Link)`
    img{
        max-width: 200px;
    }
`
const HeaderSignIn = styled(Link)`
    display: flex;
    margin-right: 0.4rem;
    img{
        width: 16px;
        margin-right: 0.4rem;
    }
`

export default function Header() {
    return (
        <HeaderDiv>
             <HeaderNav>
                <HeaderLogo to="/"><img src={logo}  alt="logo argent bank"/></HeaderLogo>
                <HeaderSignIn to="/login"><img src={usercircle} alt="user icon" />Sign In</HeaderSignIn>
            </HeaderNav>
        </HeaderDiv>
    )
}