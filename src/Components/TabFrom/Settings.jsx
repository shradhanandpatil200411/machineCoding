import React from "react";

function Settings({ data, setData }) {
  const { theme } = data;
  return (
    <>
      <div className='flex gap-10 justify-center mt-10'>
        <div className='flex gap-5'>
          <label htmlFor='dark'>Dark</label>
          <input
            type='radio'
            name='them'
            id='dark'
            checked={theme === "dark"}
            onChange={() => setData((prev) => ({ ...prev, theme: "dark" }))}
          />
        </div>
        <div className='flex gap-5'>
          <label htmlFor='light'>Light</label>
          <input
            type='radio'
            name='them'
            id='light'
            checked={theme === "light"}
            onChange={() => setData((prev) => ({ ...prev, theme: "light" }))}
          />
        </div>
      </div>
    </>
  );
}

export default Settings;
