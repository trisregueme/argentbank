import styled from 'styled-components'
import { Link } from "react-router-dom"

import { colors } from '../../utils/style/GlobalStyle'

const ErrorMain = styled.main`
    display: flex;
    min-height: 85vh;
`
const ErrorSection = styled.section`
    flex: 1;
    display: flex;
    align-items:center;
    background-color: ${colors.background};
`
const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    color: white;
    h1{
        font-size: 5rem;
    }
    p{
        font-size: 3rem;
    }
`
const ErrorLink = styled(Link)`
    color: white;
    text-decoration: underline white;
`

export default function Error() {
    return (
        <ErrorMain>
            <ErrorSection>
                <ErrorMessage>
                    <h1>Something went wrong</h1>
                    <p>Click here to reach <ErrorLink to="/">Home</ErrorLink></p>
                </ErrorMessage>
            </ErrorSection>
        </ErrorMain>
    )
}