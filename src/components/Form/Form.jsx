import FormfacadeEmbed from "@formfacade/embed-react";

const Form = () => {
  return (
    <div className="w-full h-full overflow-scroll no-scrollbar">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/103275229956812848506/form/1FAIpQLSf6nwuS8acp7Xlowi54GptrMg5esLmWsUobWHxqzlQ8GdeTYw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default Form;
