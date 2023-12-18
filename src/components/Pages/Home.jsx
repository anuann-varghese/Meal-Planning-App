import axios from "axios";
import Backendless from "backendless";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home({ recipes, setRecipes, recipeId, setRecipeId, mealPlan,category,setCategory }) {
  const navigate = useNavigate();

  // function getRecipes() {
  //   axios(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
  //   // axios(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

    
  //     .then((res) => {
  //       setRecipes((i) => res.data.meals);
  //       console.log(recipes);
  //     })

  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  function getRecipeId(id) {
    setRecipeId((i) => id);
    console.log(recipeId);
    navigate("/selectedrecipe");
  }
  // function chickenSelector(Chicken){
  //   setCategory(Chicken)
  // }
  // function breakfastSelector(Breakfast){
  //   setCategory(Breakfast)
  // }
  // function dessertSelector(Dessert){
  //   setCategory(Dessert)
  // }

  return (
    <div className="home flex  ">
      
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap gap-20 items-center justify-evenly mt-10">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary drawer-button lg:hidden"
          >
            View Your Meal Plan
          </label>
          {/* Page content here */}
          {/* <div>
            <button onClick={()=>chickenSelector(Chicken)}>Chicken</button>
            <button onClick={()=>breakfastSelector(Breakfast)}>Breakfast</button>
            <button onClick={()=>dessertSelector(Dessert)}>Dessert</button>

          </div> */}
          
          {recipes &&
            recipes.map((item, k) => (
              <div key={k} className=" ">
                <div className="card card-compact  w-60 h-80 bg-base-100 shadow-xl">
                  <figure>
                    <img src={item.strMealThumb} alt="Recipe Picture" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.strMeal}</h2>

                    <div className="card-actions justify-end">
                      <button
                        onClick={() => getRecipeId(item.idMeal)}
                        className="btn btn-primary"
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full flex gap-8 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {mealPlan &&
              mealPlan.map((i, j) => (
                <div key={j} className="">
                  <li>
                    <img width={70} src={i.strMealThumb} alt="" />{" "}
                    <p>{i.strMeal}</p>
                  </li>
                </div>
              ))}
            <Link to={"/mealPlan"}>
              {" "}
              <button className="btn btn-primary">Build Plan</button>
            </Link>
          </ul>
        </div>
      </div>

      {/* <div className=' flex flex-col gap-10 justify-center'> 
     <h2>Meal Plan</h2>
    
    
     recipe cards

     {mealPlan&& mealPlan.map((i,j)=>
      <div key={j} >
        <img width={50} src={i.strMealThumb} alt="" />
      </div>)}
      <Link to={"/mealPlan"}><button className="btn btn-primary">Build Plan</button></Link>
    </div> 
    {recipes&&recipes.map((item,k)=>
    <div key={k} className="card card-compact w-60 h-80 bg-base-100 shadow-xl">
    <figure><img src={item.strMealThumb} alt="Recipe Image" /></figure>
    <div className="card-body">
      <h2 className="card-title">{item.strMeal}</h2>
      
      <div className="card-actions justify-end">
        <button onClick={()=>getRecipeId(item.idMeal)} className="btn btn-sm btn-primary">View Details</button>
      </div>
    </div>



  </div>
        )} */}
    </div>
  );
}

export default Home;
