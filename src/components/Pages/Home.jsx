import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {

    const [category, setCategory] = useState()
    const [recipes, setRecipes] = useState()
    const [recipeId, setRecipeId] = useState()

    function getRecipes(){
       axios(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`) 
       .then(res=>{
        
        setRecipes(i=>res.data.meals)
        console.log(recipes);

    })

       .catch(err=>console.log(err))

    }

    useEffect(()=>{getRecipes()},[])

    function getRecipeId(id){
        
        setRecipeId(i=>id)
        console.log(recipeId);


    }
    
  return (
    <div className='home flex flex-wrap justify-evenly gap-8'>
    {recipes&&recipes.map(item=>
    <div className="card card-compact w-60 h-80 bg-base-100 shadow-xl">
    <figure><img src={item.strMealThumb} alt="Recipe Image" /></figure>
    <div className="card-body">
      <h2 className="card-title">{item.strMeal}</h2>
      
      <div className="card-actions justify-end">
        <button onClick={()=>getRecipeId(item&&item.idMeal)} className="btn btn-sm btn-primary">View Details</button>
      </div>
    </div>
  </div>
        )}

    

   
    

    </div>
  )
}

export default Home