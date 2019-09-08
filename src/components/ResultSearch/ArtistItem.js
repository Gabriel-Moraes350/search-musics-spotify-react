import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdVisibility } from 'react-icons/md';
import music from '../../assets/img/music.png';
import { ResultElement, Favorite } from '../../styles/resultSearch';
import { updateArtist, isArtistFavorite } from '../../services/localstorage';
import * as FavoriteActions from '../../store/modules/favorites/actions';

export default function ArtistItem({ artist, history }) {
  const [isFavorite, setIsFavorite] = useState(
    isArtistFavorite(artist.id).toString()
  );
  const dispatch = useDispatch();

  const updateFavorite = () => {
    updateArtist(isFavorite, artist);
    setIsFavorite(isFavorite === 'true' ? 'false' : 'true');
    dispatch(FavoriteActions.addFavorite());
  };

  const handleClick = () => {
    return history.push(`/artist/${artist.id}`);
  };

  const image = artist.images[0] ? artist.images[0].url : music;
  const genres = artist.genres.toString();
  const popularity =
    artist.popularity > 80
      ? 'HOT'
      : artist.popularity > 60
      ? 'COOL'
      : artist.popularity > 30
      ? 'REGULAR'
      : 'UNDERGROUND';
  return (
    <ResultElement>
      <h3>{artist.name}</h3>
      <img src={image} alt={artist.name} onClick={handleClick} />
      <p>Genres: {genres}</p>
      <div>
        <div>
          <Favorite onClick={updateFavorite} favorited={isFavorite}></Favorite>
        </div>
        <div>
          <MdVisibility></MdVisibility>
          <span>Popularity: {popularity}</span>
        </div>
      </div>
    </ResultElement>
  );
}
