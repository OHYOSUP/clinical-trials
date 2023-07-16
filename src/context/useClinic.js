import { createContext, useState } from "react";

export const ClinicContext = createContext(null);

export const ClinicProvider = ({ children }) => {
  const [clinic, setClinic] = useState([]);

  const contextValue = { clinic, setClinic };

  return (
    <ClinicContext.Provider value={contextValue}>
      {children}
    </ClinicContext.Provider>
  );
};
