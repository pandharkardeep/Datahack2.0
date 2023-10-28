import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import Lottie from "lottie-react";
import animationData from '../images/Animation - 1698496293262.json'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container mt-32 flex justify-center">
      <form onSubmit={signUp}>
        <h1 className=" flex justify-center ">Create Account</h1>
        <div className=" flex flex-row gap-x-36 my-10">
          <div className=" flex flex-col justify-center bg-blue-100 rounded-xl">
            <p className="flex justify-center my-2 text-black font-bold">SIGN UP!</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mx-6 flex justify-center px-3 w-[50vh] bg-black rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mx-6 flex justify-center mt-4 px-3 w-[50vh] bg-black rounded-lg"
        ></input>
        <button className=" mx-6 bg-black my-4 px-1 rounded-lg font-bold text-blue-400 w-[15vh]" type="submit">Sign Up</button>
        </div>
        <Lottie className="h-[40vh] bg-blue-100 w-[50vh] flex justify-center rounded-xl" animationData={animationData}/>
        </div>
      </form>
    </div>
  );
};

export default SignUp;