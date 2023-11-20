import data from "./data.json";
import { useState } from "react";

export default function MyProjects() {
   
    const [index, setIndex] = useState(0);

    const classList = data;

    

    const handleClick = () => {
       if (index < classList.length -1){
        setIndex(index + 1);
       }else {
        setIndex(0);
       };
    }
 
    return (
       <div>
            <h1>Take a look at some sample classes you can play as!</h1>
            <button onClick={handleClick}>Next Class</button>
            <h2><b>{classList[index].charClass}</b></h2>
            <img src={classList[index].imageUrl} height="400" width="300"></img>
            <p>Primary Stat: {classList[index].primaryStat}</p>
            <p>Description: {classList[index].description}</p>
       </div>
    );
 }