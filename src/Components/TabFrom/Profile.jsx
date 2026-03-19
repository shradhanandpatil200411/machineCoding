import React from "react";

function Profile({ data, setData, error }) {
  const { name, age, email } = data;
  const handelChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className='flex flex-col items-center mt-10 gap-10 '>
        <div className='relative'>
          <div>
            <label htmlFor='name'>Name : </label>
            <input
              className='border outline-none py-2 px-4 rounded-lg'
              type='text'
              name='name'
              value={name}
              onChange={(e) => handelChange(e)}
            />
          </div>
          {error.name && (
            <small className='text-red-400 absolute left-15'>
              {error.name}
            </small>
          )}
        </div>
        <div className='relative'>
          <div>
            <label htmlFor='age'>Age : </label>
            <input
              className='border outline-none py-2 px-4 rounded-lg'
              type='number'
              name='age'
              value={age}
              onChange={(e) => handelChange(e)}
            />
          </div>
          {error.age && (
            <small className='text-red-400 absolute left-15'>{error.age}</small>
          )}
        </div>
        <div className='relative'>
          <div>
            <label htmlFor='email'>email : </label>
            <input
              className='border outline-none py-2 px-4 rounded-lg'
              type='email'
              name='email'
              value={email}
              onChange={(e) => handelChange(e)}
            />
          </div>
          {error.email && (
            <small className='text-red-400 absolute left-15'>
              {error.email}
            </small>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
