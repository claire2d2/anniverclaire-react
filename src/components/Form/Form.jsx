import SectionHeader from "../SectionHeader";
import FormfacadeEmbed from "@formfacade/embed-react";

import { useState } from "react";

const Form = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className={`h-full ${showForm ? "pb-20" : ""}`}>
      <button
        className=" group w-full"
        onClick={() => setShowForm((prev) => !prev)}
      >
        <SectionHeader>Je viens !</SectionHeader>
      </button>
      <div
        className={`${
          showForm ? "" : "hidden"
        } w-full h-full overflow-scroll no-scrollbar`}
      >
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/103275229956812848506/form/1FAIpQLSf6nwuS8acp7Xlowi54GptrMg5esLmWsUobWHxqzlQ8GdeTYw/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </div>
  );
};

export default Form;
