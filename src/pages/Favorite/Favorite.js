import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, ResultGrid } from '../../styles/resultSearch';
import AlbumItem from '../../components/ResultSearch/AlbumItem';
import TrackItem from '../../components/ResultSearch/TrackItem';
import ArtistItem from '../../components/ResultSearch/ArtistItem';
import { getFavorites } from '../../services/localstorage';

import { readFavorites } from '../../store/modules/favorites/actions';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favorites: {
        albums: [],
        tracks: [],
        artists: [],
      },
    };
  }

  componentDidMount() {
    this.setState({ favorites: getFavorites() });
    this.props.readFavorites();
  }

  render() {
    return (
      <Container>
        <h2>Favorites</h2>
        <div>
          <h3>Musics</h3>
          <ResultGrid>
            {this.state.favorites.tracks &&
              this.state.favorites.tracks.length > 0 &&
              this.state.favorites.tracks.map(i => (
                <TrackItem key={i.id} track={i} />
              ))}
          </ResultGrid>
        </div>
        <div>
          <h3>Albums</h3>
          <ResultGrid>
            {this.state.favorites.albums &&
              this.state.favorites.albums.length > 0 &&
              this.state.favorites.albums.map(i => (
                <AlbumItem key={i.id} album={i} history={this.props.history} />
              ))}
          </ResultGrid>
        </div>
        <div>
          <h3>Artists</h3>
          <ResultGrid>
            {this.state.favorites.artists &&
              this.state.favorites.artists.length > 0 &&
              this.state.favorites.artists.map(i => (
                <ArtistItem
                  key={i.id}
                  artist={i}
                  history={this.props.history}
                />
              ))}
          </ResultGrid>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ readFavorites }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Favorite);
