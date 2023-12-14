import React from 'react'

function Groceries({mealPlan}) {

const arr =[]

for (let meals = 0; meals < mealPlan.length; meals++) {
    const element = mealPlan[meals];

    for( let keyName in element ){
        let valueName =element[keyName] 
        if ( valueName  &&  (keyName.includes("strIngredient") ) && !arr.includes(valueName)) {
       arr.push(element[keyName])
    }
    // console.log('key  '+elm +'  value  '+mealPlan[0][elm] );
    }



    
}



console.log(arr);

   
    
  return (
    <div className='flex justify-center p-10'>
<div className="card w-96 bg-base-100 flex items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Grocery list</h2>
    {arr.map((i,j)=><div key={j}>
    <p>{i}</p>
    </div>)}
    <div className="card-actions justify-end">
     <a target='blank' href="https://shop.rewe.de/"><button className="btn btn-primary">Buy Now</button></a> 
      <button className="btn btn-primary">Share</button>
    </div>
  </div>
</div>

       
            
       
    </div>
  )
}

export default Groceries