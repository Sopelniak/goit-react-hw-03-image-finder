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
    page: 1,
    searchValue: '',
    error: '',
    isLoading: false,
    modal: { imgToModal: null, isModalOpen: false },
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      this.fetchImgs();
    }
  }

  fetchImgs = async () => {
    const { searchValue, page } = this.state;

    try {
      this.setState({
        isLoading: true,
        error: '',
      });

      const imgsData = await imgsRequest(searchValue, page);

      if (page === 1) {
        this.setState({
          imgs: imgsData.hits,
        });
      } else {
        this.setState({
          imgs: [...this.state.imgs, ...imgsData.hits],
        });
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
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
      modal: { isModalOpen: true, imgToModal: selectedImg },
    });
  };

  onCloseModal = () => {
    this.setState({ modal: { isModalOpen: false, imgToModal: null } });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { imgs, modal, isLoading } = this.state;
    const isBtnLoadMore = imgs.length > 0;
    return (
      <div className="App">
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imgs={imgs} onClickItem={this.onClickItem} />
        {isBtnLoadMore && <Button onBtnClick={this.onLoadMore} />}
        {modal.isModalOpen && (
          <Modal
            imgToModal={modal.imgToModal}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}

export { App };
