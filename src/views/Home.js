import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <body>
      <Header />
      <div className='welcome'>
        <h1>Welcome to SpaceX Dashboard</h1>
        <h4>browse the website to discover all the features :)</h4>
      </div>
      <div className='container-md'>
        <div className="card mb-5">
          <img className="card-img-top" src="https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2020.2F05.2F31.2F4244803e-de5c-4f69-902d-d7d64be29d90.2Ejpeg/1200x630/background-color/ffffff/quality/70/decollage-reussi-pour-la-fusee-spacex-elon-musk-remporte-son-pari-1371378.jpg" alt="imgb" />
          <div className="card-body">
            <h5 className="card-title">SpaceX</h5>
            <p className="card-text">SpaceX was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.</p>
            <a href="https://en.wikipedia.org/wiki/SpaceX" className="btn btn-primary">View more details</a>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a href='https://github.com/r-spacex/SpaceX-API'>The API used</a>
            </li>
            <li class="list-group-item">
              <a href='https://github.com/sebastiencandau'>My GitHub</a>
            </li>
            <li class="list-group-item">
              Enjoy :)
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default Home;
