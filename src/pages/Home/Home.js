import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Form, Container, SearchIcon, Login } from './style';
import { authEndpoint, clientId, redirectUri } from '../../config/authSpotify';

import hash from '../../services/hash';
import * as SearchActions from '../../store/modules/search/actions';

function Home({ history }) {
  const [inputSearch, setInputSearch] = useState('');
  const [token, setToken] = useState(hash.access_token);

  useEffect(() => {
    function getToken() {
      setToken(localStorage.getItem('access_token'));
    }

    if (!token) {
      getToken();
    } else {
      localStorage.setItem('access_token', token);
    }
  }, [token]);

  const dispatch = useDispatch();

  const handleSearch = event => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const search = event => {
    event.preventDefault();
    if (!inputSearch.trim()) {
      toast.error('Should provide value on field!');
      return;
    }

    if (!token) {
      toast.error('Should  make login first!');
      return;
    }

    dispatch(SearchActions.changeSearch(inputSearch));
    return history.push('/results');
  };

  return (
    <Container>
      <div>
        {!token && (
          <Login
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </Login>
        )}
        <h1>The best music search ever made!!</h1>
        <Form onSubmit={search}>
          <input
            type="text"
            placeholder="Search for musics, artists, albums..."
            value={inputSearch}
            onChange={handleSearch}
          />
          <SearchIcon onClick={search} />
        </Form>
      </div>
    </Container>
  );
}

export default Home;
