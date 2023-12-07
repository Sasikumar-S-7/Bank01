import { useContext } from "react";
import { MyContext } from "./NoPage";
import New from"./Home";


const SetName=()=>{
    const {name} =useContext(MyContext);
    return (
    <>
    Name:{name}
    <New/>
    </>
    )
}
export default SetName;