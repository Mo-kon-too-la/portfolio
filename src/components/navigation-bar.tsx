import React, { PropsWithChildren } from "react";
import { ModeToggle } from "./theme-toggle";

const NavigationBar = ({ children }: PropsWithChildren) => {
  return (
    <nav className="py-2 mb-12 flex justify-between items-center">
      <h1 className="text-lg font-bold">Karabo Mashiane</h1>
      <ModeToggle />
    </nav>
  );
};

export default NavigationBar;
