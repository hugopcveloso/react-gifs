import React, { Component } from 'react';
import giphy from 'giphy-api';
import { GiphyFetch } from '@giphy/js-fetch-api'

import SearchBar from './search_bar';
import GifList from './gif-list';
import Gif from './gif';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null,
    };
  }


  search = (query) => {
    giphy('Hlvvt7BFlfYj3jIDLvedMPpbtxnY9BZ1').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  clickedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifs}
            clickedGif={this.clickedGif}
          />
        </div>
      </div>
    );
  }
}


export default App;
