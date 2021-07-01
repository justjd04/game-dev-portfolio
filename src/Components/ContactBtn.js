import React from 'react';
import styled from 'styled-components';
import { FaGooglePlay } from "react-icons/fa";

const ButtonStyles = styled.div`
div {
background: linear-gradient(to right, #03effe, #026be2);
color: #fff;
position: relative;
text-align: center;
font-family: sans-serif;
height: 40px;
width: 120px;
margin: 0 40px;
padding: 10px 5px;
cursor: pointer;
font-size: 16px;
border-radius: 50px;
overflow: hidden;
}
.btn1 {
background: linear-gradient(to right, #03effe, #026be2);
}

#visit-gplay {
    display: flex;
    flex-direction: row;
    margin: 0 0 5px 3px;
}

#gplay {
    margin: 0 4px 5px 10px;
    color: #ff0080;
    font-size: 25px;
}


/*
.btn2 {
  background: linear-gradient(to right, #fe03b4, #ee0202);
}
*/
div:before {
  content: "";
  position: absolute;
  height: 100px;
  width: 20px;
  background: #f3f3f3;
  box-shadow: 0 0 10px #fff;
  filter: blur(1px);
  opacity: 0.9;
  top: -30px;
  transition: 0.7s;
  transform: rotate(-20deg) translateX(-80px);
}
div:hover:before {
  transform: rotate(-20deg) translate(140px, 70px);
}
`;

function ContactBtn() {
    return (
      
            <ButtonStyles>
            <div class="btn1"><p id="visit-gplay"><FaGooglePlay id="gplay"/><p id="vgplay">Visit Us</p></p></div>
            </ButtonStyles>

    )
}

export default ContactBtn;