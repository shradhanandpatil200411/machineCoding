import React from "react";

function Interest({ data, setData, error }) {
  const { interest } = data;
  console.log(error);

  const handelOnChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest:
        e.target.checked ?
          [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i != e.target.name),
    }));
  };

  return (
    <>
      <div className='mx-auto w-fit flex gap-10 mt-10 '>
        <div className='flex gap-2 '>
          <label htmlFor='react'>React.js</label>
          <input
            type='checkbox'
            name='react'
            id='react'
            checked={interest.includes("react")}
            onChange={(e) => handelOnChange(e)}
          />
        </div>
        <div className='flex gap-2 '>
          <label htmlFor='javaScript'>javaScript</label>
          <input
            type='checkbox'
            name='javaScript'
            id='javaScript'
            checked={interest.includes("javaScript")}
            onChange={(e) => handelOnChange(e)}
          />
        </div>
      </div>
      {error.interest && (
        <small className='text-red-400  block mx-auto w-fit mt-10'>
          {error.interest}
        </small>
      )}
    </>
  );
}

export default Interest;
