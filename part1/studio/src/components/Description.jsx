
import styles from './Description.module.css';
import React from 'react';

let RecipeAuthor = function(){
    let authorLink = 'https://www.budgetbytes.com/author/beth/';
    let authorPhoto = 'https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-536x536.jpg';
    let authorName = 'Beth M.';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt="Beth M Photo" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Budget Bytes</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
        return(
    <div> 
        <div>
            <h1>Vegetable Fried Rice</h1>
            <p>If you like veggies...if you like rice...well, have I got a recipe for you.</p>
        </div>
   <RecipeAuthor />
</div>
    )
}
}


export default RecipeDescription;