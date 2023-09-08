import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import GlobalButton from "../../Component/Static/Button";
import pic from './asset/pic.jpg'



const Hero = () => {


  const Dev: string[] = [
    "background-image:linear-gradient(to right, orange, purple); -webkit-background-clip:text;-webkit-text-fill-color:transparent",
    "white",
    "white"
  ]

  const Prev: string[] = [
    "white",
    "background-image:linear-gradient(to right, red, pink); -webkit-background-clip:text;-webkit-text-fill-color:transparent",
    "white",

  ]

  const Shi: string[] = [
    "white",
    "white",
    "background-image:linear-gradient(to right, yellow, orange); -webkit-background-clip:text;-webkit-text-fill-color:transparent"

  ]

  const Dev_ref: any = useRef()
  const Prev_ref: any = useRef()
  const Shi_ref: any = useRef()

  const [Count, setCount] = useState(0)

  useEffect(() => {
    Dev_ref.current.style = Dev[Count % Dev.length]
    Prev_ref.current.style = Prev[Count % Prev.length]
    Shi_ref.current.style = Shi[Count % Shi.length]
  })

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1 / 2)
    }, 3000)
  }, []);


  return (
    <div>
      <Container>
        <Develop>
          <Deve ref={Dev_ref} >Develop.</Deve>
          <Deve ref={Prev_ref} >Preview.</Deve>
          <Deve ref={Shi_ref} >Ship.</Deve>
        </Develop>
        <P>Vercel's frontend cloud gives develop ers the frameworks, workflows,</P>
        <P2>and infrastructure to build a faster, more personalized Web.</P2>

        <ButtonHolder >
          <Button >
            <svg
              width="20"
              height="20"
              viewBox="0 0 76 65"
              fill="none" xmlns="http://www.w3.org/2000/svg"><path
                d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000" /></svg>

            Start Deploying</Button>
          <Button1>Get Memo</Button1>
        </ButtonHolder>
      </Container>
    </div>
  )
}
export default Hero;


const Button1 = styled.div`
background-color:white;
height:40px;
width:200px;
padding:10px 30px;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border-radius:15px;
  margin-right:40px;
  &:hover{
    background-color:orange;
  }
 

`
const Button = styled.div`
  background-color:blue;
  height:40px;
  width:200px;
  padding:10px 30px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border-radius:15px;
  margin-right:40px;
  gap:20px;
  &:hover{
    background-color:orange;
  }
 

`

const ButtonHolder = styled.div`
 display:flex;
 margin-top:40px;

`;
const P2 = styled.div`
  font-size:30px;
  font-weight:600;
  color:white;
  width:60%;
  padding-left:10px;
`

const P = styled.div`
  font-size:30px;
  font-weight:600;
  color:white;
  width:60%;
`
const Deve = styled.div`
  font-size:100px;
  font-weight:800;
  // color:red;
  &:hover{
   cursor:pointer;
  }
`
const Develop = styled.div`
  display:flex;
  margin-bottom:20px;
 
  
  
  
`;
const Container = styled.div`
height:80vh;
width:100%;
background-color:black;
display:flex;
align-items:center;
color:white;
justify-content:center;
flex-direction:column;

`;