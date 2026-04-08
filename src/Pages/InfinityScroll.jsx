/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import ProductCards from "../Components/Products/ProductCards";
import ProductCardShimmer from "../Components/Shimmer/ProductCardShimmer";

function InfinityScroll() {
  const [products, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const fetchProduct = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`,
      );
      let data = await response.json();
      setProduct(data.products);
      setPage(page + 1);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  const myThrottle = useCallback((cb, d) => {
    let last = 0;
    return (...arg) => {
      let now = Date.now();
      if (now - last < d) return;
      last = now;
      return cb(...arg);
    };
  }, []);

  const handelScroll = myThrottle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 400 >
        document.documentElement.offsetHeight &&
      !loading
    ) {
      fetchProduct();
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, [handelScroll]);

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div>
        <h1 className='text-2xl font-bold w-fit mx-auto my-10'>
          Infinity Scroll
        </h1>
        <div className='flex flex-wrap gap-10 justify-center'>
          {products?.map((pro) => (
            <div key={pro.id}>
              <ProductCards {...pro} />
            </div>
          ))}

          {loading &&
            Array(5)
              .fill("")
              .map((index) => (
                <div key={index}>
                  <ProductCardShimmer />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default InfinityScroll;
