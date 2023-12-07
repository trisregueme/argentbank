import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { colors } from '../../utils/style/GlobalStyle';
import usercircle from '../../assets/circle-user-solid.svg';
import Button from '../../components/Buttons';
import { loginUser } from '../../features/login';
import { fetchUserProfile } from '../../features/userprofile';

const LoginMain = styled.main`
   display: flex;
   min-height: 85vh;
`;
const LoginSection = styled.section`
   flex: 1;
   background-color: ${colors.background};
`;
const LoginForm = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   box-sizing: border-box;
   background-color: white;
   width: 320px;
   margin: 0 auto;
   margin-top: 3rem;
   padding: 2rem;
   img {
      width: 1.25rem;
   }
   h1 {
      margin: 1rem 0;
   }
`;
const InputDiv = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-bottom: 1rem;
   label {
      font-weight: bold;
   }
`;
const FormInput = styled.input`
   margin: 0.2rem;
   padding: 0.35rem;
   font-size: 1.2rem;
`;
const ErrorMessage = styled.p`
   color: red;
   font-size: 1rem;
   padding: 0.5rem;
   margin: 0.5rem;
   text-align: center;
`;
const CheckboxDiv = styled.div`
   display: flex;
   input {
      margin: 0 0.3rem;
      cursor: pointer;
   }
`;

export default function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const loginErrorMessage = useSelector((state) => state.user.error);
   const profileErrorMessage = useSelector((state) => state.profile.error);
   const signinState = useSelector((state) => state.user.status);
   const token = sessionStorage.getItem('jwtToken');
   const userinfos = useSelector((state) => state.profile.infos);

   const loginForm = (e) => {
      e.preventDefault();
      const email = e.target.username.value;
      const password = e.target.password.value;
      dispatch(loginUser({ email, password }));
   };

   // Retrieve user information from data base if token is stored AND if
   useEffect(() => {
      if (token !== null && signinState === 'succeeded') {
         dispatch(fetchUserProfile());
      }
      if (userinfos && token && signinState === 'succeeded') {
         navigate(`/user/${userinfos.id}`);
      }
   }, [token, signinState, userinfos, dispatch, navigate]);

   return (
      <LoginMain>
         <LoginSection>
            <LoginForm>
               <img
                  src={usercircle}
                  alt='user icon'
               />
               <h1>Sign In</h1>
               <form onSubmit={loginForm}>
                  <InputDiv>
                     <label htmlFor='username'>Username</label>
                     <FormInput
                        type='text'
                        placeholder='"email@address.com"'
                        id='username'
                     ></FormInput>
                  </InputDiv>
                  <InputDiv>
                     <label htmlFor='password'>Password</label>
                     <FormInput
                        type='password'
                        placeholder='***************'
                        id='password'
                     ></FormInput>
                  </InputDiv>
                  <CheckboxDiv>
                     <input
                        type='checkbox'
                        id='remember-me'
                     ></input>
                     <label htmlFor='remember-me'>Remember me</label>
                  </CheckboxDiv>
                  <Button
                     text='Sign In'
                     type='submit'
                  />
                  {loginErrorMessage && (
                     <ErrorMessage>{loginErrorMessage}</ErrorMessage>
                  )}
                  {profileErrorMessage && (
                     <ErrorMessage>{profileErrorMessage}</ErrorMessage>
                  )}
               </form>
            </LoginForm>
         </LoginSection>
      </LoginMain>
   );
}
