import styled from 'styled-components';
import { colors, device } from '../../utils/style/GlobalStyle';

const AccountElement = styled.div`
   display: block;
   border: 1px solid black;
   background-color: white;
   width: 80%;
   margin: 0 auto;
   padding: 1.5rem;
   box-sizing: border-box;
   text-align: left;
   margin-bottom: 2rem;
   @media ${device.tablet} {
      display: flex;
      align-items: center;
   }
`;
const AccountInfos = styled.div`
   width: 70%;
   h3 {
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
`;
const ViewTransaction = styled.button`
   display: block;
   width: 100%;
   padding: 8px;
   font-size: 1.1rem;
   font-weight: bold;
   margin-top: 1rem;
   border-color: ${colors.green};
   background-color: ${colors.green};
   color: #fff;
   &:hover {
      cursor: pointer;
   }
   @media ${device.tablet} {
      width: 33%;
   }
`;

export default function BankAccount({ name, balance, message }) {
   return (
      <AccountElement>
         <AccountInfos>
            <h3>{name}</h3>
            <p>{balance}</p>
            <p>{message}</p>
         </AccountInfos>
         <ViewTransaction>View transactions</ViewTransaction>
      </AccountElement>
   );
}
