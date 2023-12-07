import Compo3 from "./Compo3";
import { useContext } from "react";
import { MyContext } from "./NoPage";

function Compo2() {
    const {name} =useContext(MyContext);
    return (
      <>
        <h1>Component 2{name}</h1>
        <Compo3 />
      </>
    );
  }
  export default Compo2;