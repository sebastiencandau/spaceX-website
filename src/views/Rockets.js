import React, { useState } from 'react';
import Box from '../components/Box'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Rockets() {

  const [rocketsData, setRocketsData] = useState([]);

  const initializeRocketsData = () => {
    axios.get('https://api.spacexdata.com/v4/rockets')
      .then(res => {
        setRocketsData(res.data);
      })
  }

  initializeRocketsData();
  console.log(rocketsData)
  return (
    <body>
      <Header />
      <div className='bodyContainer'>
        <div className='section'>
          <h2>Rocket-List</h2>
          <div className='container-sm'>
            {rocketsData.map((rocket, i) => (
              <Box name={rocket.name}
                desc={rocket.description}
                img={rocket.flickr_images[0]}
                success_rate_pct={rocket.success_rate_pct}
                first_flight={rocket.first_flight}
                country={rocket.country}
                wikipedia={rocket.wikipedia}
                key={i++} active={rocket.active}
              />
            ))};
          </div>
        </div>
      </div>
      <Footer />
    </body>)
}

export default Rockets;
