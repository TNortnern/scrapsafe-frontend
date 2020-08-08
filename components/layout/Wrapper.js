import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen inset-0 absolute'>
      {children}
    </div>
  );
};

export default Wrapper;
