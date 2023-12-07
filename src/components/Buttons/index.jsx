import styled from 'styled-components'
import { colors } from '../../utils/style/GlobalStyle'

const GreenButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${colors.green};
    background-color: ${colors.green};
    color: #fff;
    &:hover{
        cursor: pointer;
    }
`

export default function Button({ text, onClick, type, form }) {
    return <GreenButton onClick={onClick} type={type} form={form}>{text}</GreenButton>
}