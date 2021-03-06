import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultaSearch from './pages/ResultSearch/ResultSearch';
import Layout from './components/Layout/Layout';
import Favorite from './pages/Favorite/Favorite';
import AlbumDetail from './pages/AlbumDetail/AlbumDetail';
import ArtistDetail from './pages/ArtistDetail/ArtistDetail';

export default function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Layout>
          <Route path="/results" component={ResultaSearch} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/album/:id" component={AlbumDetail} />
          <Route path="/artist/:id" component={ArtistDetail} />
        </Layout>
      </Switch>
    </Router>
  );
}
