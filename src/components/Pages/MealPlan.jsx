import Backendless from "backendless";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MealPlan({ mealPlan, setMealPlan, setIngredient }) {
  const navigate = useNavigate();

  function deleteRecipe(item) {
    console.log(item);
    const plan = mealPlan.filter((i) => i.idMeal != item.idMeal);
    console.log(plan);
    setMealPlan((i) => plan);
  }

  function planSaver() {
    Backendless.Data.of("Mealplan")
      .save({ Recipes: mealPlan })
      .then(function (savedObject) {
        console.log("new Contact instance has been saved");
      })
      .catch(function (error) {
        console.log("an error has occurred " + error.message);
      });

    navigate("/groceries");
  }

  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className="cartCard flex flex-col gap-6 p-5 justify-around items-center">
        {mealPlan &&
          mealPlan.map((i, j) => (
            <div className=" card  card-compact w-60 bg-base-100 shadow-xl">
              <figure>
                <img src={i.strMealThumb} alt="Meal Picture" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {i.strMeal} </h2>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => deleteRecipe(i)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button onClick={planSaver} className="btn btn-wide btn-primary">
        Create Shopping list
      </button>
    </div>
  );
}

export default MealPlan;
