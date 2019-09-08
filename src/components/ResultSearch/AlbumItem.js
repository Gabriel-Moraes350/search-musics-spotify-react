import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAlbumFavorite, updateAlbum } from '../../services/localstorage';
import music from '../../assets/img/music.png';
import { ResultElement, Favorite } from '../../styles/resultSearch';
import { addFavorite } from '../../store/modules/favorites/actions';

export default function AlbumItem({ album, history }) {
  const [isFavorite, setIsFavorite] = useState(
    isAlbumFavorite(album.id).toString()
  );
  const dispatch = useDispatch();

  const updateFavorite = () => {
    updateAlbum(isFavorite, album);
    dispatch(addFavorite());
    setIsFavorite(isFavorite === 'true' ? 'false' : 'true');
  };

  const handleClick = () => {
    return history.push(`/album/${album.id}`);
  };

  const image = album.images[0] ? album.images[0].url : music;
  const artists = album.artists
    ? album.artists.length > 1
      ? 'Various Artists'
      : album.artists.map(a => a.name).toString()
    : '';

  return (
    <ResultElement>
      <h3>{album.name}</h3>
      <img src={image} alt={album.name} onClick={handleClick} />
      <p>Artists: {artists}</p>
      <div>
        <div>
          <Favorite onClick={updateFavorite} favorited={isFavorite}></Favorite>
        </div>
        <div>Total Tracks: {album.total_tracks}</div>
      </div>
    </ResultElement>
  );
}
