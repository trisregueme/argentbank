import styled from 'styled-components'
import { colors } from '../../utils/style/GlobalStyle'

import Button from '../../components/Buttons'
import BankAccount from '../../components/UserAccounts'

const UserMain = styled.main`
    display: flex;
    min-height: 85vh;
`
const UserDiv = styled.div`
    flex: 1;
    background-color: ${colors.background};
`
const UserInfos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    h1{
        color:white;
        text-align: center;
        font-size: 2rem;
    }
    button{
        width: 110px;
        padding: 0.55rem;
    }
`
const UserAccounts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`
export default function User() {
    return (
        <UserMain>
            <UserDiv>
                <UserInfos>
                    <h1>Welcome back <br></br> "Hash-irama" !</h1>
                    <Button text="Edit Name" />
                </UserInfos>
                <UserAccounts>
                    <BankAccount />
                    <BankAccount />
                    <BankAccount />
                </UserAccounts>
            </UserDiv>
        </UserMain>
    )
}