import React from 'react'
import book_image from '../../public/book-removebg-preview.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 mt-36'>
      <div className='space-y-8'>
      <h1 className='text-3xl font-bold mx-1'>Hello,welcomes to our book store.
      "Discover Worlds Beyond Words –<span className='text-red-500'> Explore, Read, Repeat!" </span></h1>

      <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit nulla officia, maiores cumque minus facilis totam. Aut, recusandae, quasi voluptatum excepturi alias, ullam consequuntur aliquid obcaecati beatae veritatis soluta?
      </p>
     

    {/* daisyUI -- input field*/}

      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>

</div>
<button className="btn mt-6 bg-red-500">Submit Button</button>

      </div>
      <div className='w-full md:w-1/2'>
      <img src={book_image} alt="Book Image" className='w-[400px] h-[400px] mx-30 my-12 mx-auto'/></div>
    </div>
    </>
  )
}

export default Banner
