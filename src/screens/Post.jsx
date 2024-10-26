import React from 'react';
import {MdOutlineNotificationsNone} from "react-icons/md";
import { Link } from "react-router-dom";

function Post() {
  return (
    <>
    <div className=''>
        <div className='flex w-[100%] h-[80px] border border-black shadow-lg rounded-xl items-center'>
            <div className='ml-10 font-bold text-xl'>Blogging.com</div>
            <input type='text' placeholder='Search' className='rounded-2xl h-[2rem] ml-[1rem] pl-[0.5rem] border-black border'></input>
            <div className='flex w-full items-center justify-end'>
                <div className='flex items-center w-[11rem] mr-[6rem]'>
                    <Link to="/home"><div className='flex items-center text-xl cursor-pointer' onClick={() => {
                      console.log("Your post is uploaded")
                    }}>Post</div></Link>
                    <MdOutlineNotificationsNone className='font-extrabold text-2xl ml-[2rem] mr-[1.5rem] cursor-pointer' />
                    <div className='w-[2rem] h-[2rem] rounded-full cursor-pointer'><img src='https://th.bing.com/th/id/OIP.CG70mC-flvJIYFRVmR9FZwHaHa?rs=1&pid=ImgDetMain' alt=''/></div>
                </div>    
            </div>
        </div>
    </div>
    <div className='w-[100%] h-[89vh] border border-black'>
      <input type='textarea' placeholder='Title' className='flex justify-self-center text-5xl mt-20 w-[40%]'></input>
      <input type='textarea' placeholder='Write your story' className='flex text-xl mt-10 w-[60%] absolute left-[28rem] justify-start flex-wrap'></input>
    </div>
    </>
  )
}

export default Post