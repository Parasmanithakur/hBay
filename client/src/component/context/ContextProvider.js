import React, { createContext, useState } from "react";

export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");
export const logindata = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");
  const [updata, setUPdata] = useState("");
  const [dltdata, setDLTdata] = useState("");
  const [lgdata, setLGData] = useState("");

  return (
    <adddata.Provider value={{ udata, setUdata }}>
      <updatedata.Provider value={{ updata, setUPdata }}>
        <deldata.Provider value={{ dltdata, setDLTdata }}>
          <logindata.Provider value={{ lgdata, setLGData }}>
            {children}
          </logindata.Provider>
        </deldata.Provider>
      </updatedata.Provider>
    </adddata.Provider>
  );
};

export default ContextProvider;
