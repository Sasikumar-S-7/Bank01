import React, { useState, createContext } from "react";
import GetName from "./GetName";
import Compo2 from "./Compo2";

export const MyContext = createContext(null);

const Page = () => {
  const [name, setName] = useState("");
  return (
    <>
      <MyContext.Provider value={{ name, setName }}>
        <GetName />
        
        <Compo2/>
      </MyContext.Provider>
    </>
  );
};

export default Page;
