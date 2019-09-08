import React, { useState, useEffect } from 'react';
import { ResultGrid, Container, Banner } from '../../styles/resultSearch';
import api from '../../services/api';
import music from '../../assets/img/music.png';
import AlbumItem from '../../components/ResultSearch/AlbumItem';

export default function ArtistDetail({ match, history }) {
  const { id } = match.params;
  const [artist, setArtist] = useState({
    images: [],
    name: '',
    genres: [],
    followers: {},
    popularity: 0,
  });
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function findArtist() {
      const { data } = await api.get(`artists/${id}`);
      return setArtist(data);
    }

    async function getAlbums() {
      const { data } = await api.get(`/artists/${id}/albums?limit=5`);
      return setAlbums(data.items);
    }

    findArtist();
    getAlbums();
  }, [id]);

  const popularity =
    artist.popularity > 80
      ? 'HOT'
      : artist.popularity > 60
      ? 'COOL'
      : artist.popularity > 30
      ? 'REGULAR'
      : 'UNDERGROUND';
  return (
    <Container>
      <Banner>
        <img
          src={artist.images[0] ? artist.images[0].url : music}
          alt={artist.name}
        />
        <div>
          <h2>{artist.name}</h2>
          <p>Followers: {artist.followers.total}</p>
          <p>Genres: &nbsp; {artist.genres.toString()}</p>
          <small>Popularity: {popularity}</small>
        </div>
      </Banner>
      <ResultGrid>
        {albums.map(a => (
          <AlbumItem history={history} album={a} key={a.id} />
        ))}
      </ResultGrid>
    </Container>
  );
}
