import PropTypes from 'prop-types';
import { Component } from 'react';
import './Modal.scss';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
    return;
  };

  onClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imgToModal } = this.props;
    return (
      <div className="Overlay" onClick={this.onClick}>
        <div className="Modal">
          <img src={imgToModal.largeImageURL} alt={imgToModal.id} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgToModal: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
