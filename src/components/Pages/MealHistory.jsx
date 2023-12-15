import Backendless from "backendless";
import React, { useState } from "react";

function MealHistory() {
  const [userPlan, setUserPlan] = useState();

  function mealRetriever() {
    Backendless.Data.of("Mealplan")
      .find()
      .then(function (result) {
        console.log(result);
        setUserPlan(result.map((i) => i.Recipes));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={mealRetriever}>
        {" "}
        Meal Retrieval
      </button>

      
      {userPlan &&
        userPlan.map((i, k) => (
          <div key={k} >
            
            
            {i.map((j, l) => (
              <div className="bg-primary " key={l}>
                <p>{j.strMeal}</p>
              </div>
            ))}
            <hr />
        
          </div>
        ))}
    </div>
  );
}

export default MealHistory;
