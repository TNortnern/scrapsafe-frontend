import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/layout/Wrapper';

const gridview = () => {
  const [images, setImages] = useState([]);
  const generateFakes = () => {
    const imageChoice = ['/fake1.png', '/fake2.png'];
    const count = 15;
    for (let i = 0; i < count; i++) {
      const randomImageIndex = Math.floor(Math.random() * imageChoice.length);
      console.log('randomImageIndex', randomImageIndex);
      setImages([...images, imageChoice[randomImageIndex]]);
    }
  };
  useEffect(() => {
    generateFakes();
  }, []);
  return (
    <Layout>
      <div className='w-11/12 lg:w-11/12  mx-auto px-3'>
        <div className='flex flex-wrap justify-center'>
          {console.log('images', images)}
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake1.png'
            alt='fake'
          />
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake2.png'
            alt='fake'
          />
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake1.png'
            alt='fake'
          />
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake1.png'
            alt='fake'
          />
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake2.png'
            alt='fake'
          />
          <img
            className=' max-w-xs sm:w-4/12 w-1/2 lg:w-8/12'
            src='/fake1.png'
            alt='fake'
          />
        </div>
      </div>
    </Layout>
  );
};

export default gridview;
