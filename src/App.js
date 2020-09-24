import React from "react";
import "./styles.css";
import Routes from "./router";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  );
}
