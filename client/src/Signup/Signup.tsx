import React, { FC, useState } from 'react';
import axios from 'axios';
import { Wrapper,ConfirmPassword,Email,Form,FormTitle,Password,SubmitBtn,Username,SubmitBtnWrapper } from './styled';

const Signup:FC = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const SignUpFormSubmission = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form Submitted")
    }


    return (
        <Wrapper>
            <Form onSubmit={SignUpFormSubmission}>
                <FormTitle>Signup</FormTitle>
                <Username value={username} onChange={e=>setUsername(e.target.value)} required placeholder="Username"/>
                <Email value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email"/>
                <Password value={password} onChange={e=>setPassword(e.target.value)} required placeholder="Password"/>
                <ConfirmPassword value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required placeholder="Confirm your password"/>
                <SubmitBtnWrapper>
                    <SubmitBtn type="submit" value="Signup"/>
                </SubmitBtnWrapper>
            </Form>
        </Wrapper>
    )
}

export default Signup
