import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

let listItem = oceans.map(ocean => 
   <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
      <img src={ocean.image} alt={ocean.name} className="img"></img>
      <h1>{ocean.name}</h1>
      <h2>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
            <Button />
         </ul>
      </h2>
   </div>
   );


function Profile()
{
   return(
      <ul>
         {listItem}
      </ul>
   );
}

export default Profile;