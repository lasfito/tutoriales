import React, { useState, useMemo, createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [usuario, setUsuario] = useState(null);
  const value = useMemo(() => ({ usuario, setUsuario }), [usuario]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsercontext must be used within a UserContextProvider");
  }
  return context;
}
