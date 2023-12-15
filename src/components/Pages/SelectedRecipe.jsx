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
      navigate("/");
    }
  }

  function showIng() {
    for (let keyName in selectedRecipe[0]) {
      let valueName = selectedRecipe[0][keyName];
      if (valueName && keyName.includes("strIngredient")) {
        console.log(valueName);
        setIngredient((i) => [...i, valueName]);
      }
    }
  }

  return (
    <div className="flex justify-center">
      {/* <button onClick={fakeIng}>fake ing</button> */}

      {selectedRecipe &&
        selectedRecipe.map((i, j) => (
          <div className="recipeDetailDiv flex flex-col gap-10">
            <div key={j} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={i.strMealThumb} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{i.strMeal}</h2>
                <Link to={"/"}>
                  {" "}
                  <div className="badge badge-outline">
                    Back to Recipes
                  </div>{" "}
                </Link>

                <button
                  onClick={addToPlan}
                  className="btn btn-active btn-primary"
                >
                  Add to Plan
                </button>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <button onClick={showIng} className="btn btn-primary">
                  Show Ingredient
                </button>
                <h2 className="card-title">Ingredients</h2>
                {ingredient && ingredient.map((item) => <p>{item}</p>)}
              </div>
            </div>

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
