import React, { useState } from 'react';

const FreePaidButton = () => {
  const [active, setActive] = useState('free');
  return (
    <div className='flex mt-4 w-full'>
      <button
        className={`${
          active === 'free' ? 'active' : 'inactive'
        } w-1/2 text-center py-1`}
        onClick={() => setActive('free')}
      >
        Free
      </button>
      <button
        className={`${
          active === 'paid' ? 'active' : 'inactive'
        } w-1/2 text-center py-1`}
        onClick={() => setActive('paid')}
      >
        Paid
      </button>
    </div>
  );
};

export default FreePaidButton;
