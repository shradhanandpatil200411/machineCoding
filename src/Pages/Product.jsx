import React, { useState } from "react";
import useFetch from "../Hook/use-fetch";
import useDebounce from "../Hook/use-debounce";

function Product() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  const debounceValue = useDebounce(searchValue, 300);

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='w-fit mx-auto h-10 p-10'>
        <div className='h-10'>{debounceValue}</div>
        <input
          type='text'
          className='border '
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap gap-5 justify-center py-10 px-5'>
        {data.products.length > 0 &&
          data?.products.map((p) => (
            <div key={p.id} className='border'>
              <div>
                <img src={p.thumbnail} alt='img' />
              </div>
              <div className='flex justify-between px-4'>
                <h1>{p.title}</h1>
                <p>{p.price}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Product;
