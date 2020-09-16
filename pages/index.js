import React, { useState, useEffect } from "react";
import faker from "faker";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { withAuthed } from "../components/AuthHOC";
import UploadLogo from "../components/misc/UploadLogo";
import { CREATE_ENTRY } from "../lib/graphql/entries";
import { useMutation } from "@apollo/client";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthUser,
  selectUser,
  updateUserEntries,
} from "../lib/slices/authSlice";

const IndexPage = ({ user }) => {
  const [upload, setUpload] = useState(null);
  const [fileObj, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [createEntry, createEntryOptions] = useMutation(CREATE_ENTRY, {
    variables: {
      name: user.name,
      type: faker.name.jobType(),
      user_prediction: result,
      user: user ? user.id : "",
      image,
    },
  });
  const onChange = async (file) => {
    setFile(file[0]);
    const fd = new FormData();
    fd.append("file", file[0]);
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://ml.meter-vision.com/analyze",
        fd
      );
      setLoading(false);
      console.log("data", data);
      setResult(data.result);
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = (e) => {
      setUpload([e.target.result]);
    };
  };
  const dispatch = useDispatch();
  const stateUser = useSelector(selectUser);
  useEffect(() => {
    if (!stateUser) {
      dispatch(setAuthUser(user));
    }
  }, []);
      const notify = () => toast.success("New entry created!");

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Wrapper>
        <h1 className="text-5xl">Upload</h1>
        <img className="w-1/3" src={upload && upload[0]} />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            try {
              const fd = new FormData();
              fd.append("files", fileObj);
              const fileupload = await axios.post(
                "https://scrapsafe-be.herokuapp.com/upload",
                fd,
                {
                  headers: {
                    Authorization: `Bearer ${Cookie.get("user_token")}`,
                  },
                }
              );
              setImage(fileupload.data[0].url);
              const {
                data: {
                  createEntry: { entry },
                },
              } = await createEntry();
              console.log("entry", entry);
              dispatch(updateUserEntries(entry));
              setLoading(false);
              notify();
              // alert("new entry!");
            } catch (err) {
              console.log("err", err);
            }
          }}
        >
          <label htmlFor="fileUpload">
            <div>
              <div
                className={`btn-white my-4 cursor-pointer hover:opacity-75 w-36 text-center inline-flex space-x-2 items-center ${
                  createEntryOptions.loading || loading
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
                createEntryOptions.loading || loading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Submit
            </Button>
          ) : (
            ""
          )}
          {loading ? (
            <span className="block font-bold text-center">Loading...</span>
          ) : (
            ""
          )}
        </form>
      </Wrapper>
    </Layout>
  );
};

export default withAuthed(IndexPage);
