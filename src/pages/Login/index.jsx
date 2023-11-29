import styled from 'styled-components'
import { colors } from '../../utils/style/GlobalStyle'
import usercircle  from "../../assets/circle-user-solid.svg"
import { Link } from "react-router-dom"
import Button from '../../components/Buttons'

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
    return (
        <LoginMain>
            <LoginSection>
                <LoginForm>
                    <img src={usercircle} alt="user icon" />
                    <h1>Sign In</h1>
                    <form>
                        <InputDiv>
                            <label for="username">Username</label>
                            <FormInput type="text" placeholder='"Hash-irama"' id="username" required></FormInput>
                        </InputDiv>
                        <InputDiv>
                            <label for="password">Password</label>
                            <FormInput type="password" placeholder='***************' id="password" required></FormInput>
                        </InputDiv>
                        <Link to="/user">
                            Sign In
                        </Link>
                        <Button text="Sign In" />
                    </form>
                </LoginForm>
            </LoginSection>
        </LoginMain>
    )
}
/*
<CheckboxDiv>
    <input type="checkbox" id="remember-me"></input>
    <label for="remember-me">Remember me</label>
</CheckboxDiv>
*/