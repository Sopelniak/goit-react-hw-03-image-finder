import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src="" alt="" />
      </li>
    );
  }
}

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
  //   prop: PropTypes,
};
