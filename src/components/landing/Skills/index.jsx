import { Button, Container } from 'components/common';
import { Details, SkillsWrapper, Thumbnail, Wrapper } from './styles';

import React from 'react';
import dev from 'assets/illustrations/skills.svg';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Daniel and I’m a full-stack JavaScript engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>I love everything JavaScript and currently I'm the Lead Software Engineer at</p>
        <Button as="a" href="https://www.linkedin.com/company/bondvetclinic/" target="_blank" rel="noopener noreferrer">
          Bond Vet
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
