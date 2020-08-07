import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';
import Wrapper from '../components/layout/Wrapper';
import Button from '../components/common/Button';

import AuthHOC from '../components/AuthHOC';
import { useSelector } from 'react-redux';
import { selectUser } from '../lib/slices/authSlice';

const IndexPage = () => {
  const user = useSelector(selectUser);
  const [upload, setUpload] = useState(null);

  const onChange = (file) => {
    // var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file[0]);

    reader.onloadend = (e) => {
      setUpload([e.target.result]);
    };
  };

  console.log(user);
  return (
    <Layout>
      <Wrapper>
        <h1 className='text-5xl'>Upload</h1>

        <img className=' max-w-sm' src={upload && upload[0]} />
        <div>
          <label htmlFor='fileUpload'>
            <div>
              <div className='btn-white my-4 cursor-pointer hover:opacity-75 w-36 text-center'>
                Upload An Image
              </div>
            </div>
          </label>
          <input
            hidden
            id='fileUpload'
            type='file'
            onChange={(e) => onChange(e.target.files)}
          />
        </div>

        <Button>Submit</Button>
      </Wrapper>
    </Layout>
  );
};

export default AuthHOC(IndexPage);
