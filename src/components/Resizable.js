import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";
import  { useState } from "react";


function Resizable() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };



    const images = [
        "https://cdn.stocksnap.io/img-thumbs/960w/beach-sunset_QDGNZDRHZK.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/flowers-meadow_WJEFRD6MYW.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/sea-sky_IXHJ4316GH.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/yellow-summer_SAE4PBQUSV.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/white-ibis_Q6A4HCTY9W.jpg"


    ];



    return (
      <div className="slider-container">
        <h2> Resizable Collapsible </h2>
        <button className="button" onClick={() => setWidth(width + 100)}>
          {" "}
          increase{" "}
        </button>
        <button className="button" onClick={() => setWidth(width - 100)}>
          {" "}
          decrease{" "}
        </button>
        <button className="button" onClick={() => setDisplay(!display)}>
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            width: width + "px",
            display: display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            <div>
              <h3><img src="https://cdn.stocksnap.io/img-thumbs/960w/beach-sunset_QDGNZDRHZK.jpg"/></h3>
            </div>
            <div>
              <h3><img src="https://cdn.stocksnap.io/img-thumbs/960w/flowers-meadow_WJEFRD6MYW.jpg"/></h3>
            </div>
            <div>
              <h3><img src="https://cdn.stocksnap.io/img-thumbs/960w/sea-sky_IXHJ4316GH.jpg"/></h3>
            </div>
            <div>
              <h3><img src="hhttps://cdn.stocksnap.io/img-thumbs/960w/yellow-summer_SAE4PBQUSV.jpg"/></h3>
            </div>
            <div>
              <h3><img src="https://cdn.stocksnap.io/img-thumbs/960w/white-ibis_Q6A4HCTY9W.jpg"/></h3>
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
  
  export default Resizable;