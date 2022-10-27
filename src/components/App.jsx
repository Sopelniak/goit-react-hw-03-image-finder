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
    searchValue: '',
    imgs: [],
    imgToModal: '',
    isModalOpen: false,
    isLoading: false,
    error: '',
    page: 1,
  };

  onSubmit = e => {
    const { value } = e.target.elements.search;
    e.preventDefault();
    this.setState({ searchValue: value, page: 1 });
  };

  onClickItem = e => {
    if (e.target.id === 'ImageGallery') {
      return;
    }
    const selectedImg = this.state.imgs.find(
      img => img.id === Number(e.target.id)
    );
    this.setState({
      isModalOpen: true,
      imgToModal: selectedImg,
    });
  };

  onClickModal = () => {
    this.setState({ isModalOpen: false });
  };

  fetchImgs = async () => {
    const { searchValue, page } = this.state;

    try {
      this.setState({
        isLoading: true,
        error: '',
      });

      const imgsData = await imgsRequest(searchValue, page);

      this.setState({
        imgs: imgsData.hits,
      });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchImgsNextPage = async () => {
    const { searchValue, page } = this.state;

    try {
      this.setState({
        isLoading: true,
        error: '',
      });

      const imgsData = await imgsRequest(searchValue, page);

      this.setState({
        imgs: [...this.state.imgs, ...imgsData.hits],
      });
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.fetchImgs();
    }
    if (
      prevState.searchValue === this.state.searchValue &&
      prevState.page !== this.state.page
    ) {
      this.fetchImgsNextPage();
    }
  }

  render() {
    const { searchValue, imgs, imgToModal, isModalOpen, isLoading } =
      this.state;
    return (
      <div className="App">
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imgs={imgs} onClickItem={this.onClickItem} />
        {searchValue !== '' && <Button onBtnClick={this.nextPage} />}
        {isModalOpen && (
          <Modal imgToModal={imgToModal} onClickModal={this.onClickModal} />
        )}
      </div>
    );
  }
}

export { App };
