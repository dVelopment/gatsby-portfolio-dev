import { Details, Thumbnail, Wrapper } from './styles';

import ContactForm from './ContactForm';
import { Container } from 'components/common';
import React from 'react';
import contact from 'assets/illustrations/contact.svg';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Daniel and I’m a Backend & Frontend engineer!" />
    </Thumbnail>
  </Wrapper>
);
