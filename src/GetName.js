import { useContext } from "react";
import { MyContext } from "./NoPage";


const GetName=()=>{
    const{setName}=useContext(MyContext);
    return (
    <>
    <input type="text" placeholder="Enter Name"
    onChange={e => setName(e.target.value)}
    />
    </>
    )
}

export default GetName;