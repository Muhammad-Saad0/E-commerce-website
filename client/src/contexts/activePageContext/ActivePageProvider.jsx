import { activePageContext } from "./activePageContext";
import { useState } from "react";

export default function ActivePageProvider({
  children,
}) {
  const [activePage, setActivePage] =
    useState("LOGIN");
  return (
    <activePageContext.Provider
      value={{ activePage, setActivePage }}
    >
      {children}
    </activePageContext.Provider>
  );
}
