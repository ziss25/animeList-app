import React, { useContext, useEffect, useState } from 'react';
import bg from '../assets/bg/bg-unsplash.jpg';
import axios from 'axios';
import { Avatar, TextField } from '@mui/material';
import { stringAvatar } from '../utils/utilAvatar';
import EditIcon from '@mui/icons-material/Edit';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/myContext';

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [id, setId] = useState(null);
  const [msg, setMsg] = useState('');
  const [textButton, setTextButton] = useState('save');
  const [textErorr, setTextErorr] = useState('');
  const { openProfilePopUp, setOpenProfilePopUp } = useContext(Context);

  const url = 'https://jittery-wasp-undershirt.cyclic.cloud';

  const getUser = async () => {
    // cek apakah user udah ada token apa belum ... jika ada token berarti history sebelumnya user udah login jika tidak ki rediarect ke home page
    try {
      const response = await axios.get(`${url}/token`, {
        withCredentials: true,
      });
      const decodedToken = await jwtDecode(response.data.accessToken);
      setId(decodedToken.userId);
      console.log(decodedToken);
    } catch (err) {
      navigate('/');
    }
  };

  const imagesUpdate = async () => {
    setTextButton('loading...');
    // init file nya dan masuukan di form data
    const formData = new FormData();
    formData.append('file', images);
    return axios
      .patch(`${url}/users/avatar/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response)
      .catch((err) => err);
  };

  const nameUpdate = async () => {
    setTextButton('loading...');
    const formData = new FormData();
    formData.append('newname', name);
    return axios
      .patch(`${url}/users/username/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response)
      .catch((err) => err);
  };

  const postProfileSave = async () => {
    try {
      const resImage = await imagesUpdate();
      const resName = await nameUpdate();
      // console.log(resImage.data.msg);
      // console.log(resName);
      setMsg('profile success updated');
      setOpenProfilePopUp(false);
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setTextButton('save');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="fixed flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 w-full min-h-full border overflow-scroll bg-black z-[800]">
      {msg && (
        <div className="alert alert-success mb-2 w-[300px] lg:w-[350px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{msg}</span>
        </div>
      )}

      {textErorr && (
        <div className="alert alert-danger  mb-2 w-[300px] lg:w-[350px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{msg}</span>
        </div>
      )}

      <div className="text-white bg-zinc-900 rounded-lg w-[300px] lg:w-[350px] mx-5 mt-10 mb-5 ">
        <div className="header-bg relative h-[150px] flex justify-center bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="pt-14 text-center px-3">
          <div className="mb-5 text-start cursor-pointer">
            <label htmlFor="fileInput" className="file-input-label">
              <EditIcon className="mr-2" />
              upload image
            </label>
            <input onChange={(e) => setImages(e.target.files[0])} className="mt-2" type="file" id="fileInput" name="file" accept=".jpg, .jpeg, .png" />
          </div>
          <div className="mb-5">
            <TextField
              sx={{
                '& label': {
                  color: 'white',
                },
                '& input': {
                  color: 'white',
                  borderColor: 'white',
                  '&:focus': {
                    borderColor: 'white',
                  },
                },
              }}
              fullWidth
              id="standard-basic"
              label="name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <div className="mb-10">
            <TextField
              sx={{
                '& label': {
                  color: 'white',
                },
                '& input': {
                  color: 'white',
                  borderColor: 'white',
                  '&:focus': {
                    borderColor: 'white',
                  },
                },
              }}
              fullWidth
              id="standard-basic"
              label="description"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div> */}
          <div>
            <button className="flex  w-full mt-5 px-2 py-1 mb-2 rounded-md justify-center bg-[var(--primary)]" onClick={postProfileSave}>
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

// setTimeout(() => {
//   navigate('/profile');
// }, 1000);

// console.error('Error:', error);
// setTextErorr(error.data.msg);
