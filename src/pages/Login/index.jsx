import { Link } from "react-router-dom"
import styled from 'styled-components'

const Welcome = styled.p`
    color: black;
    font-size: 2rem;
    width: 100%;
`
const Leave = styled.p`
    color: black;
    font-size: 1.5rem;
    margin-top: 2rem;
    width: 100%;
    Link{
        color: red
    }
`

export default function Login() {
    return (
        <>
            <Welcome>GG you went through Home, welcome to the Login page</Welcome>
            <Leave>You can still go back to <Link to="/">Home</Link></Leave>
        </>
    )
}