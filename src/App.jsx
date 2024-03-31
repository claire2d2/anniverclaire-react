import { useState } from "react";
import "./App.css";

// import des components de la page
import NavBar from "./components/NavBar";
import Form from "./components/Form/Form";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <section
          className="h-2/5 bg-local"
          style={{ backgroundImage: `url("../public/background.webp")` }}
        >
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-600">
            ANNIVERCLAIIIIRE !!!
          </h1>
        </section>
        <section className="h-1/5 bg-rose-100">Déroulé</section>

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
