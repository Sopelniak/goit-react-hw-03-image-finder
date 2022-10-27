import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={id}
          id={id}
        />
      </li>
    );
  }
}

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
