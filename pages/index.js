import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';
import Wrapper from '../components/layout/Wrapper';

const IndexPage = () => {
  const [upload, setUpload] = useState(null);
  return (
    <Layout>
      <Wrapper>
        <h1 className='text-5xl'>Upload</h1>

        <div>
          <label htmlFor='fileUpload'>
            <div>
              <div className='border border-custom m-4 text-custom px-6 cursor-pointer hover:opacity-75'>
                Upload An Image
              </div>
            </div>
          </label>
          <input
            hidden
            id='fileUpload'
            type='file'
            onChange={(e) => console.log(e.target.files)}
          />
        </div>
        {/* 
        <Input ref={inputFile} type='file' id='file' className='hidden' /> */}

        <button className='bg-custom text-white px-6 hover:opacity-75'>
          Submit
        </button>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
