import { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

class Searchbar extends Component {
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.props.onSubmit}>
            <input
              className="SearchForm-input"
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className="SearchForm-button" type="submit">
              <span className="SearchForm-button-label">Search</span>
            </button>
          </form>
        </header>
      </>
    );
  }
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
