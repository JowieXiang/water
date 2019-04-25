import React from 'react'
import { Marker } from 'react-map-gl';
import CityPin from './city-pin';

const Markers = () => {

    let markers = [];
    //为什么此处用 = () => 不行？？？
    function showMarkers(e) {
        const data = JSON.parse(localStorage.getItem("data"));
        const ipList = data.map(element => element.ip);//get an array of all the ip address
        // console.log(data);
        // console.log(ipList);
        // 从dbip获得ip地址对应的地理信息
        for (let ip of ipList) {
            fetch('http://api.db-ip.com/v2/c6298bc05eb5755d421054fc903f1c3069b303fa/' + ip)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    markers.push(
                        <Marker latitude={myJson.latitude} longitude={myJson.longitude}><div>You are here</div></Marker>
                    )
                    console.log(markers);
                });
        }
    }

    return (
        <div className='container' >
            <div className='row  align-items-center' style={{ height: 200 }}>
                <div className='col-auto mr-auto'>
                    <Marker
                        longitude={-73.5673}
                        latitude={45.5017} >
                        <CityPin size={20} />
                    </Marker>
                    {markers && markers.map(marker => { return marker; })}
                    <button className='btn btn-outline-info' onClick={showMarkers} >Map</button>
                </div>
            </div>
        </div>
    )
}

export default Markers