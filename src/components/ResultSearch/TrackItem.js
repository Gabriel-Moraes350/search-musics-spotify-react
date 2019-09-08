import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import music from '../../assets/img/music.png';
import { ResultElement, Favorite } from '../../styles/resultSearch';
import { millisToMinutesAndSeconds } from '../../utils/transformMillis';
import * as FavoriteActions from '../../store/modules/favorites/actions';
import { updateTrack, isTrackFavorite } from '../../services/localstorage';

export default function TrackItem({ track }) {
  const [isFavorite, setIsFavorite] = useState(
    isTrackFavorite(track.id).toString()
  );
  const dispatch = useDispatch();

  const updateFavorite = () => {
    dispatch(FavoriteActions.addFavorite());
    updateTrack(isFavorite, track);
    setIsFavorite(isFavorite === 'true' ? 'false' : 'true');
  };

  const image =
    track.album && track.album.images[0] ? track.album.images[0].url : music;
  const artists = track.artists
    ? track.artists.map(a => a.name).toString()
    : '';

  return (
    <ResultElement>
      <h3>{track.name}</h3>
      <img src={image} alt={track.name} />
      <p>
        Artists: {artists}
        <br />
        Album name: {track.album ? track.album.name : ''}
        <br />
        Duration: {millisToMinutesAndSeconds(track.duration_ms)}
      </p>
      <div>
        <div>
          <Favorite onClick={updateFavorite} favorited={isFavorite}></Favorite>
        </div>
      </div>
    </ResultElement>
  );
}
