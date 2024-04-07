import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const customTheme = {
  base: "bg-transparent",
  button: "bg-transparent  hover:bg-transparent",
};

const panel = {
  base: "bg-transparent",
};
const title = {
  base: "text-pink-600 w-full font-bold flex justify-between h-10 items-center px-3",
  flush: {
    off: "hover:bg-pink-500 focus:ring-4 focus:ring-pink-600 focus:text-white hover:text-white",
    on: "bg-transparent text-white ",
  },
  open: {
    off: "",
    on: "bg-pink-600 text-white",
  },
};

const content = {
  base: "bg-transparent text-left px-3",
};

const AccordionElem = () => {
  return (
    <Accordion theme={customTheme}>
      <AccordionPanel theme={panel}>
        <AccordionTitle theme={title}>
          Je suis obligé-e de me déguiser ?
        </AccordionTitle>
        <AccordionContent theme={content}>
          <div className="py-2 px-1">
            <div className="font-semibold">
              Très bonne question ! Version courte : oui.
            </div>{" "}
            Version longue : évidemment que non, mais j{"'"}ai fait exprès de
            choisir un thème très large pour accomoder tout le monde.{" "}
            <div>
              Donc si tu veux aller dans l{"'"}
              extravagance, sequin eleganza tout ça tout ça, c{"'"}est parfait !
              Et si jamais tu ne veux pas, le film se déroule sur une île
              grecque farniente, donc chemise en lin blanc, marinière, robe d
              {"'"}été bohème, salopette en jean ... tout passe !
            </div>{" "}
            Si tu es en manque d{"'"}
            inspi, tu peux te diriger sur ce{" "}
            <a
              href="https://www.pinterest.fr/claireyuansong/mamma-mia-inspo/"
              target="_blank"
              className="text-pink-600 font-semibold hover:text-pink-500"
            >
              {" "}
              Pinterest Board
            </a>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel theme={panel}>
        <AccordionTitle theme={title}>
          Je dois ramener un cadeau ?
        </AccordionTitle>
        <AccordionContent AccordionContent theme={content}>
          <div className="py-2 px-1">
            <p className="mb-2 font-semibold">
              Non ! Votre présence me suffit !
            </p>
            <p className="">
              Sauf si c{"'"}est Mathieu qui lit ces lignes. Auquel cas, une
              barre de pole dans le salon STP.
            </p>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel theme={panel}>
        <AccordionTitle theme={title}>
          Je peux ramener des gens en plus ?
        </AccordionTitle>
        <AccordionContent theme={content}>
          <div className="py-2 px-1">
            <p className="mb-2 font-semibold">
              Bien sûr ! The more the merrier !
            </p>
            <p className="mb-2 ">
              Je demanderai juste à ce qu{"'"}iels remplissent le formulaire
              également. En effet, la nourriture sera fournie, j{"'"}aurai donc
              besoin de savoir pour combien de personnes prévoir et s{"'"}il y a
              des restrictions alimentaires. Hors de question que quelqu{"'"}un
              ait faim le jour de mon anniv !
            </p>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel theme={panel}>
        <AccordionTitle theme={title}>
          Et qu{"'"}est-ce que je dois ramener ?
        </AccordionTitle>
        <AccordionContent theme={content}>
          <div className="py-2 px-1">
            <p className="mb-2 font-semibold">
              Ce qui te plait en terme de boisson et d{"'"}apéros.
            </p>
            <p className="mb-2 ">
              Je créerai une conv whatsapp avant le jour J histoire de donner
              les dernières infos ainsi que de coordonner qui ramène quoi.
            </p>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default AccordionElem;
