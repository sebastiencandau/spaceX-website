import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import '../App.css'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [

  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -80.544444] },
];

let lauchpadsSelected = false;
let landpadsSelected = false;
let filterSelected = false;

let rocket = '';

const Map = (props) => {

  const [launchpadsList, setLaunchpadsList] = useState([]);
  const landpadsMakers = [];
  props.landpads.forEach(landpad => {
    landpadsMakers.push({ markerOffset: -10, i: 0, desc: landpad.status, id: landpad.id, name: landpad.name, coordinates: [landpad.latitude, landpad.longitude] })
  });

  const launchpadsMaker = [];
  props.launchpads.forEach(launchpad => {
    launchpadsMaker.push({ markerOffset: -10, i: 0, desc: launchpad.status, id: launchpad.id, name: launchpad.name, coordinates: [launchpad.latitude, launchpad.longitude] })
  });

  const rockets = [];
  props.rockets.forEach(rocket => {
    rockets.push({ name: rocket.name, id: rocket.id, launchpads: [] })
  });

  const rocketsOfAllLaunches = [];
  props.launches.forEach(launch => {
    rocketsOfAllLaunches.push({ rocket: launch.rocket, launchpad: launch.launchpad })
  });


  const handleChangeLauchPad = () => {
    if (lauchpadsSelected === false) {
      lauchpadsSelected = true;

    } else {
      lauchpadsSelected = false;
    }
  }

  const handleChangeLandpad = () => {
    if (landpadsSelected === false) {
      landpadsSelected = true;

    } else {
      landpadsSelected = false;
    }
  }

  const chooseRocket = (e) => {
    setLaunchpadsList([]);
    console.log(e.target.value);
    let rocket;
    rockets.forEach((rocketF) => {
      if (rocketF.id == e.target.value) {
        rocket = rocketF;
      }
    })
    launchpadsOf(rocket);
  }

  const launchpadsOf = (rocket) => {
    console.log(launchpadsList);
    var launchpads = []
    rocketsOfAllLaunches.forEach(rocketL => {
      if (rocketL.rocket == rocket.id) {
        launchpads.push(rocketL.launchpad);
      }
    })
    filter(launchpads)
  }

  const filter = (launchpadsIds) => {
    var launchpads = []
    launchpadsMaker.forEach(launchpadM => {
      launchpadsIds.forEach(launchpadId => {
        if(launchpadM.id == launchpadId){
          launchpads.push(launchpadM);
        }
      })
    })
    setLaunchpadsList(launchpads);
    filterSelected = true;
  }


  return (
    <div className="map-global-container">
      <div className="map-informations-container">
        <div><select onChange={chooseRocket} class="form-select" aria-label="Default select example">
          <option selected>Choose rocket</option>
          {rockets.map((rocket) => <option value={rocket.id}>
            {rocket.name}
          </option>)}
        </select></div>
        <div className="map-info-container-right">
          <h4>Launchpads : </h4>
          <div className="lauchpads-body"></div>
          <div class="form-check form-switch">
            <input onChange={handleChangeLauchPad} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <h4>Landpads : </h4>
          <div className="landpads-body"></div>
          <div class="form-check form-switch">
            <input onChange={handleChangeLandpad} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <div className="map-container">
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [0, 50, -5],
                scale: 0
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies
                    .map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                      />
                    ))
                }
              </Geographies>
              {landpadsSelected === true && (
                landpadsMakers.map(({id, name, coordinates, markerOffset }) => (
                  <Marker coordinates={coordinates}>
                    <circle r={5} fill="#F00" />
                  </Marker>
                ))
              )}
              {lauchpadsSelected === true && (launchpadsMaker.map(({id, name, coordinates, markerOffset }) => (
                <Marker coordinates={coordinates}>
                  <circle r={5} fill="#5a8a00" />
                </Marker>
              )))}
              {filterSelected === true && (launchpadsList.map(({ name, coordinates, markerOffset }) => (
                <Marker coordinates={coordinates}>
                  <circle r={5} fill="blue" />
                </Marker>
              )))}
            </ComposableMap>
          </div>
        </div>
        <div className="map-informations-container-left">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Entity</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {landpadsMakers.map((landpad) => (
                <tr>
                  <td>{landpad.name}</td>
                  <td>
                    {landpad.desc}
                  </td>
                </tr>

              ))}
            </tbody>
            <thead class="thead-light">
            </thead>
            <tbody>
              {launchpadsMaker.map((launchpad) => (
                <tr>
                  <td>{launchpad.name}</td>
                  <td>
                    {launchpad.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Map;