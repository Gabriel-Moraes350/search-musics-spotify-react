import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Select } from 'semantic-ui-react';

import { Container, ResultGrid } from '../../styles/resultSearch';
import api from '../../services/api';
import ArtistItem from '../../components/ResultSearch/ArtistItem';
import TrackItem from '../../components/ResultSearch/TrackItem';
import AlbumItem from '../../components/ResultSearch/AlbumItem';
import * as SearchActions from '../../store/modules/search/actions';

export default function ResultaSearch({ history }) {
  const [items, setItems] = useState({
    artists: [],
    tracks: [],
    albums: [],
  });
  const searchText = useSelector(state => state.search);
  const [typeSearch, setTypeSearch] = useState('album,artist,track');
  const dispatch = useDispatch();
  const optionsSelect = [
    {
      key: 'all',
      value: 'album,artist,track',
      text: 'All',
    },
    {
      key: 'track',
      value: 'track',
      text: 'Tracks',
    },
    {
      key: 'artist',
      value: 'artist',
      text: 'Artists',
    },
    {
      key: 'album',
      value: 'album',
      text: 'Albums',
    },
  ];

  let timeout = '';
  function handleChange(e) {
    if (timeout) clearTimeout(timeout);
    const { value } = e.target;
    timeout = setTimeout(
      () => dispatch(SearchActions.changeSearch(value)),
      500
    );
  }

  function handleSelectChange(_, data) {
    setTypeSearch(data.value);
  }

  useEffect(() => {
    async function search() {
      if (searchText.trim() === '') {
        toast.error('Should provide text for search');
        return;
      }

      const { data } = await api.get(
        `search?q=${searchText}&type=${typeSearch}`
      );

      const newItems = {
        artists: [],
        tracks: [],
        albums: [],
      };

      if (data.artists) newItems.artists = data.artists.items;
      if (data.tracks) newItems.tracks = data.tracks.items;
      if (data.albums) newItems.albums = data.albums.items;

      setItems(newItems);
    }
    search();
  }, [searchText, typeSearch]);

  return (
    <Container>
      <h2>Showing results for search: "{searchText}"</h2>
      <div className="select-input">
        <label htmlFor="typeSelect">Select type for search: </label>
        <Select
          id="typeSelect"
          value={typeSearch}
          placeholder="Search type"
          onChange={handleSelectChange}
          options={optionsSelect}
        />
      </div>
      <input
        type="text"
        placeholder="Search for musics, artists, albums..."
        onChange={handleChange}
      />
      <h3 id="music">Tracks</h3>
      <ResultGrid>
        {items.tracks.length > 0 &&
          items.tracks.map(i => <TrackItem key={i.id} track={i} />)}
      </ResultGrid>
      <h3 id="album">Albums</h3>
      <ResultGrid>
        {items.albums.length > 0 &&
          items.albums.map(i => (
            <AlbumItem key={i.id} album={i} history={history} />
          ))}
      </ResultGrid>
      <h3 id="artist">Artists</h3>
      <ResultGrid>
        {items.artists.length > 0 &&
          items.artists.map(i => (
            <ArtistItem key={i.id} artist={i} history={history} />
          ))}
      </ResultGrid>
    </Container>
  );
}
