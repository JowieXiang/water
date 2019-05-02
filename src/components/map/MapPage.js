import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker, Popup } from 'react-map-gl';

import CityPin from './city-pin';
import SearchBar from './SearchBar';
import CityInfo from './city-info';
import { connect } from 'react-redux'
import { addWebsiteList } from '../../store/actions/mapActions'


const TOKEN = 'pk.eyJ1Ijoiemhhbmd5dXhpYW5nMTk5MyIsImEiOiJjaXVwejZ4MDYwMDJvMnltdzV0NjZ6N3RzIn0.o3dBvb9OjCHbbp_aJFgz8g'; // Set your mapbox token here

class MapPage extends Component {


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
            websiteList: [
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

            const data = JSON.parse(localStorage.getItem("data"));
            //清空上一次调用showMarkers时state中存储的websiteList
            this.setState({
                ...this.state,
                websiteList: []
            });
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
                            const newWebsite = {
                                latitude: myJson.latitude,
                                longitude: myJson.longitude,
                                country: myJson.countryName,
                                state: myJson.stateProv,
                                city: myJson.city,
                                ipAddress: myJson.ipAddress,
                                domain: domain,
                                savedTime: new Date()
                            };
                            // console.log(newWebsite);
                            this.setState({
                                ...this.state,
                                websiteList: [...this.state.websiteList, newWebsite]
                            })
                        } else {
                            alert("Can't find corresponding servers of domain:" + domain +
                                "\n ip address:" + ip);
                        }
                    });
            }
        } else {
            alert("Ooops, there's no ip address yet.\nKeep the map tab and open some new tabs in the browser.\nThen try again!~")
        }
    }

    showAndSaveMarkers = () => {
        if (localStorage.getItem("data")) {

            const data = JSON.parse(localStorage.getItem("data"));
            //清空上一次调用showMarkers时state中存储的websiteList
            this.setState({
                ...this.state,
                websiteList: []
            });
            // const ipList = data.map(element => element.ip);//get an array of all the ip address
            // console.log(data);
            // console.log(ipList);
            // 从dbip获得ip地址对应的地理信息
            for (let dt of data) {
                //记录遍历的项目数量
                var counter =0;
                var ip = dt.ip;
                var domain = dt.domain;
                fetch('http://api.db-ip.com/v2/c6298bc05eb5755d421054fc903f1c3069b303fa/' + ip)
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        // console.log(myJson);
                        counter++;
                        var newWebsite = {};
                        if (myJson.latitude && myJson.longitude) {
                            newWebsite = {
                                latitude: myJson.latitude,
                                longitude: myJson.longitude,
                                country: myJson.countryName,
                                state: myJson.stateProv,
                                city: myJson.city,
                                ipAddress: myJson.ipAddress,
                                domain: domain,
                                savedTime: new Date()
                            };
                            // console.log(newWebsite);
                            this.setState({
                                ...this.state,
                                websiteList: [...this.state.websiteList, newWebsite]
                            })
                        } else {
                            alert("Can't find corresponding servers of domain:" + domain +
                                "\n ip address:" + ip);
                        }
                        return this.state.websiteList;
                    })
                    .then((websiteList) => {
                        //如果从dbip获得了数据，则将数据载入firestore中的webList
                        if (counter==data.length) {
                            this.props.dispatch(addWebsiteList(websiteList));
                        }
                    });
            }
        } else {
            alert("Ooops, there's no ip address yet.\nKeep the map tab and open some new tabs in the browser.\nThen try again!~")
        }
        // console.log(this.state.websiteList);
        // {connect}已经自动将dispatch功能传入this.props内，因此可以直接调用
        // this.props.dispatch(addWebsiteList(this.state.websiteList));

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
        const { auth } = this.props;
        const { viewport } = this.state;
        return (

            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN} >

                {this.state.websiteList.map(this._renderCityMarker)}
                {this._renderPopup()}

                <SearchBar />
                <div className='container' >
                    <div className='h1_place_holder'>
                    </div>
                    <div className='row  align-items-center' style={{ height: 60 }}>
                        <div className='col-auto mr-auto'>
                            <button className='btn btn-outline-light' onClick={this.showMarkers}>show</button>
                        </div>
                    </div>
                    <div className='row  align-items-center' style={{ height: 60 }}>
                        <div className='col-auto mr-auto'>
                            {auth.uid ? <button className='btn btn-outline-light' onClick={this.showAndSaveMarkers}>show and save</button> : null}
                        </div>
                    </div>
                </div>
            </MapGL>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
}


export default connect(mapStateToProps)(MapPage)