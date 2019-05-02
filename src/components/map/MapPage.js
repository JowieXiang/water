import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker, Popup } from 'react-map-gl';

import CityPin from './city-pin';
import SearchBar from './SearchBar';
import CityInfo from './city-info';


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
            cityList: [
            ],
            popupInfo: null
        };
        // this.showMarkers = this.showMarkers.bind(this)
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

    _renderCityMarker = (coord) => {
        return (
            <Marker
                longitude={coord.longitude}
                latitude={coord.latitude} >
                <CityPin size={20} onClick={() => this.setState({ popupInfo: coord })} />
            </Marker>
        );
    }

    showMarkers = (e) => {
        if (localStorage.getItem("data")) {
            var markers = [];
            const data = JSON.parse(localStorage.getItem("data"));
            // const ipList = data.map(element => element.ip);//get an array of all the ip address
            // console.log(data);
            // console.log(ipList);
            // 从dbip获得ip地址对应的地理信息
            for (let dt of data) {
                var ip = dt.ip;
                var domain = dt.domain;
                fetch('http://api.db-ip.com/v2/c6298bc05eb5755d421054fc903f1c3069b303fa/' + ip)
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        console.log(myJson);
                        if (myJson.latitude && myJson.longitude) {
                            const newCoord = {
                                latitude: myJson.latitude,
                                longitude: myJson.longitude,
                                country: myJson.countryName,
                                state: myJson.stateProv,
                                city: myJson.city,
                                ipAddress: myJson.ipAddress,
                                domain: domain
                            };
                            // console.log(newCoord);
                            this.setState({
                                ...this.state,
                                cityList: [...this.state.cityList, newCoord]
                            })
                        }
                    });
            }
        }else{
            alert("Ooops, there's no ip address yet.\nKeep the map tab and open some new tabs in the browser.\nThen try again!~")
        }
    }

    _renderPopup() {
        const { popupInfo } = this.state;
        return popupInfo && (
            <Popup tipSize={5}
                anchor="top"
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                closeOnClick={false}
                onClose={() => this.setState({ popupInfo: null })} >
                <CityInfo info={popupInfo} />
            </Popup>
        );
    }

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

                {this.state.cityList.map(this._renderCityMarker)}
                {this._renderPopup()}

                <SearchBar />
                <div className='container' >
                    <div className='row  align-items-center' style={{ height: 200 }}>
                        <div className='col-auto mr-auto'>
                            <button className='btn btn-outline-light' onClick={this.showMarkers}>Map</button>
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
