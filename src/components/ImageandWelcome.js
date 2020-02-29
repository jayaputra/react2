import React from 'react';
import mainImage from '../assets/images/bg-masthead.jpg';


const ImageandWelcome = () => (
    <>
    <div className="container-fluid">
      <div className="row">
        <img src={mainImage} className="img-fluid"></img>
      </div>
    </div>
    <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>
                <h2 class="text-dark-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start
                Bootstrap.</h2>
                <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a>
            </div>
        </div>
    </header>
    </>
);

export default ImageandWelcome;