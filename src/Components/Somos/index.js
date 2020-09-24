import React, { Component } from "react";
import Header from "../../Components/Header/index";
import "./somos.css";
import Cintia from "../../assets/imagens/imagem.jpeg";
import Thuane from "../../assets/imagens/imagem2.jpeg";

export default class Somos extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <div id="main-development-card">
          <div className="development-card">
            <div className="background-img">
              <img className="img" src={Cintia} alt="Foto-Perfil" />
            </div>
            <h3>Cintia</h3>
            <h6>Development Front-End</h6>
            <section>
              <button className="btn-rede">I</button>
              <button className="btn-rede">G</button>
              <button className="btn-rede">L</button>
            </section>
          </div>
          <div className="development-card">
            <div className="background-img">
              <img className="img" src={Thuane} alt="Foto-Perfil" />
            </div>
            <h3>Thuane</h3>
            <h6>Development Front-End</h6>
            <section>
              <button className="btn-rede">I</button>
              <button className="btn-rede">G</button>
              <button className="btn-rede">L</button>
            </section>
          </div>
        </div>
      </div>
      // <div id="container">
      //   <div>
      //     <Header />
      //     <img src={Cintia} alt="imagem" id="cintia" />
      //     <h2 id="cintia1">Desenvolvedora Front-End</h2>
      //   </div>

      //   <div>
      //     <img src={Thuane} alt="imagem" id="thuane" />
      //     <h2 id="thuane1">Desenvolvedora Front-End</h2>
      //   </div>
      // </div>
    );
  }
}
