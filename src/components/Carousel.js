import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css"

const Carousel = () => {

    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
    }

    const images = [
        "https://cdn.stocksnap.io/img-thumbs/960w/beach-sunset_QDGNZDRHZK.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/flowers-meadow_WJEFRD6MYW.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/sea-sky_IXHJ4316GH.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/yellow-summer_SAE4PBQUSV.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/white-ibis_Q6A4HCTY9W.jpg"


    ];

    return (

        <div className="carousel-container">

            <Slider {...settings}>
                {images.map((image, index) => (

                    <div key={index}>
                        <img src={image} alt={`Slide${index}`} />

                    </div>
                ))}


            </Slider>

        </div>


    );


}

export default Carousel;