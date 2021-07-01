import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';
import Intro from '../../components/Intro';
import styled from 'styled-components';

const HomeStyles = styled.div`
.home-intro {
  overflow: hidden;
}
.infosection {
  overflow: hidden;
}
`;

function Home() {
  return (
    <HomeStyles>
      <Intro id='home-intro'/>
      <InfoSection {...homeObjOne} className='infosection'/>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
    </HomeStyles>
  );
}

export default Home;
