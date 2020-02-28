import { Button, Container } from 'components/common';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

import { Header } from 'components/theme';
import React from 'react';
import dev from 'assets/illustrations/dev.svg';
import { socialLinks } from 'data/config';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Daniel and I’m a Backend & Frontend engineer!</h4>
        <Button as="a" href={socialLinks.linkedin} target="_blannk" rel="noreferrer noopener">
          Find me on LinkedIn
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Daniel and I’m a Backend & Frontend engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
