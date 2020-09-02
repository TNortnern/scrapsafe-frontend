import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/layout/Wrapper';

const gridview = ({ user }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('user', user)
  }, []);
  return (
    <Layout>
      <div className="w-11/12 lg:w-11/12  mx-auto px-3">
        <div className="flex flex-wrap justify-center text-xs">
          {/* Start of first div */}
          {user && user.entries.length ? (
            <>
              {user.entries.map((entry) => (
                <div className="max-w-xs sm:w-4/12 w-1/2 lg:w-8/12 my-2">
                  <img className=" " src="/fake1.png" alt="fake" />
                  <p>
                    <span className="font-bold">Type: </span> { entry.type }
                  </p>
                  <p>
                    <span className="font-bold">Hazmat:</span> { entry.user_prediction }
                  </p>
                </div>
              ))}
            </>
          ) : (
            <span>You haven't made any entries yet.</span>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default gridview;
