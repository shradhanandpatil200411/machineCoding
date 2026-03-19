import React from "react";

function Settings() {
  return (
    <>
      <div className='flex gap-10 justify-center mt-10'>
        <div className='flex gap-5'>
          <label htmlFor='dark'>Dark</label>
          <input type='radio' name='them' id='dark' />
        </div>
        <div className='flex gap-5'>
          <label htmlFor='light'>Light</label>
          <input type='radio' name='them' id='light' />
        </div>
      </div>
    </>
  );
}

export default Settings;
