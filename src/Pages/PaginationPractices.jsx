import React, { useEffect, useState } from "react";
import ProductCards from "../Components/Products/ProductCards";

function PaginationPractices() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const LIMIT = 10;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${(page - 1) * LIMIT}&select=id,title,description,price,thumbnail,discountPercentage`,
        );
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / LIMIT));
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [page]);

  const handelPageNumber = (selectPage) => {
    setPage(selectPage);
  };

  return (
    <>
      <div>
        <h1 className='text-4xl font-bold mx-auto w-fit my-10'>All Products</h1>
        {products.length > 0 && (
          <div className='flex flex-wrap gap-5 justify-center'>
            {products.map((pro) => (
              <div key={pro.id}>
                <ProductCards {...pro} />
              </div>
            ))}
          </div>
        )}

        <div className=' my-10 gap-2 flex justify-center text-center w-full'>
          {page > 1 && (
            <span
              onClick={() => handelPageNumber(page - 1)}
              className='text-white  p-2 w-10 cursor-pointer'>
              ◀
            </span>
          )}
          {Array(totalPages)
            .fill("")
            .map((_, i) => (
              <span
                onClick={() => handelPageNumber(i + 1)}
                className='text-white border p-2 w-10 cursor-pointer'
                style={{ backgroundColor: page == i + 1 ? "grey" : "" }}
                key={i}>
                {i + 1}
              </span>
            ))}

          {totalPages > page && (
            <span
              onClick={() => handelPageNumber(page + 1)}
              className='text-white  p-2 w-10 cursor-pointer'>
              ▶
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default PaginationPractices;
