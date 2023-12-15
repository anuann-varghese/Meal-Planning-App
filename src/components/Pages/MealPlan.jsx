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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 p-5 justify-around items-center">
        {mealPlan &&
          mealPlan.map((i, j) => (
            <div
              key={j}
              className=" flex w-full justify-around bg-stone-100 rounded-lg items-center"
            >
              <img width={50} src={i.strMealThumb} alt="" />
              <p>{i.strMeal}</p>
              <button onClick={() => deleteRecipe(i)}>
                <ion-icon name="trash-outline"></ion-icon>{" "}
              </button>
            </div>
          ))}
        <button onClick={planSaver} className="btn btn-wide btn-primary">
          Create Shopping list
        </button>
      </div>
    </div>
  );
}

export default MealPlan;
