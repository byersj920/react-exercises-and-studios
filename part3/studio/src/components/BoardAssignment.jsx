import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Thanksgiving",
      value: "Thanksgiving"},
      {label: "Christmas",
      value: "Christmas"},
      {label: "Easter",
      value: "Easter"},
   ];

   const [boardName, setName] = useState("no boards yet");

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) =>{
            return (<option value={board.value}>{board.label}</option>)
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
