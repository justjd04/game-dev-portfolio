import { init } from "ityped";
import { useEffect, useRef } from "react";
import styled from "styled-components";


const IntroStyles = styled.div`
.container-intro {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  }
.we-are {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  color: #000000;
  font-size: 50px;
  font-weight: bold;
}
#type-we-are {
  color: #3535ff;
}
.mario {
  position: absolute;
  bottom: 10%;
  right: 10%;
  height: 300px;
}

@media only screen and (max-width: 800px) {
  .we-are {
  position: absolute;
  top: 30%;
  width: 70%;
  font-size: 40px;
  font-weight: bold;
}
.mario {
  position: absolute;
  bottom: 5%;
  right: 5%;
  height: 200px;
}
}
`;

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["are Gamers.", 
      "love games so much that we are creating it!", 
      "we build awesome games for all players.",
      "work with creative minds and build games straight from your cool ideas."],
    });
  }, []);

  return (
        <IntroStyles>

          <div className='container-intro'>

          <div className='we-are'>
            We <span ref={textRef} id='type-we-are'></span>
          </div>
          <img src="https://i.imgur.com/2RCa9IZ.png" alt="games" className="mario"/>

          </div>
        
        </IntroStyles>
  
  );
}