import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { slide as NavBar } from 'react-burger-menu';

export default props => {
  return (
    <NavBar>
      <Link to="favoritos">
        <Menu.Item>
          Favoritos &nbsp;
          <MdFavorite></MdFavorite>
        </Menu.Item>
      </Link>

      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
    </NavBar>
  );
};
