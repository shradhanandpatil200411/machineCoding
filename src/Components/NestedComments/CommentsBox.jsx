import React from "react";

function CommentsBox({ data }) {
  return (
    <>
      {data.map((comment) => {
        return (
          <>
            <div className='mt-5 ml-10 flex border-l-2 bg-gray-700 rounded-2xl w-fit p-2 gap-5'>
              <div>
                <img
                  className='w-20 rounded-full'
                  src={comment?.profilerUrl}
                  alt='user_profile'
                />
              </div>
              <div>
                <h1 className='text-xl font-bold'>{comment?.userName}</h1>
                <p>{comment?.comment}</p>
              </div>
            </div>
            <div className='ml-10 border-l-2'>
              {comment?.restyles && <CommentsBox data={comment.restyles} />}
            </div>
          </>
        );
      })}
    </>
  );
}

export default CommentsBox;
