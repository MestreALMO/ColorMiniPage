import React from 'react';
import { IoColorPalette } from 'react-icons/io5';

import { Container, Navbar, Ul } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar>
          <IoColorPalette />
          <Ul>
            <li>
              <button type="button">Purple</button>
            </li>
            <li>
              <button type="button">Green</button>
            </li>
            <li>
              <button type="button">Red</button>
            </li>
            <li>
              <button type="button">Blue</button>
            </li>
          </Ul>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
