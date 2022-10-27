import PropTypes from 'prop-types';
import { Component } from 'react';
import './Modal.scss';

export class Modal extends Component {
  componentDidMount() {
    const modal = document.querySelector('.Overlay');
    modal.addEventListener('click', this.props.onClickModal);
  }

  componentWillUnmount() {
    const modal = document.querySelector('.Overlay');
    modal.removeEventListener('click', this.props.onClickModal);
  }
  render() {
    const { imgToModal } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={imgToModal.largeImageURL} alt={imgToModal.id} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgToModal: PropTypes.object.isRequired,
  onClickModal: PropTypes.func.isRequired,
};
