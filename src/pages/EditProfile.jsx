import React, { useContext, useEffect, useState } from 'react';
import bg from '../assets/demon-slayer-1.png';
import axios from 'axios';
import { Avatar, Button, TextField } from '@mui/material';
import { stringAvatar } from '../utils/utilAvatar';
import EditIcon from '@mui/icons-material/Edit';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/myContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const url = 'https://cute-tan-jaguar-cap.cyclic.cloud';

  const getUser = async () => {
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
    return axios
      .patch(
        `${url}/users/username/${id}`,
        {
          newname: name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => response)
      .catch((err) => err);
  };

  const descriptionUpdate = async () => {
    setTextButton('loading...');
    return axios
      .patch(
        `${url}/users/description/${id}`,
        {
          description: description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => response)
      .catch((err) => err);
  };

  const postProfileSave = async () => {
    try {
      if (images) {
        const resImage = await imagesUpdate();
      }
      if (name) {
        const resName = await nameUpdate();
      }
      if (description) {
        const resDescription = await descriptionUpdate();
      }
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
    <div className="fixed flex flex-col  items-center top-0 right-0 left-0 bottom-0  min-h-screen overflow-y-auto overflow-x-hidden pt-3  overflow-scroll bg-black z-[800]">
      {msg && (
        <div className="alert alert-success  mb-2 w-[300px] lg:w-[350px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{msg}</span>
        </div>
      )}

      {textErorr && (
        <div className="alert alert-danger  mb-1 w-[300px] lg:w-[350px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{msg}</span>
        </div>
      )}

      <div className="text-white bg-zinc-900 rounded-lg w-[300px] md:w-[350px] mb-5 ">
        <div className="header-bg relative h-[150px] rounded-lg flex justify-center bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="pt-14 text-center p-5">
          <div className="mb-8 text-start cursor-pointer">
            <label htmlFor="fileInput" className="file-input-label">
              <EditIcon className="mr-2" />
              upload avatar
            </label>
            <input onChange={(e) => setImages(e.target.files[0])} className="mt-2" type="file" id="fileInput" name="file" accept=".jpg, .jpeg, .png" />
          </div>
          <div className="mb-8">
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
              label="change name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-10 text-white">
            <TextField
              sx={{
                '& label': {
                  color: 'white',
                },
                '& .MuiInputBase-root': {
                  color: 'white',
                  borderBottomColor: 'white',
                },
              }}
              fullWidth
              label="change description"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
            />
          </div>
          <div>
            <button className="flex  w-full mt-5 px-2 py-1 mb-2 rounded-md justify-center bg-[var(--primary)]" onClick={postProfileSave}>
              {textButton}
            </button>
            <Button
              color="error"
              size="small"
              endIcon={<ArrowBackIcon />}
              onClick={() => {
                navigate('/profile');
              }}
            >
              Back
            </Button>
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
