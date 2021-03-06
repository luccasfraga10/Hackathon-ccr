/* eslint-disable */
import './index.css'
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { classnames } from './helpers';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      errorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
    };
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });



    const info = localStorage.getItem('info');

    if (info) {
      const a = JSON.parse(info);
      const b = a.map(item => item);
      const array = [b[0], selected]

      localStorage.setItem('info', JSON.stringify(array));
    } else {
      const array = [selected];
      localStorage.setItem('info', JSON.stringify(array))
    }





    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });

        const newArray = [
          ...this.props.valueDistance,
          {
            id: this.props.id,
            latitude: lat,
            longitude: lng,
            isGeocoding: false,
          },
        ];


        this.props.setDistance(newArray);
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });

    const valDistance = this.props.valueDistance.find(item => item.id !== this.props.id);



    const info = localStorage.getItem('info');

    if (info) {
      const info1 = JSON.parse(info);

      if (info1.length === 1) {
        localStorage.removeItem('info');
      }

      if (this.props.id === 1 && info1.length > 1) {
        const newText = info1[1];
        const newInfoArray1 = [newText];
        localStorage.setItem('info', JSON.stringify(newInfoArray1));
      }

      if (this.props.id === 2 && info1.length > 1) {
        const newText2 = info1[0];
        const newInfoArray2 = [newText2];
        localStorage.setItem('info', JSON.stringify(newInfoArray2));
      }
    }

    this.props.setDistance(valDistance ? [valDistance]: []);
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const {
      address,
      errorMessage,
      latitude,
      longitude,
      isGeocoding,
    } = this.state;

    return (
      <>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: this.props.text,
                      className: 'Demo__search-input',
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <button
                      className="Demo__clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
                </div>
                {suggestions.length > 0 && (
                  <div className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames('Demo__suggestion-item', {
                        'Demo__suggestion-item--active': suggestion.active,
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{' '}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && (
          <div className="Demo__error-message">{this.state.errorMessage}</div>
        )}
      </>
    );
  }
}

export default SearchBar;
