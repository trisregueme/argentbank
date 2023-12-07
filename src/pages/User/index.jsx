import styled from 'styled-components';
import { colors } from '../../utils/style/GlobalStyle';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Buttons';
import BankAccount from '../../components/UserAccounts';
import { modifyUsername } from '../../features/username';

const UserMain = styled.main`
   display: flex;
   min-height: 85vh;
`;
const UserDiv = styled.div`
   flex: 1;
   background-color: ${colors.background};
`;
const Infos = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 2rem 0;
   p {
      color: white;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
   }
   button {
      width: 140px;
      padding: 0.55rem;
   }
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;
const UserAccounts = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 2rem 0;
`;
const InputDiv = styled.div`
   display: flex;
   text-align: left;
   margin-bottom: 0.65rem;
   label {
      font-weight: bold;
   }
`;
const FormInput = styled.input`
   color: black;
   width: 200px;
   padding: 0 0.35rem;
   font-size: 1.2rem;
   &[readOnly] {
      background-color: #a0a0a0;
   }
`;
const FormLabel = styled.label`
   color: white;
   margin: 0.2rem;
   padding: 0.35rem;
   font-size: 1.2rem;
   text-align: right;
`;
const Buttons = styled.div`
   display: flex;
   gap: 2rem;
`;
const ErrorMessage = styled.p`
   color: red;
   font-size: 1rem;
   padding: 0.5rem;
   margin: 0.5rem;
   text-align: center;
`;

export default function User() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const userinfos = useSelector((state) => state.profile.infos);
   const token = sessionStorage.getItem('jwtToken');
   const modifyUsernameError = useSelector((state) => state.modify.error);
   const [editmode, switchmode] = useState(false);
   const switchEditMode = () => {
      switchmode(!editmode);
   };

   useEffect(() => {
      !token && navigate('/');
   }, [token, navigate]);

   const usernameForm = (e) => {
      e.preventDefault();
      const userName = e.target.username.value;
      dispatch(modifyUsername({ userName }));
      switchEditMode();
   };

   const accounts = [
      {
         name: 'Argent Bank Checking (x8349)',
         balance: '$2,082.79',
         message: `Available Balance`,
      },
      {
         name: 'Argent Bank Savings (x6712)',
         balance: '$10,928.42',
         message: `Available Balance`,
      },
      {
         name: 'Argent Bank Credit Card (x8349)',
         balance: '$184.30',
         message: `Available Balance`,
      },
   ];

   return (
      <UserMain>
         <UserDiv>
            {!editmode ? (
               <Infos>
                  <p>
                     Welcome back <br></br> {userinfos.userName} !
                  </p>
                  <Button
                     text='Edit Username'
                     onClick={switchEditMode}
                  />
               </Infos>
            ) : (
               <Infos>
                  <p>Edit your infos</p>
                  <form
                     id='username'
                     onSubmit={usernameForm}
                  >
                     <InputDiv>
                        <FormLabel htmlFor='username'>User name :</FormLabel>
                        <FormInput
                           type='text'
                           name='username'
                           placeholder={userinfos.userName}
                        ></FormInput>
                     </InputDiv>
                     <InputDiv>
                        <FormLabel htmlFor='firstname'>First Name :</FormLabel>
                        <FormInput
                           type='text'
                           name='firstname'
                           placeholder={userinfos.firstName}
                           readOnly
                        ></FormInput>
                     </InputDiv>
                     <InputDiv>
                        <FormLabel htmlFor='lastname'>Last Name :</FormLabel>
                        <FormInput
                           type='text'
                           name='lastname'
                           placeholder={userinfos.lastName}
                           readOnly
                        ></FormInput>
                     </InputDiv>
                  </form>
                  <Buttons>
                     <Button
                        text='Save'
                        type='submit'
                        form='username'
                     />
                     <Button
                        text='Cancel'
                        onClick={switchEditMode}
                     />
                  </Buttons>
               </Infos>
            )}
            {modifyUsernameError && (
               <ErrorMessage>{modifyUsernameError}</ErrorMessage>
            )}
            <UserAccounts>
               <BankAccount
                  name={accounts[0].name}
                  balance={accounts[0].balance}
                  message={accounts[0].message}
               />
               <BankAccount
                  name={accounts[1].name}
                  balance={accounts[1].balance}
                  message={accounts[1].message}
               />
               <BankAccount
                  name={accounts[2].name}
                  balance={accounts[2].balance}
                  message={accounts[2].message}
               />
            </UserAccounts>
         </UserDiv>
      </UserMain>
   );
}
