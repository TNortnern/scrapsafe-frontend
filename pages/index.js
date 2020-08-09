import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { withAuthed } from "../components/AuthHOC";
import { useSelector } from "react-redux";
import { selectUser } from "../lib/slices/authSlice";
import withApollo from "../lib/withApollo";
import UploadLogo from "../components/misc/UploadLogo";

const IndexPage = (props) => {
  const [upload, setUpload] = useState(null);
  const [fileObj, setFile] = useState(null);
  const onChange = (file) => {
    setFile(file[0]);
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = (e) => {
      setUpload([e.target.result]);
    };
  };

  return (
    <Layout>
      <Wrapper>
        <h1 className="text-5xl">Upload</h1>
        <img className="w-1/3" src={upload && upload[0]} />
        <div>
          <label htmlFor="fileUpload">
            <div>
              <div className="btn-white my-4 cursor-pointer hover:opacity-75 w-36 text-center inline-flex space-x-2 items-center">
                <UploadLogo />
                {!fileObj ? (
                  <span>Upload An Image</span>
                ) : (
                  <span>Upload a different image</span>
                )}
              </div>
            </div>
          </label>
          <input
            hidden
            id="fileUpload"
            type="file"
            onChange={(e) => onChange(e.target.files)}
          />
        </div>

        {fileObj ? <Button>Submit</Button> : ""}
      </Wrapper>
    </Layout>
  );
};

export default withAuthed(IndexPage);
