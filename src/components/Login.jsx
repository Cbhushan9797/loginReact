import React,{useState} from "react"
import { Register } from "./Register";
export const Login=()=>{
    const[email, setEmail]= useState("");
    const[pass, setPass]= useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
      <form onSubmit={handleSubmit}>
        <label for="email">email   </label>
        <input  value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="abc@gmail.com"  id="email" name="email"/>
        <label for="password">password  </label>
        <input  value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password " />
        <button type="submit">login</button>
        </form>
        <button>Register if not having account </button>
        </>
    )
} 