import SectionHeader from "./SectionHeader";

const BdayInfo = () => {
  return (
    <div className="bg-white h-full flex flex-col lg:text-2xl">
      <SectionHeader>Save the Date!</SectionHeader>
      <div className="py-2 flex flex-col items-center ">
        Tu es plus que cordialement invité·e à fêter mon passage dans la
        prochaine décennie le :
        <div className="font-cedarville font-bold text-pink-600 text-3xl lg:text-4xl py-2">
          🌸 18 mai 2024 🌸
        </div>
        <div className="font-cedarville text-xl lg:text-2xl">
          Sur une péniche à <p>Issy-les-Moulineaux</p>
        </div>
      </div>
    </div>
  );
};

export default BdayInfo;
