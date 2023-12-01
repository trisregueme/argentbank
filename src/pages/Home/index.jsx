import styled from 'styled-components'
import background from '../../assets/bank-tree.webp'
import { device } from '../../utils/style/GlobalStyle'
import HomeElement from '../../components/HomeElement'
import chatlogo from "../../assets/icon-chat.webp"
import moneylogo from "../../assets/icon-money.webp"
import securitylogo from "../../assets/icon-security.webp"

const elements = [
    {
        src: `${chatlogo}`,
        alt: "conversation type chat",
        title:"You are our #1 priority",
        text:`Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`,
    },
    {
        src:`${moneylogo}`,
        alt: "billets avec symbole dollar",
        title:"More savings means higher rates",
        text:`The more you save with us, the higher your interest rate will be!`,
    },
    {
        src:`${securitylogo}`,
        alt: "bouclier avec un check sécurité",
        title:"Security you can trust",
        text:`We use top of the line encryption to make sure your data and money is always safe.`,
    }
]

const HeroSection = styled.section`
    background-image: url(${background});
    background-size: cover;
    background-position: 0 -50px;
    background-repeat: no-repeat;
    min-height: 300px;
    position: relative;
    @media ${device.desktop} {
        background-position: 0% 33%;
        min-height: 400px;
    }
`
const HeroContent = styled.div`
    background: white;
    padding: 32px;
    width: 270px;
    position: relative;
    margin: auto;
    top: 2rem;
    text-align: left;
    @media ${device.desktop} {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 364px;
        margin: 2rem;
    }
`
const HeroBoldText = styled.p`
    font-weight: bold;
    font-size: 1rem;
    @media ${device.desktop} {
        font-size: 1.5rem;
    }
`
const HeroText = styled.p`
    margin-top: 0.9rem;
    font-size: 0.9rem;
    @media ${device.desktop} {
        margin-top: 1.2rem;
        font-size: 1.2rem;
    }
`

const HomeContent = styled.section`
    display: flex;
    flex-direction: column;
    @media ${device.desktop} {
        flex-direction: row;
    }
`

export default function Home() { 
    return (
        <main>
            <HeroSection>
                <HeroContent>
                    <HeroBoldText>No fees.</HeroBoldText>
                    <HeroBoldText>No minimum deposit.</HeroBoldText>
                    <HeroBoldText>High interest rates.</HeroBoldText>
                    <HeroText>Open a savings account with Argent Bank today!</HeroText>
                </HeroContent>
            </HeroSection>
            <HomeContent>
                <HomeElement 
                    src={elements[0].src}
                    alt={elements[0].alt}
                    title={elements[0].title}
                    text={elements[0].text}
                />
                <HomeElement 
                    src={elements[1].src}
                    alt={elements[1].alt}
                    title={elements[1].title}
                    text={elements[1].text}
                />
                <HomeElement 
                    src={elements[2].src}
                    alt={elements[2].alt}
                    title={elements[2].title}
                    text={elements[2].text}
                />
            </HomeContent>
        </main>
    )
}