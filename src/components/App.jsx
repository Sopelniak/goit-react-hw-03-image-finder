import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}

export { App };
