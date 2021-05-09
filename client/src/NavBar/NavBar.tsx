import React, { FC, useState } from 'react';
import { Wrapper,Title,Login,Logout,SignUp,LoginSignUpWrapper } from './styled';
import { Link } from 'react-router-dom'

const NavBar:FC = () => {

  const loggedIn = false;

  return (
    <Wrapper>
      <Title><Link to="/" style={{textDecoration:"none",color:"whitesmoke"}}>Chatter</Link></Title>
      {loggedIn?(
        <LoginSignUpWrapper>
          <Logout>logout</Logout>
        </LoginSignUpWrapper>
      ):(
        <LoginSignUpWrapper>
          <Link to="/signup" style={{textDecoration:"none"}}><SignUp>signup</SignUp></Link>
          <Link to="/login" style={{textDecoration:"none"}}><Login>login</Login></Link>
        </LoginSignUpWrapper>
      )}

      
    </Wrapper>
  )
}

export default NavBar;
