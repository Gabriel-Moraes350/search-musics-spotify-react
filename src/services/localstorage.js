export function getFavorites() {
  const favorites = {};
  favorites.albums = JSON.parse(localStorage.getItem('albums'));
  favorites.artists = JSON.parse(localStorage.getItem('artists'));
  favorites.tracks = JSON.parse(localStorage.getItem('tracks'));

  return favorites;
}
export function isAlbumFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('albums'));
  return favorites ? favorites.some(a => a.id === id) : false;
}

export function isTrackFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('tracks'));

  return favorites ? favorites.some(a => a.id === id) : false;
}

export function isArtistFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('artists'));
  return favorites ? favorites.some(a => a.id === id) : false;
}

export function updateAlbum(isFavorite, album) {
  let favoriteUpdate = JSON.parse(localStorage.getItem('albums'));
  if (isFavorite === 'true') {
    favoriteUpdate = favoriteUpdate.filter(a => a.id !== album.id);
  } else {
    if (favoriteUpdate == null) {
      favoriteUpdate = [album];
    } else {
      favoriteUpdate = [...favoriteUpdate, album];
    }
  }
  localStorage.setItem('albums', JSON.stringify(favoriteUpdate));
}
export function updateArtist(isFavorite, artist) {
  let favoriteUpdate = JSON.parse(localStorage.getItem('artists'));
  if (isFavorite === 'true') {
    favoriteUpdate = favoriteUpdate.filter(a => a.id !== artist.id);
  } else {
    if (favoriteUpdate == null) {
      favoriteUpdate = [artist];
    } else {
      favoriteUpdate = [...favoriteUpdate, artist];
    }
  }
  localStorage.setItem('artists', JSON.stringify(favoriteUpdate));
}
export function updateTrack(isFavorite, track) {
  let tracksFavorited = JSON.parse(localStorage.getItem('tracks'));
  if (isFavorite === 'true') {
    tracksFavorited = tracksFavorited.filter(a => a.id !== track.id);
  } else {
    if (tracksFavorited == null) {
      tracksFavorited = [track];
    } else {
      tracksFavorited = [...tracksFavorited, track];
    }
  }
  localStorage.setItem('tracks', JSON.stringify(tracksFavorited));
}
