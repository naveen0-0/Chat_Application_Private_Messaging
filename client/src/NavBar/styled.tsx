import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding:10px;
background-color:#181820;
`;
export const Title = styled.div`
font-size:2rem;
color:white;
font-family:"Dejavu Sans mono"
`;
export const LoginSignUpWrapper = styled.div`
flex:1;
display:flex;
justify-content:space-around;
align-items:center;
max-width:200px;
`
export const Login = styled.button`
outline:none;
cursor: pointer;
border:none;
border-radius:999999px;
padding:4px 18px;
background:linear-gradient(to right, purple,salmon);
color:#dfdfdf;
font-family:"Fira Code";
font-size:12px;
`;

export const SignUp = styled(Login)``;
export const Logout = styled(Login)``;