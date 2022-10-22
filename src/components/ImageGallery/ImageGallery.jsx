import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {/* <!-- Набір <li> із зображеннями --> */}
      </ul>
    );
  }
}

export { ImageGallery };

ImageGallery.propTypes = {
  //   prop: PropTypes,
};
