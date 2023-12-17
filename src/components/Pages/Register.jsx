import Backendless from 'backendless'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register({email,setEmail,password,setPassword}) {
    const navigate=useNavigate()
    function newUser(e){
        e.preventDefault()
        const User1=new Backendless.User()
        User1.email=email
        User1.password=password
        Backendless.UserService.register( User1 )
    .then( res=>{console.log(res)} )
    .catch( err=>{console.log(err);} );
    navigate("/login")
      }

  return (
    <div className='flex justify-center items-center h-full'>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={newUser}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Register