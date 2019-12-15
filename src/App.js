import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Slogan from "./Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from 'react-particles-js';

function App() {
    const particlesOpt = {
        "particles": {
            "number": {
                "value": 130,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#120009"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "line_linked": {
                "enable": true,
                "color": "#4c4c4c",
                "opacity": 0.3,
                "width": 2
            },
        }
    };
  return (
    <div className="App">
        <Particles className = 'particles' params={particlesOpt}/>
        <Header />
        <Main />
        <Skills />
        <MyWorks />
        <Slogan />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
