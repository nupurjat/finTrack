import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyAuth } from "../context/AuithContext";

const Login = () => {
    let {reset,handleSubmit,formState:{errors},register}=useForm();
    let{loggedUser ,setLoggedUser,registerUser}=useContext(MyAuth)
    let navigate= useNavigate()
     const formSubmit=(data)=>{
       let user =registerUser.find((val)=>{
        return val.username=== data.username && val.password===data.password
       })
       if(!user){
        alert("enter valid creds")
        reset();
        return ;
       }
       setLoggedUser(user);
       localStorage.setItem("loggeduser",JSON.stringify(user))
       alert("you are logged in ")
       reset()
     }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your FinTrack account
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={handleSubmit(formSubmit)}
        className="space-y-5">

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Username
            </label>

            <input
              {...register("username", {
          required: "Username is required",
          pattern: {
            value: /^[A-Za-z0-9_]{3,20}$/,
            message: "Username must be 3-20 characters",
          },
        })}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500 transition"

            />
            {errors.username && <p className="text-red-700" >{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>

            <input
            {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^[A-Za-z0-9_]{3,20}$/,
            message: "Password must be 3-20 characters",
          },
        })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500 transition"
             
            />
            {errors.password && <p className="text-red-700">{errors.password.message}</p>}
             
          </div>

         

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg
                       font-semibold hover:bg-indigo-700
                       focus:outline-none focus:ring-2
                       focus:ring-indigo-500 focus:ring-offset-2
                       transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          
           <button onClick={()=>{navigate("/register")}}
            className="text-blue-600 text-bold">Create account</button>
          
        </p>

      </div>
    </div>
  );
};

export default Login;