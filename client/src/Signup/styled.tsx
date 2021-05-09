import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
min-height:92vh;
`;



export const Form = styled.form`
display:flex;
flex-direction:column;
height:400px;
width:100%;
justify-content:space-around;
/* align-items:center; */
margin-top:50px;
`;

export const FormTitle = styled.div`
color:whitesmoke;
font-size:2rem;
text-align:center;
`;

export const Username = styled.input`
width:80%;
outline:none;
border:none;
padding:8px 12px;
border-radius:9999999px;
background-color:#181820;
border:1px solid #6e6e6e;
font-family:"Fira Code";
color:whitesmoke;
margin:auto;
`;

export const Email = styled(Username)``;
export const Password = styled(Username)``;
export const  ConfirmPassword = styled(Username)``;

export const SubmitBtnWrapper = styled.div`
width:80%;
margin:auto;
`;
export const SubmitBtn = styled.input`
outline:none;
border:none;
border-radius:9999999px;
padding:6px 18px;
background:linear-gradient(to right,purple,salmon);
cursor:pointer;
font-family:"Fira Code";
color:whitesmoke;

`;
