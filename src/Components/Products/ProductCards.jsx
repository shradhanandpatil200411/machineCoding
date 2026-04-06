import React from "react";

function ProductCards({
  title,
  description,
  price,
  discountPercentage,
  thumbnail,
}) {
  return (
    <>
      <div className='w-80 border h-96 bg-gray-500 rounded-2xl text-gray-900 p-4 '>
        <div className='h-1/2 bg-gray-600'>
          <img
            className='bg-cover mx-auto h-full'
            src={thumbnail}
            alt='product-img'
          />
        </div>
        <div className='mt-5'>
          <h1 className='text-xl font-bold '>{title}</h1>
          <p className='text-lg font-semibold'>
            Rs <span>{price}</span> - discount{" "}
            <span>{discountPercentage}%</span>
          </p>
          <p className='text-sm'>{description?.slice(0, 100)}...</p>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
