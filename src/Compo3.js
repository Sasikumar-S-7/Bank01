import Compo4 from "./Compo4";
import { useContext } from "react";
import { MyContext } from "./NoPage";
function Compo3() {
    const {name} =useContext(MyContext);
    return (
      <>
        <h1>Component 3{name}</h1>
        <Compo4 />
      </>
    );
  }
  export default Compo3;