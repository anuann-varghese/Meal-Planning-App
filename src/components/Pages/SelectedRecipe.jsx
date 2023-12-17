import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SelectedRecipe({
  recipeId,
  selectedRecipe,
  setSelectedRecipe,
  mealPlan,
  setMealPlan,
  ingredient,
  setIngredient,
}) {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  function getRecipeDetails() {
    axios(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => {
        console.log(res.data.meals);
        setSelectedRecipe((i) => res.data.meals);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  function addToPlan() {
    if (mealPlan.find((i) => i.idMeal == selectedRecipe[0].idMeal)) {
      alert("Recipe already added");
    } else {
      setMealPlan((j) => [...j, selectedRecipe[0]]);
      navigate("/home");
    }
  }

  // function showIng() {
  //   setIsClicked(true)
  //   setIngredient([])
  //   for (let keyName in selectedRecipe[0]) {
  //     let valueName = selectedRecipe[0][keyName];
  //     if (valueName && keyName.includes("strIngredient")) {
  //       console.log(valueName);
  //       setIngredient((i) => [...i, valueName]);

  //     }
  //   }

  // }

  return (
    <div className="flex justify-center">
      {/* <button onClick={fakeIng}>fake ing</button> */}

      {selectedRecipe &&
        selectedRecipe.map((i, j) => (
          <div key={j} className="recipeDetailDiv flex flex-col gap-10">
            <div key={j} className="card card-normal w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={i.strMealThumb} alt="Shoes" />
              </figure>
              <div className="card-body flex gap-6">
                <h2 className="card-title">{i.strMeal}</h2>

                <Link to={"/home"}>
                  <div className="badge badge-outline">Back to Recipes</div>
                </Link>

                <button
                  onClick={addToPlan}
                  className="btn btn-active btn-primary"
                >
                  Add to Plan
                </button>
              </div>
            </div>

            {/* second card */}

            <div className="card w-96 bg-base-100 shadow-xl text-justify  ">
              <div className="card-body flex items-center gap-10 ">
                <h2 className="card-title">Ingredients</h2>
                <ul className="flex flex-col gap-6">
                  <li>
                    {i.strMeasure1} {i.strIngredient1}
                  </li>
                  <li>
                    {" "}
                    {i.strMeasure2} {i.strIngredient2}
                  </li>
                  <li>
                    {i.strMeasure3} {i.strIngredient3}{" "}
                  </li>
                  <li>
                    {" "}
                    {i.strMeasure4} {i.strIngredient4}
                  </li>
                  <li>
                    {" "}
                    {i.strMeasure5} {i.strIngredient5}
                  </li>
                  <li>
                    {i.strMeasure6} {i.strIngredient6}{" "}
                  </li>
                  <li>
                    {i.strMeasure7} {i.strIngredient7}{" "}
                  </li>
                  <li>
                    {i.strMeasure8} {i.strIngredient8}{" "}
                  </li>
                  <li>
                    {i.strMeasure9} {i.strIngredient9}{" "}
                  </li>
                  <li>
                    {i.strMeasure10} {i.strIngredient10}{" "}
                  </li>
                  <li>
                    {i.strMeasure11} {i.strIngredient11}{" "}
                  </li>
                  <li>
                    {i.strMeasure12} {i.strIngredient12}{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* Ingredients card */}

            {/* <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
              {!isClicked? <button onClick={showIng} className="btn btn-primary">
                  Show Ingredient
                </button>:<></>} 
                <h2 className="card-title">Ingredients</h2>
                {ingredient && ingredient.map((item) => <p>{item}</p>)
                
                }
                
              </div>
            </div> */}

            {/* third card */}
            <div className="card w-96 bg-base-100 shadow-xl text-justify">
              <div className="card-body">
                <h2 className="card-title">Instructions</h2>
                <p>{i.strInstructions}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SelectedRecipe;
