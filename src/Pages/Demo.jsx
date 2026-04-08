import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

function Demo() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchProducts = async (currentPage) => {
    if (isLoading || !hasMore) return;
    try {
      setIsLoading(true);
      let limit = 20;
      let skip = (currentPage - 1) * 10;
      let { data } = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handelScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      if (!isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [handelScroll]);

  useEffect(() => {
    fetchProducts(page);
  }, [page]);
  return (
    <div className='flex flex-col gap-5'>
      {products.map((prod) => (
        <h1 key={prod.id}>{prod.title}</h1>
      ))}
    </div>
  );
}

export default Demo;
