import SectionHeader from "../SectionHeader";
import AccordionElem from "./AccordionElem";
// Initialization for ES Users
// import { Collapse, initTWE } from "../../../node_modules/tw-elements";

const FAQSection = () => {
  return (
    <div className="flex flex-col h-full">
      <SectionHeader>
        <p className="text-xs font-montserrat">C bo Jamy mais ...</p>J{"'"}ai
        encore des questions
      </SectionHeader>
      <div className="flex flex-col w-full">
        <AccordionElem />
      </div>
    </div>
  );
};

export default FAQSection;
