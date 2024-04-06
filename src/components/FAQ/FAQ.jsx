import SectionHeader from "../SectionHeader";
// Initialization for ES Users
import { Collapse, initTWE } from "../../../node_modules/tw-elements";

const FAQ = () => {
  initTWE({ Collapse });

  const questionStyle =
    "group relative text-slate-500 lg:text-2xl font-bold flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-pink-600 [&:not([data-twe-collapse-collapsed])]:shadow-border-b  ";
  return (
    <div>
      <SectionHeader>
        <p className="text-xs font-montserrat">C bo Jamy mais ...</p>J{"'"}ai
        encore des questions
      </SectionHeader>
      <div id="accordionExample">
        <div className="rounded-t-lg border border-neutral-200 bg-white">
          <h2 className="mb-0" id="headingOne">
            <button
              className={questionStyle}
              type="button"
              data-twe-collapse-init
              data-twe-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Je suis obligé· de me déguiser ?
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="headingOne"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              <strong>Très bonne question !</strong>{" "}
              <p>
                Version courte : oui. Version longue : évidemment que non, mais
                j{"'"}ai fait exprès de choisir un thème très large pour
                accomoder tout le monde.
              </p>
              <p>
                Donc si tu veux aller dans l{"'"}extravagance, sequin eleganza
                tout ça tout ça, c{"'"}est parfait ! Et si jamais tu ne veux
                pas, le film se déroule sur une île grecque farniente, donc
                chemise en lin blanc, marinière, robe d{"'"}été bohème,
                salopette en jean ... tout passe !
              </p>
              <p>
                Si tu es en manque d{"'"}inspi, tu peux te diriger sur ce{" "}
                <a
                  href="https://www.pinterest.fr/claireyuansong/mamma-mia-inspo/"
                  target="_blank"
                  className="text-pink-600 font-semibold hover:text-pink-400"
                >
                  Pinterest Board
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={questionStyle}
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Je dois amener un cadeau ?
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingTwo"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <strong>Non ! Votre présence me suffit largement !</strong> Sauf
              si Mathieu lit ces lignes, auquel cas, une barre de pole pour le
              salon SVP.
            </div>
          </div>
        </div>
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={questionStyle}
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Je peux ramener des gens en plus ?
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingThree"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <strong>Bien sûr ! The more the merrier !</strong>{" "}
              <p>
                Je demanderai juste à ce qu{"'"}ils remplissent le questionnaire
                car j{"'"}aurai besoin d{"'"}une idée précise des personnes qui
                viennent ainsi que leurs restrictions alimentaires. Hors de
                question que des personnes aient faim le jour de mon anniv !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
