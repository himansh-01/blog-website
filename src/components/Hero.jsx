import React from 'react';
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";

function Hero() {

   const Posts = [
    {
      name : "teehee_writes",
      message: "It will happen,if it's meant to be.",
      date: "26th July",
      like: 25,
      comment: 4 
    },
    {
      name : "sports_freak",
      message: "Some amazing fitness tips you must know in 2024.",
      date: "28th July",
      like: 125,
      comment: 24 
    },  {
      name : "food_blogger",
      message: "Here are some of the best cuisines of India that are finger-licking good.",
      date: "04th August",
      like: 827,
      comment: 56 
    },  {
      name : "liver_055",
      message: "I'm a liver because I like to live my life",
      date: "18th August",
      like: 78,
      comment: 2 
    },  {
      name : "daily_blogger",
      message: "Hii guys!! It's my 30th day of 75 hard challenge",
      date: "26th August",
      like: 1000,
      comment: 67
    },
  ]
  
  return (
    <div className='w-[70%] border rounded-lg mt-2'>
       {
        Posts.map(
          (Post, index) => {
           return <div className='w-[90%] h-[12rem] border p-8' key={index}>
                    <div className='flex'><div className='h-[2rem] w-[2rem] bg-[url(https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1730018148~exp=1730018748~hmac=013f44d9a585b1e87c8e3e65f396e91fea69fea74f80f91481436f3882b42110)] bg-cover rounded-full mr-4'></div>{Post.name}</div>
                    <div className='text-2xl font-extrabold mt-4 px-4 mb-4'>{Post.message}</div>
                    <span className='w-[50%] flex gap-5 items-center px-4'><span>{Post.date}</span><FcLike />{Post.like}<FaComment />{Post.comment}</span>
                  </div>
          }
        )
      }
    </div>
  )
}

export default Hero
