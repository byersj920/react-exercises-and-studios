import './styles.css';

function Button() {

function onLearnMore(){
   window.alert("Fun fact: You're actually more likely to get bitten by a pig than a shark. Go swimming today!");
}
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}



export default Button;