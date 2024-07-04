import React from "react";
import Carousel from "./components/Carousel";
import './App.css';
import Resizable from "./components/Resizable";


function App() {

  return (

    <div className="App">
      <header className="App-header">

        <h1>Carrusel de imagenes en React</h1>

      </header>
      <main>

        <Resizable />
      </main>
    </div>

  );

};

export default App;