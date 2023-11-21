import { useState } from 'react';

export default function StatusChange () {

   const [notes, noteChange] = useState("");
   const [recipeStatus, statusChange] = useState(false);



   const handleChange = (event) => {
      noteChange(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      statusChange(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes}</p>

         <p>{recipeStatus ? "Notes Saved!" : ""}</p>
      </div>
   );
}
