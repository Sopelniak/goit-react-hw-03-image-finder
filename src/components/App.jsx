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

  onSubmit = e => {
    const { page } = this.state;
    const { value } = e.target.elements.search;
    e.preventDefault();
    this.fetchImgs(value, page);
  };

  fetchImgs = async (searchValue = 'cat', page) => {
    try {
      // Встановлюємо індикатор завантаження та обнуляємо помилку, якщо була
      this.setState({ isLoading: true, error: '' });

      const imgsData = await imgsRequest(searchValue, page);

      this.setState({ imgs: imgsData.hits });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidMount() {
    this.fetchImgs();
  }

  componentDidUpdate(prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchImgs();
    }
  }

  render() {
    const { imgs, isLoading } = this.state;
    return (
      <div className="App">
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imgs={imgs} />
        <Button onBtnClick={this.nextPage} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export { App };
