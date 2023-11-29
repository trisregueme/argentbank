import styled from 'styled-components'
import Button from '../../components/Buttons'

const AccountElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    button{
        width: 30%
    }
`
const AccountInfos = styled.div`
    width:70%;
    h3{
        font-size: 1rem;
        font-weight: normal;
    }
    p:nth-child(2) {
        font-size: 2.5rem;
        font-weight: bold;
    }
    p:nth-child(3) {
        font-size: 1rem;
        font-weight: normal;
    }
`

export default function BankAccount() {
    return (
        <AccountElement>
            <AccountInfos>
                <h3>Argent Account xd</h3>
                <p>$12,345.67</p>
                <p>Available Balance</p>
            </AccountInfos>
            <Button text="View transactions"></Button>
        </AccountElement>
    )
}