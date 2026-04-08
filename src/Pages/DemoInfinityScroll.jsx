import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

function DemoInfinityScroll() {
  // 1. We need state to actually store the products!
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (currentPage) => {
    // Prevent fetching if we are already fetching, or if there is no more data
    if (isLoading || !hasMore) return;

    try {
      setIsLoading(true);

      // Proper Pagination Logic
      const limit = 10;
      const skip = (currentPage - 1) * limit;

      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );

      const newProducts = response.data.products;

      // If the API returns nothing, we know we hit the bottom
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        // Append the new products to the existing array!
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger fetch ONLY when the 'page' state changes
  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  // The Scroll Handler
  const handleScroll = useCallback(() => {
    // Check if user is near the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      // ONLY increase the page if we aren't currently loading something
      if (!isLoading && hasMore) {
        // Use functional update so we don't need 'page' in the dependency array
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [isLoading, hasMore]); // Clean dependencies, no ESLint warnings!

  // Attach the event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-5'>Infinite Scroll Products</h1>

      {/* Map over the stored products */}
      <div className='flex flex-wrap gap-5'>
        {products.map((prod) => (
          <div key={prod.id} className='border p-4 w-48 shadow-md rounded-lg'>
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className='w-full h-32 object-cover'
            />
            <h3 className='font-bold text-sm mt-2 truncate'>{prod.title}</h3>
            <p>${prod.price}</p>
          </div>
        ))}
      </div>

      {/* Graceful loading and empty states */}
      {isLoading && (
        <h2 className='text-xl font-bold mt-10 text-center text-blue-500'>
          Loading more products...
        </h2>
      )}
      {!hasMore && (
        <h2 className='text-xl font-bold mt-10 text-center text-gray-500'>
          You've reached the end!
        </h2>
      )}
    </div>
  );
}

export default DemoInfinityScroll;
