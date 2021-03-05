import React from 'react'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./slider-animation.css";
import "./styles.css";

const sliderContent = [
  {
    title: "New Collection",
    description:
      "New summer collection is here",
    button: "Shop now",
    image: "https://source.unsplash.com/1600x900/?fashion,t-shirts",


  },
  {
    title: "Discover new trends",
    description:
      "Discover what people are rocking in the streets of New York",
    button: "Discover",
    image: "https://source.unsplash.com/1600x900/?fashion,sleeve",

  },
  {
    title: "Save 50% on everything",
    description:
      "From Nov 17 - 28 Dec, 2021  - Time is limited Order now to avoid disappointment",
    button: "Buy now",
    image: "https://source.unsplash.com/1600x900/?fashion",

  }
]

function ImageSlider() {

  return (
    <div>
      <Slider className="slider-wrapper" autoplay={3000}>
        {sliderContent.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}


          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
