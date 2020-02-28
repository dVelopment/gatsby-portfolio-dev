import { Intro, Projects, Skills } from 'components/landing';
import { Layout, SEO } from 'components/common';

import React from 'react';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
  </Layout>
);
