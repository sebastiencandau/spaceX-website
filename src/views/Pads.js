import React, { useState } from 'react';
import Box from '../components/Box'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import axios from 'axios';
import Header from '../components/Header';
import Map from '../components/Map';
import Footer from '../components/Footer';

function Pads() {

    const [landpadsData, setLandpadsData] = useState([]);
    const [launchpadsData, setLaunchpadsData] = useState([]);
    const [rocketsData, setRocketsData] = useState([]);
    const [lauchesData, setLauchesData] = useState([]);

    const initializeLauchesData = () => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(res => {
                setLauchesData(res.data);
            })
    }

    const initializeRocketsData = () => {
        axios.get('https://api.spacexdata.com/v4/rockets')
            .then(res => {
                setRocketsData(res.data);
            })
    }

    const initializeLaunchpadsData = () => {
        axios.get('https://api.spacexdata.com/v4/launchpads')
            .then(res => {
                setLaunchpadsData(res.data);
            })
    }

    const initializeLandPadsData = () => {
        axios.get('https://api.spacexdata.com/v4/landpads')
            .then(res => {
                setLandpadsData(res.data);
            })
    }

    initializeRocketsData();
    initializeLaunchpadsData();
    initializeLandPadsData();
    initializeLauchesData();

    return (
        <body>
            <Header />
            <Map landpads={landpadsData} launchpads={launchpadsData} rockets={rocketsData} launches={lauchesData}/>
            <Footer />
        </body>)
}

export default Pads;
