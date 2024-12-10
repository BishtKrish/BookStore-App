import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from "react-router-dom"
import axios from 'axios';


function Course() {

  const[book,setBook]= useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
        
      } catch (error) {
      console.log(error);
      
      }
    }
    getBook();
},[])
  return (
    <>
    <div className='pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className=' items-center justify-center text-center '>
            <h1 className='text-2xl  md:text-4xl'>Lorem ipsum dolor sit amet <span className='text-red-500'>consectetur.</span></h1>
            <p className='mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis facilis debitis, impedit adipisci alias necessitatibus molestiae quisquam labore nesciunt quos neque odit, excepturi laudantium quaerat inventore blanditiis deserunt nobis?</p>
            <Link to="/" >
            <button  className='mt-6 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 w-full gap-10 place-items-center'>
            {
            book.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
                

            }
        </div>
    </div>
    </>
  )
}

export default Course
