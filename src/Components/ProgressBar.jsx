function ProgressBar({ progress }) {
  return (
    <>
      <div className='border rounded-2xl overflow-hidden my-2'>
        <div
          className='bg-green-500 text-white p-1 text-right rounded-2xl transition-all duration-1000 ease-in'
          style={{
            transform: `translateX(${progress - 100}%)`,
            color: progress > 4 ? "white" : "black",
          }}
          role='progressbar'>
          {progress}%
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
