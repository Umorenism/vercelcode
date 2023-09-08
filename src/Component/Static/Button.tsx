import React from "react";
import styled from "styled-components";

interface iButton {
    text: string;
    bcc: string;
    color: string;

}

const GlobalButton: React.FC<iButton> = ({ text, color, bcc, }) => {
    return (
        <div>
            <Button bcc={bcc} color={color}>
                Log in
            </Button>
        </div>
    )
}
export default GlobalButton;

const Button = styled.button<{ bcc: string }>`
 background-color:${({ bcc }) => bcc};
 width:100px;
 height:40px;
 padding:20px 30px;
 color:${({ color }) => color};
 border-radius:20px;
 margin-right:20px;
 display:flex;
 justify-content:center;
 align-items:center;
 transfrom:all 350ms;
 &:hover{
    background-color:orange;
    cursor:pointer;
    transition:scale(1.8);
 }
`;