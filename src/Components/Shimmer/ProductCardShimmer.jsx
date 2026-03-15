import React from "react";

function ProductCardShimmer() {
  return (
    <>
      <div className='w-80 p-4 h-96 bg-gray-500 rounded-xl animate-pulse'>
        <div className='bg-gray-700 h-1/2 w-full'></div>
        <div>
          <h1 className=' mt-2 rounded-lg h-10 w-full bg-gray-700'></h1>
          <p className='mt-2 w-full h-2 rounded-2xl bg-gray-700'></p>
          <p className='mt-2 w-1/2 h-2 rounded-2xl bg-gray-700'></p>
          <p className='mt-2 w-full h-2 rounded-2xl bg-gray-700'></p>
          <p className='mt-2 w-1/2 h-2 rounded-2xl bg-gray-700'></p>
          <p className='mt-2 w-9/12 h-2 rounded-2xl bg-gray-700'></p>
          <p className='mt-2 w-9/12 h-2 rounded-2xl bg-gray-700'></p>
        </div>
      </div>
    </>
  );
}

export default ProductCardShimmer;
