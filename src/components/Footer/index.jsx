import styled from "styled-components"

const FooterDiv = styled.footer`
    background-color: green;
    width: 100%;
    padding: 20px;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
`
const FooterTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: white;
    text-align: left;
`

export default function Footer() {
    return (
        <>
            <FooterDiv>
                <FooterTitle>I'm ArgentBank Footer, you really want to see your money dead</FooterTitle>
            </FooterDiv>
        </>
    )
}