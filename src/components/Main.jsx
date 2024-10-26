import React from 'react';
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Main() {

    const { loginWithRedirect } = useAuth0;
    
    const[toggle, setToggle] = useState(false);

  return (
    <div className='w-[100%] h-[89vh] grid'>
{/*         <div className='top-28 absolute justify-self-center w-[30%] h-[70%] border flex  flex-col space-y-[2rem] items-center rounded-xl bg-[#bdb8b8] duration-500' style={{
                opacity:toggle ? 1 : 0,
                visibility:toggle ? 1 : 0
            }}>
            <RxCross1 className='relative self-end mt-[2rem] mr-[2rem] cursor-pointer' onClick={() => {
                setToggle(!toggle)
            }}/>
            <h1 className='text-[1.5rem] font-bold mt-[3rem] mb-[3rem]'>Join Blogging.com</h1>
            <form className='justify-self-center'>
              <input type='text' placeholder='Username' className='block text-2xl mb-[2rem] mt-[2rem] cursor-default px-4 rounded-2xl' required></input>
              <input type='password' placeholder='Password' className='block text-2xl cursor-default px-4 rounded-2xl' required></input>
              <div className='justify-between flex mt-[4rem]'>                
                <button  onClick={() => {
                    setToggle(!toggle)
                }} className='px-2 bg-white rounded-2xl'>Cancel</button>
                <button className='px-2 bg-white rounded-2xl'><Link to="/home">Sign In</Link></button>
              </div>  
            </form>
        </div> */}
        <div className='w-[100%] border h-[89vh] p-[10rem] flex'>
            <span className='justify-self-center self-center w-[50%] p-9'>
                <h1 className='text-2xl font-bold'>Blogging isn’t about publishing as much as you can. It’s about publishing as smart as you can</h1>
                <button className='block mt-[2rem] px-8 py-4 rounded-xl bg-[#cecccc]' onClick={() => {
                     loginWithRedirect()
                }}>Get Started</button>
            </span>
            <span className='w-[50%] flex justify-center'>
                <div className='background-img self-center w-[60%] h-[80%]'></div>
            </span>    
        </div>
    </div>
  )
}

export default Main
