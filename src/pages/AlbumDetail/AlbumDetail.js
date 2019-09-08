import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import music from '../../assets/img/music.png';
import { ListContainer } from './style';
import { Container, Banner } from '../../styles/resultSearch';
import api from '../../services/api';
import AlbumDetailList from './AlbumDetailList';

export default function AlbumDetail({ match, history }) {
  const { id } = match.params;
  const [album, setAlbum] = useState({
    name: '',
    artists: [],
    images: [],
    genres: '',
    release_date: '',
    tracks: {
      items: [],
    },
  });

  useEffect(() => {
    async function getDetails() {
      const { data } = await api.get(`albums/${id}`);
      return setAlbum(data);
    }

    getDetails();
  }, [id, history]);

  return (
    <Container>
      <Banner>
        <img
          src={album.images[0] ? album.images[0].url : music}
          alt={album.name}
        />
        <div>
          <h2>{album.name}</h2>
          <p>
            Artists:&nbsp;
            {album.artists.map(a => (
              <Link key={a.id} to={'/artist/' + a.id}>
                {a.name}
              </Link>
            ))}
          </p>
          <p>Genres: &nbsp; {album.genres.toString()}</p>
          <small>Release Date: {album.release_date}</small>
        </div>
      </Banner>
      <ListContainer>
        <h3>Musics</h3>
        <AlbumDetailList tracks={album.tracks.items} />
      </ListContainer>
    </Container>
  );
}
