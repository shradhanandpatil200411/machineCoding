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
      <div className='w-80 border h-96 bg-gray-500 rounded-2xl text-black p-4'>
        <div className='h-1/2'>
          <img
            className='bg-cover mx-auto h-full'
            src={thumbnail}
            alt='product-img'
          />
        </div>
        <div>
          <h1 className='text-xl font-bold text-black'>{title}</h1>
          <p className='text-lg font-semibold'>
            Rs <span>{price}</span> - discount{" "}
            <span>{discountPercentage}%</span>
          </p>
          <p className='text-sm'>{description.slice(0, 100)}...</p>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
