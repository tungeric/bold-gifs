import React, { Component } from 'react';
import Gif from './Gif.js';
import { sendGetRequest, shuffle } from './Util.js';
import './App.css';

class App extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.getGifs();
  }

  getGifs = () => {
    const { gifs } = this.state;
    if (gifs === undefined || gifs.length < 1) {
      sendGetRequest('/api/gifs')
        .then(res => this.setState({ gifs: shuffle(res) }))
        .catch(err => console.log(err));;
    } else {
      this.setState({ gifs: shuffle(gifs) });
    }
  }

  render() {
    const { gifs } = this.state;
    return (
      <div className="App">
        <div className="grid">
          {gifs.map((file, idx) => <Gif key={idx} file={file} />)}
        </div>
        <button onClick={this.getGifs}>Click me</button>
      </div>
    );
  }
}
export default App;