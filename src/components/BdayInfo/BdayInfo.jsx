import SectionHeader from "../SectionHeader";
import PenicheCarousel from "./Carousel";

import penicheSunSet from "../../../public/peniche_sunset.jpeg";
import penicheBouffe from "../../../public/peniche_bouffe.jpeg";
import penicheNightOne from "../../../public/peniche_night1.jpeg";
import penicheNightTwo from "../../../public/peniche_night2.jpeg";

const BdayInfo = () => {
  return (
    <div className="bg-white bg-opacity-80 h-full flex flex-col lg:text-2xl w-full lg:pb-0">
      <SectionHeader>Save the Date!</SectionHeader>
      <div className="py-2 flex flex-col items-center lg:pt-2 lg:pb-0">
        Tu es plus que cordialement invité·e à fêter mon passage dans la
        prochaine décennie le :
        <div className="font-cedarville font-bold text-pink-600 text-3xl lg:text-4xl py-2">
          🌸 18 mai 2024 🌸
        </div>
        <div className="font-cedarville text-xl lg:text-2xl">
          Sur une péniche à <p>Issy-les-Moulineaux</p>
        </div>
        <div className="w-full h-96 lg:w-1/6  px-5 m-2 lg:hidden">
          <PenicheCarousel />
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:h-1/2 lg:gap-4 lg:px-4 lg:scale-75">
        <div className="h-full">
          <img src={penicheSunSet} alt="..." className="object-cover" />
        </div>
        <div className="h-full">
          <img src={penicheBouffe} alt="..." />
        </div>
        <div className="h-full">
          <img src={penicheNightOne} alt="..." />
        </div>
        <div>
          <img src={penicheNightTwo} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default BdayInfo;
