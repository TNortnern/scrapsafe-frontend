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
      <div className="w-11/12 px-3 mx-auto lg:w-11/12">
        <div className="flex flex-wrap justify-center text-xs">
          {/* Start of first div */}
          {user && user.entries.length ? (
            <>
              {user.entries.map((entry) => (
                <div className="w-1/2 max-w-xs my-2 sm:w-4/12 lg:w-8/12">
                  <img
                    className=""
                    src={entry.image || "/fake1.png"}
                    alt="fake"
                  />
                  <p>
                    <span className="font-bold">Type: </span>{" "}
                    {entry.actual_result || "Non-Hazardous"}
                  </p>
                  <p>
                    <span className="font-bold">Hazmat:</span>{" "}
                    {entry.user_prediction}
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
