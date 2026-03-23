import React, { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const intervalId = useRef();

  const start = () => {
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      setTime((prev) => {
        let newSe = prev.sec + 1;
        let newMin = prev.min;
        let newHr = prev.hr;

        if (newSe === 60) {
          newSe = 0;
          newMin += 1;
        }

        if (newMin === 60) {
          newHr += 1;
          newMin = 0;
        }

        return { sec: newSe, min: newMin, hr: newHr };
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const reset = () => {
    setTime({ sec: 0, min: 0, hr: 0 });
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const format = (n) => String(n).padStart(2, "0");

  return (
    <>
      <div className='h-screen w-screen'>
        <div className='w-1/2 mx-auto mt-10 text-center'>
          <h1 className='font-bold text-6xl'>Stop Watch</h1>
          <div className='mt-10  text-2xl'>
            <div>
              {format(time.hr)}:{format(time.min)}:{format(time.sec)}
            </div>
          </div>
          <div className='flex gap-2 justify-center mt-10'>
            <button
              onClick={start}
              className='px-4 py-2 bg-green-400 cursor-pointer font-semibold rounded-2xl'>
              Start
            </button>
            <button
              onClick={stop}
              className='px-4 py-2 bg-red-400 font-semibold cursor-pointer rounded-2xl'>
              Stop
            </button>
            <button
              onClick={reset}
              className='px-4 py-2 bg-gray-400 font-semibold cursor-pointer rounded-2xl'>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
