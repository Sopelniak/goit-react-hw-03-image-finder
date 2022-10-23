import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.imgs.map(img => {
          return (
            <ImageGalleryItem
              key={img.id}
              id={img.id}
              webformatURL={img.webformatURL}
              largeImageURL={img.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}

export { ImageGallery };

ImageGallery.propTypes = {
  imgs: PropTypes.array.isRequired,
};
