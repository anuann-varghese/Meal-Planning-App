import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div className='introCard flex flex-col justify-evenly items-center h-full  mt-10'>

        <div className='introCardPic h-full  flex items-center'>
      <img src="https://images.unsplash.com/photo-1565299543923-37dd37887442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />  
        </div>

        <div className='introCardText text-center  font-medium flex flex-col gap-5'>
            {/* <h2 className='text-3xl'>Easy Meals</h2> */}
            <div className="divider divider-primary"><h2 className='text-3xl'>Easy Meals</h2></div>
            <p>From Recipe to Cart: Simplify Shopping with Easy Meals</p>

            <div>
                <p>Plan your meals seamlessly and generate organized grocery lists effortlessly with Easy Meals. From recipe selection to the shopping cart, we've got you covered!</p>
            </div>
           <Link to={"/home"}> <button className='btn btn-primary w-1/2'>Get Started </button></Link>

        </div>




    </div>
  )
}

export default Intro