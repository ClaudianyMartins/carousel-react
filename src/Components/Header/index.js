import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import "../Footer/footer.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav className="menu">
          <Link to="/home"> Home </Link>
          <Link to="/cervejas"> Cervejas </Link>
          <Link to="/favoritas"> Favoritas </Link>
          <Link to="/somos"> Quem Somos </Link>
        </nav>
      </div>
    );
  }
}
