import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-32 md:mt-48 lg:mt-56 xl:mt-32 w-11/12 md:w-3-10 mx-auto'>
      {children}
    </div>
  );
};

export default Wrapper;
