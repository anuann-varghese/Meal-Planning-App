import Backendless from "backendless";
import React, { useState } from "react";

function MealHistory() {
  const [userPlan, setUserPlan] = useState();

  function mealRetriever() {
    Backendless.Data.of("Mealplan")
      .find()
      .then(function (result) {
        console.log(result);
        // setUserPlan(result)
        setUserPlan(result.map((i) => i.Recipes));
        userPlan && console.log(userPlan);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col gap-10 p-20 justify-center items-center">
      <button className="btn btn-primary w-40" onClick={mealRetriever}>
        Meal Retrieval
      </button>

      {/* {userPlan&& userPlan.map((data,j)=><div>
        {(data.created).toString()}
        {data.Recipes.map(i=>{i.map(l=><div><p>{j.strMeal}</p></div>)})}
        <hr></hr>
        </div>)} */}
      <div className="mealPlanHistory flex flex-col gap-10  ">
        {userPlan &&
          userPlan.map((i, k) => (
            <div className="card w-80 bg-neutral text-neutral-content ">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Meal:{k++}</h2>
                {i.map((j, l) => (
                  <div className=" " key={l}>
                    <p>{j.strMeal}</p>
                  </div>
                ))}
              </div>
            </div>

            //   <div key={k} className="w-content" >

            //     <h2 className="text-xl">Meal:{k++}</h2>

            //     {i.map((j, l) => (
            //       <div className=" " key={l}>
            //         <p>{j.strMeal}</p>
            //       </div>
            //     ))}
            //     <hr />

            //   </div>
          ))}
      </div>
    </div>
  );
}

export default MealHistory;
