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
      <div className="App w-screen font-montserrat flex flex-col">
        <div className="w-full hidden lg:flex">
          <NavBar />
        </div>

        <section className="relative h-2/5">
          <img src={backgroundImage} className="object-cover h-full" />
          <h1 className="absolute h-10 font-limelight top-40 text-4xl font-normal w-full leading-normal mt-0 mb-2 text-pink-600">
            Anniverglaire !
          </h1>
        </section>
        <section className="Bday-info h-1/3">
          <BdayInfo />
        </section>
        <section className="h-full">
          <Deroule />
        </section>

        <section className="h-dvh bg-white">
          <Form />
        </section>

        <section className="h-2/5">
          <FAQ />
        </section>
      </div>
    </>
  );
}

export default App;
