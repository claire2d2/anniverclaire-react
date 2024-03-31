import React from "react";

const NavBar = () => {
  const liStyle = "py-2 px-3 text-2xl text-white rounded md:bg-transparent";
  return (
    <nav className="bg-orange-300 w-full z-20 top-0 start-0 border-b">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4"></div>
    </nav>
  );
};

export default NavBar;
