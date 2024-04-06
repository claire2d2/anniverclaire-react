import SectionHeader from "./SectionHeader";

const Deroule = () => {
  return (
    <div className="h-full flex flex-col">
      <SectionHeader>Déroulé</SectionHeader>
      <div className="flex flex-col gap-2 px-2 py-2 bg-white">
        <p>
          Déso Juliette Armanet mais ce n'est pas le dernier jour du 🪩
          <span className="font-bold text-lg text-pink-600">DISCO</span>🪩
        </p>
        <img
          src="https://media4.giphy.com/media/2wXrSikk2c8llaunlr/giphy.gif?cid=6c09b952montzmlyeb1ocm947nv1wfsfcdfrpbilic1yb73b&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt=""
        />
        <p>
          Car oui ! Cette soirée est{" "}
          <span className="font-bold text-lg text-pink-600">DEGUISEE !</span>{" "}
          Que ce soit sous l'esprit de Sainte Paillette ou en mode fantaisie île
          grecque, je vous attendrai de pied ferme (et marin) avec votre
          meilleur déguisement Mamma-Mia-esque à partir de{" "}
          <span className="font-bold text-pink-600">18h00</span>
        </p>
      </div>
      <div className=" text-lg my-2 py-2">
        <h3 className="font-limelight text-2xl text-blue-800">
          Au programme :
        </h3>

        <div className="flex justify-between mx-6 py-3">
          <ul className="text-left">
            <li className="hover:text-pink-600">🌸Barbecue</li>
            <li className="hover:text-pink-600">🌸Danse</li>
            <li className="hover:text-pink-600">🌸Paddle</li>
          </ul>
          <ul className="text-left">
            <li className="hover:text-pink-600">🌸Balades en barque</li>
            <li className="hover:text-pink-600">🌸Photobooth</li>
            <li className="hover:text-pink-600">🌸Petchis jeux</li>
          </ul>
        </div>
        <div className="text-sm">
          Et peut-être plus ! Mais ça va dépendre de mon niveau d'énergie ! Si
          vous avez des idées d'actchis, n'hésitez pas ;)
        </div>
      </div>
    </div>
  );
};

export default Deroule;
