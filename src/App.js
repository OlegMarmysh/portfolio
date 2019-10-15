import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Slogan from "./Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
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
