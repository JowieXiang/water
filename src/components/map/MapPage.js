import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker, Popup } from 'react-map-gl';

import CityPin from './city-pin';
import SearchBar from './SearchBar';

// import CityInfo from './city-info';

// import CITIES from '../../data/cities.json';

const TOKEN = 'pk.eyJ1Ijoiemhhbmd5dXhpYW5nMTk5MyIsImEiOiJjaXVwejZ4MDYwMDJvMnltdzV0NjZ6N3RzIn0.o3dBvb9OjCHbbp_aJFgz8g'; // Set your mapbox token here

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
                bearing: 0,
                pitch: 0
            },
            popupInfo: null
        };
    }

    _updateViewport = (viewport) => {
        this.setState({ viewport });
    }

    // _renderCityMarker = (city, index) => {
    //   return (
    //     <Marker
    //       key={`marker-${index}`}
    //       longitude={city.longitude}
    //       latitude={city.latitude} >
    //       <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
    //     </Marker>
    //   );
    // }

    // _renderPopup() {
    //   const {popupInfo} = this.state;

    //   return popupInfo && (
    //     <Popup tipSize={5}
    //       anchor="top"
    //       longitude={popupInfo.longitude}
    //       latitude={popupInfo.latitude}
    //       closeOnClick={false}
    //       onClose={() => this.setState({popupInfo: null})} >
    //       <CityInfo info={popupInfo} />
    //     </Popup>
    //   );
    // }

    render() {
        const { viewport } = this.state;
        return (

            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN} >
                <Marker
                    longitude={-73.5673}
                    latitude={45.5017} >
                    <CityPin size={20} />
                </Marker>
                {/* {CITIES.map(this._renderCityMarker)} */}
                {/* {this._renderPopup()} */}
                <SearchBar />
                <div className='container' >
                    <div className='row  align-items-center' style={{ height: 200 }}>
                        <div className='col-auto mr-auto'>
                            <button className='btn btn-outline-info'>Map</button>
                        </div>
                    </div>
                </div>
            </MapGL>

        );
    }

}

export function renderToDom(container) {
    render(<App />, container);
}
