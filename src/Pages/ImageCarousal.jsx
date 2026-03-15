import { useEffect, useState } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";

function ImageCarousal() {
  const [allImages, setAllImages] = useState([]);
  const [img, setImg] = useState(0);

  const fetchImages = async () => {
    const getImage = await new Promise((resolve) =>
      resolve([
        {
          url: "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner5.avif?updatedAt=1772552053883",
        },
        {
          url: "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner4.avif?updatedAt=1772552053494",
        },
        {
          url: "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner1.avif?updatedAt=1772552053448",
        },
        {
          url: "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner2.avif?updatedAt=1772552053398",
        },
        {
          url: "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner3.avif?updatedAt=1772552053360",
        },
      ]),
    );
    setAllImages(getImage);
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      await fetchImages();
    };
    fetchAsyncData();
  }, []);
  return (
    <>
      <div className='relative'>
        <button
          className='absolute top-40 cursor-pointer'
          onClick={() => {
            img == 0 ? setImg(allImages.length - 1) : setImg((img) => img - 1);
          }}>
          <RiArrowRightWideLine className='rotate-180 text-9xl' />
        </button>
        <div>
          <img src={allImages[img]?.url} alt='img' />
        </div>
        <button
          className='absolute right-0 top-40 cursor-pointer'
          onClick={() => {
            img < allImages.length - 1 ? setImg((img) => img + 1) : setImg(0);
          }}>
          <RiArrowRightWideLine className='text-9xl' />
        </button>
      </div>
    </>
  );
}

export default ImageCarousal;
