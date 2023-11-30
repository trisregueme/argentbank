import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch , useSelector } from 'react-redux'

import { colors } from '../../utils/style/GlobalStyle'
import usercircle  from "../../assets/circle-user-solid.svg"
import Button from '../../components/Buttons'
import { loginUser } from '../../features/login'
import { fetchUserProfile } from '../../features/userprofile'

const LoginMain = styled.main`
    display: flex;
    min-height: 85vh;
`
const LoginSection = styled.section`
    flex: 1;
    background-color: ${colors.background};
`
const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    width: 320px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
    img{
        width: 1.25rem;
    }
    h1{
        margin: 1rem 0;
    }
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    label{
        font-weight: bold;
    }
`
const FormInput = styled.input`
    margin: 0.2rem;
    padding: 0.35rem;
    font-size: 1.2rem;
`
/*
const CheckboxDiv = styled.div`
    display: flex;
    input{
        margin: 0 0.3rem;
        cursor: pointer;
    }
`
*/

export default function Login() {
    const dispatch = useDispatch()
    /*
    const token = useSelector(state => state.user.token)
    const errormessage = useSelector(state => state.user.error)
    const userinfos = useSelector(state => state.profile.infos)
    */

    const submitForm = (e) => {
        e.preventDefault()
        const email = e.target.username.value
        const password = e.target.password.value
        dispatch(loginUser({ email, password }))
        //dispatch(fetchUserProfile( {token} ))
    }
    /*
    const loginTest = () => {
        console.log(token)
        console.log(errormessage)
        console.log(userinfos)
        console.log("xd")
    }
    
    const fetchInfosTest = () => {
        dispatch(fetchUserProfile({ token }))
    }
    */
    return (
        <LoginMain>
            <LoginSection>
                <LoginForm>
                    <img src={usercircle} alt="user icon" />
                    <h1>Sign In</h1>
                    <form onSubmit={submitForm}>
                        <InputDiv>
                            <label htmlFor="username">Username</label>
                            <FormInput type="text" placeholder='"Hash-irama"' id="username" ></FormInput>
                        </InputDiv>
                        <InputDiv>
                            <label htmlFor="password">Password</label>
                            <FormInput type="password" placeholder='***************' id="password" ></FormInput>
                        </InputDiv>
                        <Link to="/user">
                            Sign In
                        </Link>
                        <Button text="Sign In" type="submit" />
                    </form>
                </LoginForm>
            </LoginSection>
        </LoginMain>
    )
}
/*
<button onClick={loginTest}>OUIOUIOUI</button>
<button onClick={fetchInfosTest}>NONNONNON</button>

<CheckboxDiv>
    <input type="checkbox" id="remember-me"></input>
    <label for="remember-me">Remember me</label>
</CheckboxDiv>
*/