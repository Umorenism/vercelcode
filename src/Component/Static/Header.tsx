import React from "react";
import styled from "styled-components";
import GlobalButton from "./Button";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'


const Header = () => {

  const [show, setShow] = useState(false)
  const Toggle = () => {
    setShow(!show);
  }


  const [arrow, setArrow] = useState(false)
  const Drop = () => {
    setArrow(!arrow);
  }

  return (
    <Container>

      <Wrapper>
        <Wrap>

          <Holder>
            <svg
              width="76"
              height="40"
              viewBox="0 0 76 65"
              fill="none" xmlns="http://www.w3.org/2000/svg"><path
                d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>

            <h1>Vercel</h1>
          </Holder>

          <NavHolder>
            <Navs onClick={Drop}>
              Features
              <MdOutlineKeyboardArrowDown />
            </Navs>

            {arrow ? (
              <FeatureCard>
                <Cad1>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Preview</P>
                    </Lg>
                    <B>Zero config,More innovation</B>
                  </Cad>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Next.js</P>
                    </Lg>
                    <B>The Native Next.js platform</B>
                  </Cad>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Analytics</P>
                    </Lg>
                    <B>Real-time insight,peak perfomance</B>
                  </Cad>
                </Cad1>
                <Cad2>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Infrastructure</P>
                    </Lg>
                    <B>Always fast,always Online</B>
                  </Cad>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Edge Functions</P>
                    </Lg>
                    <B>Dynamic pages,static speeds</B>
                  </Cad>
                  <Cad>
                    <Lg>
                      <Ick>  <BiMessageRounded /></Ick>
                      <P>Storage</P>
                    </Lg>
                    <B>Serverless storage,for frontend</B>
                  </Cad>
                </Cad2>

              </FeatureCard>
            ) : null}

            <Navs>Docs</Navs>
            <Navs>Integrations</Navs>
            <Navs>Customers</Navs>
            <Navs>Enterprise</Navs>
            <Navs>Pricing</Navs>
          </NavHolder>
        </Wrap>

        <ButtonHolder>
          <GlobalButton text="login" bcc="gray" color="white" />
          <GlobalButton text="sign up" bcc="#fff" color="#000" />
        </ButtonHolder>

        <Icon onClick={Toggle}>
          {show ? <ImCross /> : <FaBars />}

        </Icon>
        {show ? (
          <Card>
            <Btn>
              <BtnB>log IN</BtnB>
              <BtnB1>log IN</BtnB1>
            </Btn>
            <Btxt>Features</Btxt>
            <Btxt>Docs</Btxt>
            <Btxt>Templates</Btxt>
            <Btxt>Intergrations</Btxt>
            <Btxt>Customers</Btxt>
            <Btxt>Enterprise</Btxt>
            <Btxt>Pricing</Btxt>
            <Btxt>Contacts</Btxt>
          </Card>
        ) : null}
      </Wrapper>
    </Container>
  )

}
export default Header;
const Btxt = styled.div`
height:60px;
background-color:black;
width:100%;
color:white;
border-bottom:2px solid white;


`;
const BtnB = styled.div`
color:white;
height:50px;
background-color:black;
width:100%;
display:flex;
justify-content:center;
align-items:center;
border:2px solid gray;
&:hover{
  background-color:blue;
 }

`
const BtnB1 = styled.div`
color:black;
height:50px;
background-color:white;
width:100%;
display:flex;
justify-content:center;
align-items:center;
&:hover{
  background-color:blue;
 }

`
const Btn = styled.div`
 width:100%;
 height:100px;
 background-color:transparent;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 
`
const Ick = styled.div`
margin-top:5px;
height:15px;
width:15px;
color:white;
margin-right:3px;
font-weight:800;
`

const B = styled.div`
 color:white;
 margin-left:10px;
`

const P = styled.div`
color:white;
font-size:16px;
`
const Logo = styled.div`
 hight:20px;
 width:20px;
 background-color:white;
 margin-right:18px;
`

const Lg = styled.div`
display:flex;
margin-left:10px;
`
const Cad = styled.div`
height:34%;
margin-top:10px;
`
const Cad2 = styled.div`
width:50%;
height:100%;
// background-color:red;
border-radius:20px;
`
const Cad1 = styled.div`
width:50%;
height:100%;
// background-color:blue;
border-radius:20px;

`

const FeatureCard = styled.div`
width:40%;
height:300px;
background-color:black;
position:absolute;
top:80px;
border-radius:20px;
display:flex;
border:1px solid gray;

`;

const Card = styled.div`
width:60%;
height:500px;
display:flex;
background-color:black;
position:absolute;
top:80px;
border-radius:20px;
border:1px solid gray;
right:0;
flex-direction:column;
border-radius:30px;

@media and screen(min-width: 1034px){
display: none;
}

`;

const Icon = styled.div`
// display:flex;
align-items:center;
color:white;
font-size:30px;
cursor:pointer;

@media screen and (max-width:768px){
 display:flex;
}
display:none;  
`;


const ButtonHolder = styled.div`
display:flex;
align-items:center;

@media screen and (max-width:768px){
 display:none;
}
`;

const Navs = styled.div`
color:gray;
margin-right:35px;
transition:all ease-in-out 350ms;
cursor:pointer;
&hover{
  color:white;
}
`;

const NavHolder = styled.div`
display:flex;
align-items:center;
margin-left:20px;

@media screen and (max-width: 768px) {
 display:none;
}
`;


const Wrap = styled.div`
display:flex;
align-items:center;
`;

const Holder = styled.div`
 display:flex;
 align-items:center;
 
 h1{
  color:white;
  margin-right:15px;
  font-size:20px;
 }
`;
const Wrapper = styled.div`
width:95%;
height:100%;
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
// background-color:green;
`;


const Container = styled.div`
width:100%;
height:80px;
display:flex;
background-color:black;
justify-content:center;
`;
