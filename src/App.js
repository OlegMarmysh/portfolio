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
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 1800
                }
            },
            "color": {
                "value": "#120009"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 2,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 170,
                "color": "#ba1630",
                "opacity": 0.3,
                "width": 4
            },
            "move": { //опции движения
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
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
