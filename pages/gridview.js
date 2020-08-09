import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";

const gridview = () => {
  const [images, setImages] = useState([]);
  const generateFakes = () => {
    const imageChoice = ["/fake1.png", "/fake2.png"];
    const count = 15;
    for (let i = 0; i < count; i++) {
      const randomImageIndex = Math.floor(Math.random() * imageChoice.length);
      console.log("randomImageIndex", randomImageIndex);
      setImages([...images, imageChoice[randomImageIndex]]);
    }
  };
  useEffect(() => {
    generateFakes();
  }, []);
  return (
    <Layout>
      <Wrapper>
        <div className="flex space-y-2 flex-wrap">
          <img src="/fake1.png" alt="fake" />
          <img src="/fake2.png" alt="fake" />
          <img src="/fake1.png" alt="fake" />
          <img src="/fake2.png" alt="fake" />
          <img src="/fake1.png" alt="fake" />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default gridview;
