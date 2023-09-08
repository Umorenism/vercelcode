import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Cart = () => {

    const [Seconds, setSeconds] = useState(0);
    const [Minutes, setMinutes] = useState(0);

    var timer: any;

    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(Seconds + 1)

            if (Seconds === 59) {
                setMinutes(Minutes + 1)
                setSeconds(0)
            }
        }, 3000)

        return () => clearInterval(timer);

    });

    const Restart = () => {
        setSeconds(0);
        setMinutes(0);
    }
    const Stop = () => {
        clearInterval(timer)
    }

    return (
        <Container>
            <Hold>
                <H1>Timer</H1>
                <Date>{Minutes}:{Seconds}</Date>
                <Btn>
                    <Start onClick={Restart}>Restart</Start>
                    <Start onClick={Stop}>Stop</Start>
                </Btn>
            </Hold>
        </Container>
    )
}
export default Cart;

const Start = styled.div`
height:30px;
width:100px;
background-color:skyblue;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
margin-right:15px;
cursor:pointer; 
`
const Btn = styled.div`
  display :flex;
 `
const Date = styled.div`
font-size:25px;
font-weight:800;
margin-bottom:10px;
color:orange;
`

const H1 = styled.div`
 font-size:26px;
 font-weight:800;
 margin-bottom:10px;
 color:white;
`

const Hold = styled.div`
height:200px;
 width:400px;
 background-color:black;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:10px;
 flex-direction:column;
 box-shadow:8px 3px 8px gray;
 
`
const Container = styled.div`
 height:50vh;
 width:100%;
 background-color:skyblue;
 display:flex;
 justify-content:center;
 align-items:center;
 gap:30px;
`