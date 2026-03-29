import React from "react";
import useWindowSize from "../Hook/use-window-size";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <div className=' h-screen'>
      <div className='w-fit mx-auto mt-20'>
        <p>Width:{width}</p>
        <p>height:{height}</p>
      </div>
    </div>
  );
}

export default WindowSize;
