import "./App.css";
import { useState } from "react";
import NavElement from "./Components/NavElement/NavElement";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import Services from "./Components/Pages/Services";
import TrainingConsult from "./Components/Pages/TrainingConsult";
import Portfolio from "./Components/Pages/Portfolio";
import Carrers from "./Components/Pages/Carrers";
import ContactPage from "./Components/Pages/ContactPage";
import ContactThrough from "./Components/Pages/ContactThrough";
function App() {
  return (
    <div className="App">
      <NavElement />
      <HomePage />
      <AboutPage />
      <Services />
      <TrainingConsult />
      <Portfolio />
      <Carrers />
      <ContactPage />
      <ContactThrough />
    </div>
  );
}

export default App;
