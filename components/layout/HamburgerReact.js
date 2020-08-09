import Hamburger from 'hamburger-react';

import React, { useState } from 'react';

const HamburgerReact = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='sm:hidden'>
      <Hamburger
        label='Show navagation menu'
        rounded
        color='black'
        size={24}
        onToggle={(toggled) => {
          if (toggled) {
            document.getElementById('navigation').classList.toggle('hidden');
            // open a menu
            return;
          } else {
            // close a menu
            document.getElementById('navigation').classList.toggle('hidden');
          }
        }}
      />
    </div>
  );
};

export default HamburgerReact;
