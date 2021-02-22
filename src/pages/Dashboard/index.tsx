import React from 'react';

import Navbar from './Navbar';
import Tab01 from './Tabs/01';
import Tab02 from './Tabs/02';
import Tab03 from './Tabs/03';
import Tab04 from './Tabs/04';
import Footer from './Footer';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Navbar />
      <Tab01 />
      <Tab02 />
      <Tab03 />
      <Tab04 />
      <Footer />
    </Container>
  </>
);

export default Dashboard;
