import React, { useEffect, useState } from "react";
import ProductCards from "../Components/Products/ProductCards";
import ProductCardShimmer from "../Components/Shimmer/ProductCardShimmer";

function Pagination() {
  const [products, setProduct] = useState([]);
  const [allPages, setPages] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [showShimmer, setShowShimmer] = useState(true);

  const LIMIT = 3;

  const fetchProductData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${pageNo * LIMIT}&select=id,title,description,price,discountPercentage,thumbnail`,
    );
    const data = await response.json();

    setProduct(data.products);
    setPages(Math.ceil(data.total / LIMIT));
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      setShowShimmer(true);
      await fetchProductData();
      setShowShimmer(false);
    };
    fetchAsyncData();
  }, [pageNo, allPages]);
  return (
    <>
      <div className=' flex gap-10 justify-evenly  flex-wrap mt-10 mx-10'>
        {products.map((product) => {
          return showShimmer ?
              <div key={product.id}>
                <ProductCardShimmer />
              </div>
            : <div key={product.id}>
                <ProductCards {...product} />
              </div>;
        })}
      </div>
      <div className='text-lg  w-fit mx-auto p-10 flex flex-wrap gap-2 cursor-pointer'>
        {pageNo > 0 && (
          <p onClick={() => setPageNo((pageNo) => pageNo - 1)}>Prev</p>
        )}
        {[...Array(allPages).keys()].map((PN, index) => (
          <p
            className={
              pageNo === index ?
                "font-bold text-xl w-10 text-center bg-gray-500 "
              : "w-10 text-center"
            }
            key={index}
            onClick={() => setPageNo(index)}>
            {PN + 1}
          </p>
        ))}
        {pageNo < allPages - 1 && (
          <p onClick={() => setPageNo((pageNo) => pageNo + 1)}>Next</p>
        )}
      </div>
    </>
  );
}

export default Pagination;
