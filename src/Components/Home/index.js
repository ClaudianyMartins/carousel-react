import React, { Component } from "react";
//import Caroussel from "../Carousel/caroussel";
import Header from "../Header";
import "./home.css";

import cerva from "../../assets/imagens/cerva.jpg";
import cerveja from "../../assets/imagens/cerveja.jpg";

import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="div-carousel">
          <Carousel
            arrows
            plugins={[
              "centered",
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]}
            animationSpeed={1000}
          >
            <img src={cerva} alt="cerva" />
            <img src={cerveja} alt="cerveja" />
          </Carousel>
        </div>
      </div>
    );
  }
}
