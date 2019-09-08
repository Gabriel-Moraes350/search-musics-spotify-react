import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Favorite } from '../../styles/resultSearch';
import { millisToMinutesAndSeconds } from '../../utils/transformMillis';
import { updateTrack, isTrackFavorite } from '../../services/localstorage';
import { addFavorite } from '../../store/modules/favorites/actions';

export default function AlbumDetailList({ tracks }) {
  const [favoritesItems, setFavoritesItems] = useState(getFavorites());
  const dispatch = useDispatch();

  function getFavorites() {
    const favorites = JSON.parse(localStorage.getItem('tracks')) || [];
    return favorites;
  }

  useEffect(() => {}, [favoritesItems]);

  function handleFavoriteClick(item) {
    const isFavorite = isTrackFavorite(item.id).toString();
    updateTrack(isFavorite, item);
    setFavoritesItems(getFavorites());
    dispatch(addFavorite());
  }

  return (
    <Table color="black" key="black" inverted>
      <Table.Header>
        <Table.Row id="headerCell">
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
          <Table.HeaderCell>Duration</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.map(t => (
          <Table.Row key={t.id}>
            <Table.Cell>
              <Favorite
                favorited={isTrackFavorite(t.id).toString()}
                onClick={() => handleFavoriteClick(t)}
              />
            </Table.Cell>
            <Table.Cell>{t.name}</Table.Cell>
            <Table.Cell>
              {t.artists.map((a, i) => (
                <span key={i}>
                  {i > 0 ? ',' : ''}
                  <Link key={a.id} to={'/artist/' + a.id}>
                    {a.name}
                  </Link>
                </span>
              ))}
            </Table.Cell>
            <Table.Cell>{millisToMinutesAndSeconds(t.duration_ms)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
