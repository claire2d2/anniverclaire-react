import { useState } from "react";
import "./App.css";

// import des components de la page
import NavBar from "./components/NavBar";
import BdayInfo from "./components/BdayInfo";
import Deroule from "./components/Deroule";
import Form from "./components/Form/Form";
import FAQ from "./components/FAQ/FAQ";

import backgroundImage from "../public/background.webp";

function App() {
  return (
    <>
      <div className="App w-screen font-montserrat flex flex-col overflow-scroll no-scrollbar">
        <section className="relative h-2/5">
          <img src={backgroundImage} className="object-cover h-full w-full" />
          <h1 className="absolute h-10 font-limelight top-40 text-4xl lg:text-6xl font-normal w-full leading-normal mt-0 mb-2 text-pink-600">
            Anniverglaire !
          </h1>
        </section>
        <section className="Bday-info h-1/3">
          <BdayInfo />
        </section>
        <section className="h-full">
          <Deroule />
        </section>

        <section className="h-2/5 bg-white">
          <Form />
        </section>

        <section className="h-2/5">
          <FAQ />
        </section>

        <footer className="text-sm text-pink-600">
          Développé à l'arrache mais avec amour par votre chère et tendre Glaire
          ❤️
        </footer>
      </div>
    </>
  );
}

export default App;
