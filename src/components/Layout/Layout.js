import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location.pathname} />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
