import React, { useMemo, useState } from "react";

function CustomUseMemo() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squareCounter = () => {
    console.log("Calculation");

    return counter * counter;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoSquareCounter = useMemo(() => squareCounter(), [counter]);

  return (
    <>
      <div className='py-20'>
        <div className='w-fit flex flex-col gap-5 text-2xl text-center mx-auto mt-10'>
          <h1>Increment Counter </h1>
          <h1>Counter: {counter}</h1>
          <h1>Square Counter: {memoSquareCounter}</h1>
          <button
            className='px-4 py-2 bg-gray-700 rounded-2xl cursor-pointer'
            onClick={() => setCounter(counter + 1)}>
            Increment
          </button>
        </div>
        <div className='w-fit flex flex-col gap-5 text-2xl text-center mx-auto mt-10'>
          <h1>Decrement Counter </h1>
          <h1>Counter: {counter2}</h1>
          <button
            className='px-4 py-2 bg-gray-700 rounded-2xl cursor-pointer'
            onClick={() => setCounter2(counter2 - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomUseMemo;
