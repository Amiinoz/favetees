import React from 'react'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./slider-animation.css";
import "./styles.css";

const sliderContent = [
  {
    title: "New Collection",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Shop now",
    image: "https://source.unsplash.com/1600x900/?fashion,t-shirts",


  },
  {
    title: "Discover new trends",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://source.unsplash.com/1600x900/?fashion,sleeve",

  },
  {
    title: "Save 50% on everything",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
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
