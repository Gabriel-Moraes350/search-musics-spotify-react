import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { MdNotifications, MdSearch } from 'react-icons/md';
import Badge from '@material-ui/core/Badge';
import { HashLink } from 'react-router-hash-link';

import { HeaderMenu, Logo } from './style';
import SideBar from '../SideBar/SideBar';

export default function Header({ location }) {
  const notifications = useSelector(state => state.favorites);
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <SideBar />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <HeaderMenu>
          <Menu>
            <Link to="/">
              <Logo />
            </Link>
            {location.includes('/results') ? (
              <>
                <Menu.Item>
                  <HashLink to="#music">Tracks</HashLink>
                </Menu.Item>
                <Menu.Item>
                  <HashLink to="#album">Albums</HashLink>
                </Menu.Item>
                <Menu.Item>
                  <HashLink to="#artist">Artists</HashLink>
                </Menu.Item>
              </>
            ) : (
              ''
            )}

            <Menu.Menu position="right">
              <Menu.Item>
                <Link to="/favorites">
                  Favorites &nbsp;
                  <Badge badgeContent={notifications} color="primary">
                    <MdNotifications size="20"></MdNotifications>
                  </Badge>
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link to="/results">
                  <MdSearch size="25" /> &nbsp;
                </Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </HeaderMenu>
      </Responsive>
    </>
  );
}
