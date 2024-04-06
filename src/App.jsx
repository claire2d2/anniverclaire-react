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
      <div className="App w-screen">
        <div className="w-full hidden lg:flex">
          <NavBar />
        </div>

        <section className="relative h-2/5 bg-red-500">
          <img src={backgroundImage} className="object-cover h-full" />
          <h1 className="absolute h-10 font-cedarville top-40 text-3xl font-normal w-full leading-normal mt-0 mb-2 text-pink-600">
            anniverglaiiiire
          </h1>
        </section>
        <section className="Bday-info">
          <BdayInfo />
        </section>
        <section className="h-1/5 bg-rose-100"></section>

        <section className="h-2/5 bg-white">
          <Form />
        </section>

        <section className="h-2/5 bg-rose-100">
          <h2>C'est beau Jamy mais... j'ai encore des questions !</h2>
          <FAQ />
        </section>
      </div>
    </>
  );
}

export default App;
