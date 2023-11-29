import styled from "styled-components"
import { colors , device } from "../../utils/style/GlobalStyle"

const ElementSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    img{
        width: 152px;
        padding: 1rem;
        border: 10px solid ${colors.green};
        border-radius: 50%;
    }
    h3{
        font-size: 1.25rem;
        margin-top: 1.25rem;
        text-align: center;
    }
    p{
        margin: 1.25rem 0;
        text-align: center;
    }
    @media ${device.desktop} {
        flex: 1;
        padding: 2.5rem;
    }
`

export default function HomeElement({ src, alt, title, text }) {
    return (
        <ElementSection>
            <img src={src} alt={alt}></img>
            <h3>{title}</h3>
            <p>{text}</p>
        </ElementSection>
    )
}
