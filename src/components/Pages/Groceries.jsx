import React from "react";
import { Link } from "react-router-dom";

function Groceries({ mealPlan, loggedin }) {
  const arr = [];

  for (let meals = 0; meals < mealPlan.length; meals++) {
    const element = mealPlan[meals];

    for (let keyName in element) {
      let valueName = element[keyName];
      if (
        valueName &&
        keyName.includes("strIngredient") &&
        !arr.includes(valueName)
      ) {
        arr.push(element[keyName]);
      }
      // console.log('key  '+elm +'  value  '+mealPlan[0][elm] );
    }
  }

  console.log(arr);

  return (
    <div className="mealHistory flex flex-col items-center gap-10 justify-center p-10">
      <div className="mealHistoryCard card w-80 bg-base-100 flex items-center shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Grocery list</h2>
          {arr.map((i, j) => (
            <div key={j}>
              <p>{i}</p>
            </div>
          ))}
          <div className="card-actions justify-end">
            <a target="blank" href="https://shop.rewe.de/">
              <button className="btn btn-primary">Buy Now</button>
            </a>
            <a target="blank" href="https://www.whatsapp.com/">
              {" "}
              <button className="btn btn-primary">Share</button>
            </a>
          </div>
        </div>
      </div>

      <div className="mealHistoryCard1 card card-compact w-80 bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Shoes"
          />
        </figure>
        <div className="burgerCard card-body flex justify-center gap-10 ">
          <h2 className="card-title">Hey there!</h2>
          <p className=" text-xl ">Want to check out your meal plans so far?</p>
          <div className="card-actions justify-end ">
          <Link to={"/mealHistory"}> <button className="btn btn-primary">Meal History</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groceries;
