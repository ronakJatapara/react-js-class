import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/singleProduct.css";

function SingleProduct() {
  const { id } = useParams();
  const [state, setState] = useState({});
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const images = [
    state.img,
    state.img1,
    state.img2,
    state.img3,
    state.img4,
    state.img5,
    state.img6,
    state.img7,
    state.img8,
  ].filter((img) => img); // Filter out undefined images

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
  };

  const thumbnailSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    focusOnSelect: true,
    vertical: true, // Enables vertical thumbnails
    verticalSwiping: true, // Enables vertical swipe
    arrows: false, // Hide arrows for better UI
  };

  return (
    <div className="container-fluid mt-4">
    <div className="row">
        <div className="col-6 border position-relative">
        <div className="row d-flex align-items-center">
        <div className="col-md-2">
          {/* 🔹 Vertical Thumbnail Slider */}
          <Slider {...thumbnailSliderSettings} className="thumbnail-slider">
            {images.map((img, index) => (
              <div key={index} className="thumbnail-item">
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="thumbnail-img"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-md-5">
          {/* 🔸 Main Image Slider */}
          <Slider {...mainSliderSettings} className="main-slider">
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Product ${index}`} className="main-img" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
        </div>
        <div className="col6"></div>
    </div>
    </div>
  );
}

export default SingleProduct;
