import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const[formData, setformData] = useState({
    title: '',
    description : ''
  })

  return <GlobalContext.Provider value={{formData, setformData}}>{children}</GlobalContext.Provider>;
}
