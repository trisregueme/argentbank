import styled from 'styled-components'
import { colors } from '../../utils/style/GlobalStyle'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
const Infos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    p{
        color:white;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    button{
        width: 140px;
        padding: 0.55rem;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const UserAccounts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`
const InputDiv = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 0.65rem;
    label{
        font-weight: bold;
    }
`
const FormInput = styled.input`
    color: black;
    width: 200px;
    padding: 0 0.35rem;
    font-size: 1.2rem;
    &[readOnly] {
       background-color: #b9b9b9;
   }
`
const FormLabel = styled.label`
    color: white;
    margin: 0.2rem;
    padding: 0.35rem;
    font-size: 1.2rem;
    text-align: right;
`
const Buttons = styled.div`
    display: flex;
    gap: 2rem;
`
export default function User() {
    const navigate = useNavigate()
    const userinfos = useSelector(state => state.profile.infos)
    const token = sessionStorage.getItem('jwtToken')
    console.log(userinfos)

    const [editmode, switchmode] = useState(false);
    const switchEditMode = () => {
        switchmode(!editmode)
    }

    useEffect(() => {
        !token && navigate("/") 
    }, [token, navigate])

    return (
        <UserMain>
            <UserDiv>
                {!editmode ?
                <Infos>
                    <p>Welcome back <br></br> {userinfos.userName} !</p>
                    <Button text="Edit Username" onClick={switchEditMode} />
                </Infos> :
                <Infos>
                    <p>Edit your infos</p>
                    <form id="username">
                        <InputDiv>
                            <FormLabel htmlFor='username'>User name :</FormLabel>
                            <FormInput type='text' name='username' placeholder={userinfos.userName}></FormInput>
                        </InputDiv>
                        <InputDiv>
                            <FormLabel htmlFor='firstname'>First Name :</FormLabel>
                            <FormInput type='text' name='firstname' placeholder={userinfos.firstName} readOnly></FormInput>
                        </InputDiv>
                        <InputDiv>
                            <FormLabel htmlFor='lastname'>Last Name :</FormLabel>
                            <FormInput type='text' name='lastname' placeholder={userinfos.lastName} readOnly></FormInput>
                        </InputDiv>
                    </form>
                    <Buttons>
                        <Button text="Save" type="submit" form="username" />
                        <Button text="Cancel" onClick={switchEditMode} />
                    </Buttons>
                </Infos>}
                <UserAccounts>
                    <BankAccount />
                    <BankAccount />
                    <BankAccount />
                </UserAccounts>
            </UserDiv>
        </UserMain>
    )
}

