// import des components de la page
import BdayInfo from "../components/BdayInfo";
import Deroule from "../components/Deroule";
import Form from "../components/Form/Form";
import FAQ from "../components/FAQ/FAQ";

import backgroundImage from "../../public/background.webp";

const LandingPage = () => {
  return (
    <div className="w-screen h-full font-montserrat flex flex-col overflow-scroll no-scrollbar lg:text-xl">
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

      <section className="h-3/5">
        <FAQ />
      </section>

      <footer className="text-xs lg:text-sm text-pink-600 h-3">
        Développé à l{"'"} arrache mais avec amour par votre chère et tendre
        Glaire ❤️
      </footer>
    </div>
  );
};

export default LandingPage;