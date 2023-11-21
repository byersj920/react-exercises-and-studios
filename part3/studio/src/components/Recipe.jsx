import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://tastesbetterfromscratch.com/about/";
   let authorPhoto = "https://secure.gravatar.com/avatar/dc0dc9ed2f606a1bde316b7fff89c9a8?s=320&d=mm&r=g";
   let authorName = "Lauren Allen";

   return (
      <div>
         <img src={authorPhoto} alt = "Lauren Allen" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}Turkey</li>
            <li>{ingredients[1]}Onion</li>
            <li>{ingredients[2]}Apple Dog</li>
            <li>{ingredients[3]}Butter</li>
            <li>{ingredients[4]}Herbs and Spices</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://tastesbetterfromscratch.com/wp-content/uploads/2017/07/Easy-No-Fuss-Thanksgiving-Turkey-14-500x500.jpg" alt="Yummy Turkey" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
