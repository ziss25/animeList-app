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
  const { darkMode } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [id, setId] = useState(null);
  const [msg, setMsg] = useState('');
  const [textButton, setTextButton] = useState('update profile');
  const [textErorr, setTextErorr] = useState('');
  const [nameErrorText, setNameError] = useState(false);
  const [desErrorText, setDesError] = useState(false);
  const { openProfilePopUp, setOpenProfilePopUp } = useContext(Context);
  const url = 'https://cute-tan-jaguar-cap.cyclic.cloud';

  const getUser = async () => {
    try {
      const response = await axios.get(`${url}/token`, {
        withCredentials: true,
      });
      const decodedToken = await jwtDecode(response.data.accessToken);
      setId(decodedToken.userId);
      setSelectedFile(decodedToken.avatar_url);
      setNameUser(decodedToken.name);
    } catch (err) {
      navigate('/');
    }
  };

  const imagesUpdate = async () => {
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
    setTextButton('loading...');
    try {
      // validation jika inputan nama panjang nya lebih dari 30 char
      if (name.length >= 30) {
        setTextErorr('Sorry, the name must be less than 30 characters');
        setNameError(true);
        throw new Erorr();
      }
      if (description.length >= 120) {
        setTextErorr('Sorry, the description must be less than 120 characters');
        setDesError(true);
        throw new Erorr();
      }

      // update jika ada inputan
      // jika terdapat image maka kita update
      if (images) {
        const resImage = await imagesUpdate();
      }
      // jika terdapat inputan name maka kita update
      if (name) {
        const resName = await nameUpdate();
      }
      // jika terdapat inputan description  maka kita update
      if (description) {
        const resDescription = await descriptionUpdate();
      }

      console.log({ images, name, description });
      setMsg('profile success updated');
      setOpenProfilePopUp(false);
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setTextButton('update profile');
    }
  };

  function loaderImg(event) {
    // Baca dan tampilkan gambar
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={`fixed  top-0 right-0 left-0 bottom-0 z-[800] min-h-screen overflow-y-auto  overflow-x-hidden overflow-y-auto ${darkMode ? 'bg-black ' : 'bg-white'} `}>
      <div className={`text-white h-full overflow-auto max-w-xl mx-auto md:mt-20 rounded-lg  md:h-max  ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
        <div className="text-center p-5 flex flex-col justify-between  h-full">
          {msg && (
            <div className="alert alert-success  mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-md xl:text-lg">{msg}</span>
            </div>
          )}

          {textErorr && (
            <div className=" bg-[var(--primary)] text-white alert flex  mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-md xl:text-lg">{textErorr}</span>
            </div>
          )}
          <div className={`${darkMode ? ' text-white' : 'text-black'}`}>
            <div className="mb-8 text-start flex flex-col items-center">
              <label htmlFor="fileInput" id="file-label" className="flex flex-col items-center cursor-pointer" style={{ cursor: 'pointer' }}>
                {selectedFile ? (
                  <img
                    src={selectedFile} //
                    alt=""
                    className="rounded-full w-20 h-20 object-cover"
                  />
                ) : (
                  <Avatar
                    {...stringAvatar(nameUser, 'large')}
                    onClick={() => {
                      setOpenProfilePopUp(!openProfilePopUp);
                    }}
                  />
                )}
                change avatar
              </label>
              <input
                onChange={(e) => {
                  loaderImg(e);
                  // save gambar ke state jika click save maka akan di update
                  setImages(e.target.files[0]);
                }}
                className="mt-2 text-wrap hidden"
                type="file"
                id="fileInput"
                name="file"
                accept=".jpg, .jpeg, .png"
              />
            </div>
            <div className="mb-8">
              <TextField
                sx={{
                  '& label': {
                    color: darkMode ? 'white' : 'black',
                  },
                  '& input': {
                    color: darkMode ? 'white' : 'black',
                    borderColor: darkMode ? 'white' : 'black',
                    '&:focus': {
                      borderColor: darkMode ? 'white' : 'black',
                    },
                  },
                }}
                fullWidth
                id="standard-basic"
                label="change name"
                variant="standard"
                placeholder="maximum 30 characters"
                error={nameErrorText ? 'error' : ''}
                onChange={(e) => {
                  setTextErorr('');
                  setNameError(false);
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-10 text-white">
              <TextField
                sx={{
                  '& label': {
                    color: darkMode ? 'white' : 'black',
                  },
                  '& .MuiInputBase-root': {
                    color: darkMode ? 'white' : 'black',
                    borderBottomColor: darkMode ? 'white' : 'black',
                  },
                }}
                fullWidth
                label="change description"
                placeholder="maximum 120 characters"
                variant="standard"
                onChange={(e) => {
                  setTextErorr('');
                  setDesError(false);
                  setDescription(e.target.value);
                }}
                multiline
                rows={4}
                error={desErrorText ? 'error' : ''}
              />
            </div>
          </div>
          <div className="">
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
