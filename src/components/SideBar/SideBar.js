import React from 'react';
import { Menu } from 'semantic-ui-react';
import { MdFavorite, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { slide as NavBar } from 'react-burger-menu';

export default props => {
  return (
    <NavBar>
      <Link to="/favorites">
        <Menu.Item>
          Favorites &nbsp;
          <MdFavorite></MdFavorite>
        </Menu.Item>
      </Link>

      <Menu.Item>
        <Link to="/results">
          <MdSearch size="25" /> &nbsp;
        </Link>
      </Menu.Item>
    </NavBar>
  );
};
