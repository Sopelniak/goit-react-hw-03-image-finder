import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { imgsRequest } from 'services/api';
import '../index.css';

class App extends Component {
  state = {
    imgs: [],
    isLoading: false,
    error: '',
    page: 1,
  };

  fetchImgs = async () => {
    try {
      // Встановлюємо індикатор завантаження та обнуляємо помилку, якщо була
      this.setState({ isLoading: true, error: '' });

      const imgsData = await imgsRequest();

      this.setState({ imgs: imgsData.hits });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchImgs();
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery imgs={this.state.imgs} />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}

export { App };
