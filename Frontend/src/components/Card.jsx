import React from 'react'

function Card({ item }) {
  console.log(item);

  return (
    <>
      <div className='w-full sm:max-w-72'>
        <div className="card bg-base-100 w-full h-full shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure className='mt-2 '>
            <img
              src={item.image}
              alt="Shoes" className='w-full h-44 ' />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-base">
              {item.name}
              <div className="badge bg-red-500 text-white">{item.category}</div>
            </h2>
            <p className='text-sm'>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline mt-3">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 mt-1 rounded-full border-[2px] hover:bg-red-500 hover:text-white duration-200 text-sm" >Buy Now</div>
            </div>
          </div>
        </div>
      </div>

    </>
    
  )
}

export default Card
