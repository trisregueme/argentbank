import styled from "styled-components"

const FooterDiv = styled.footer`
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;
    text-align: center;
`

export default function Footer() {
    return (
        <>
            <FooterDiv>
                <p>Copyright 2020 Argent Bank</p>
            </FooterDiv>
        </>
    )
}