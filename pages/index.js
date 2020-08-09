import React, { useState } from "react";
import faker from 'faker';
import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { withAuthed } from "../components/AuthHOC";
import withApollo from "../lib/withApollo";
import UploadLogo from "../components/misc/UploadLogo";
import { CREATE_ENTRY } from '../lib/graphql/entries'
import { useMutation } from "@apollo/client";

const IndexPage = ({user}) => {
  const [upload, setUpload] = useState(null);
  const [fileObj, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [createEntry, createEntryOptions] = useMutation(CREATE_ENTRY, {
    variables:{
      name: faker.name.findName(),
      type: faker.name.jobType(),
      user_prediction: result,
      user: user.id,
      image: faker.image.technics()
    }
  })
  const randomString = () => {
    const options = ['Hazardous', 'Not-Hazardous', 'None']
    return options[Math.floor(Math.random() * options.length)]
  }
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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setResult(randomString());
            try {
              const res = await createEntry();
            } catch (err) {
              console.log("err", err);
            }
          }}
        >
          <label htmlFor="fileUpload">
            <div>
              <div
                className={`btn-white my-4 cursor-pointer hover:opacity-75 w-36 text-center inline-flex space-x-2 items-center ${
                  createEntryOptions.loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
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
            onChange={(e) => {
              if (createEntryOptions.loading) return;
                if (e.target.files.length) {
                  onChange(e.target.files);
                }
            }}
          />
          {fileObj ? (
            <Button
              type="submit"
              className={`block mx-auto ${
                createEntryOptions.loading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </form>
      </Wrapper>
    </Layout>
  );
};

export default withAuthed(withApollo(IndexPage));
