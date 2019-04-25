import React, { Component } from 'react'
import MapGL from 'react-map-gl';
import SearchBar from './SearchBar'
import Markers from './Markers'

const TOKEN = 'pk.eyJ1Ijoiemhhbmd5dXhpYW5nMTk5MyIsImEiOiJjaXVwejZ4MDYwMDJvMnltdzV0NjZ6N3RzIn0.o3dBvb9OjCHbbp_aJFgz8g';

class MapPage extends Component {




    state = {
        viewport: {
            postion: 'absolute',
            width: '100%',
            height: '100%',
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    }
    render() {
        const { viewport } = this.state;
        return (
            <MapGL
                {...viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapStyle="mapbox://styles/zhangyuxiang1993/ciupz8c1300nj2inodvj7pbra"
                mapboxApiAccessToken={TOKEN}>
                <Markers />
                <SearchBar />
            </MapGL>

        );
    }
}

export default MapPage