import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import usercircle  from "../../assets/circle-user-solid.svg"
import arrowright from "../../assets/right-from-bracket-solid.svg"
import logo from "../../assets/argentbankLogo.webp"

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
        margin-right: 0.35rem;
    }
`
const HeaderLoggedIn = styled.div`
    display: flex;
    gap: 0.8rem;
`
const HeaderLink = styled(Link)`
    display: flex;
    img{
        width: 16px;
        margin-right: 0.35rem;
    }
`

//clears the token in sessionstorage + relocate to homepage + refreshes all state
const logout = () => {
    sessionStorage.clear()
    window.location.href = '/'
}

export default function Header() {
    const userinfos = useSelector(state => state.profile.infos)
    return (
        <HeaderDiv>
             <HeaderNav>
                <HeaderLogo to="/"><img src={logo}  alt="logo argent bank"/></HeaderLogo>
                <div>
                    {!userinfos && 
                    <HeaderSignIn to="/login"> 
                        <img src={usercircle} alt="user icon" />
                        Sign In
                    </HeaderSignIn>}
                    {userinfos &&
                    <HeaderLoggedIn>
                        <HeaderLink to={`/user/${userinfos.userName}`} >
                            <img src={usercircle} alt="user icon" />
                            {userinfos.firstName} {userinfos.lastName}
                        </HeaderLink>
                        <HeaderLink onClick={logout}>
                            <img src={arrowright} alt="arrow right" />
                            Sign Out
                        </HeaderLink>
                    </HeaderLoggedIn>}
                </div>
            </HeaderNav>
        </HeaderDiv>
    )
}