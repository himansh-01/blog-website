import React, { useState} from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";
import { Link } from "react-router-dom";

function Header2() {

  const[click, setClick] = useState(false)

  const sideBar = () => {
    setClick(!click)
  }
  return (
    <>
        <div className='w-[350px] bg-white h-[80%] absolute duration-400ms right-0 top-[4.5rem] shadow-xl border px-[5rem] py-[4rem]'
        onClick={(e)=>{
            e.stopPropagation();
        }}
        style={
            {
                right:'2.5%',
                opacity: click ? 1:0
            }
        }>
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><FaRegUser /> Profile</div>
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><VscLibrary /> Library</div>          
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><IoSearch /> Explore</div>          
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><AiOutlineInfoCircle /> About Us</div>          
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><FiHelpCircle /> Help and Support</div>          
          <div className='gap-[2rem] flex text-2xl items-center mb-[2rem]'><IoSettingsOutline /> Settings</div>
          <div className='gap-[2rem] flex text-2xl items-center mb-[1rem]'></div>><MdPowerSettingsNew /> Sign out</div>
        </div>
     <div className='w-[100%] h-[100%]'>
        <div className='flex w-[100%] h-[80px] border border-black shadow-lg rounded-xl items-center'>
            <div className='ml-10 font-bold text-xl'>Blogging.com</div>
            <input type='text' placeholder='Search' className='rounded-2xl h-[2rem] ml-[1rem] pl-[0.5rem] border-black border'></input>
            <div className='flex w-full items-center justify-end'>
                <div className='flex items-center w-[11rem] mr-[6rem]'>
                    <Link to="/post"><div className='flex items-center text-xl cursor-pointer'><FaRegEdit />Post</div></Link>
                    <MdOutlineNotificationsNone className='font-extrabold text-2xl ml-[2rem] mr-[1.5rem] cursor-pointer' />
                    <div className='w-[2rem] h-[2rem] rounded-full cursor-pointer'><img src={user.picture} alt='https://th.bing.com/th/id/OIP.CG70mC-flvJIYFRVmR9FZwHaHa?rs=1&pid=ImgDetMain' onClick={sideBar}/></div>
                </div>    
            </div>
        </div>
     </div>
    </>
  ) 
}

export default Header2
