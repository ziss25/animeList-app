import { Avatar, Button } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stringAvatar } from '../utils/utilAvatar';
import EditIcon from '@mui/icons-material/Edit';
import bg from '../assets/bg/bg-unsplash.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProfileUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const getUser = async () => {
    try {
      const response = await axios.get('https://jittery-wasp-undershirt.cyclic.cloud/token', {
        withCredentials: true,
      });
      const decodedToken = await jwtDecode(response.data.accessToken);
      console.log(decodedToken);
      setName(decodedToken.name);
      setAvatar(decodedToken.avatar_url);
    } catch (err) {
      alert('silahkan login terlebih dahulu');
      navigate('/');
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="fixed flex justify-center items-center  top-0 right-0 left-0 bottom-0 bg-black z-[800]">
      <div className="text-white bg-zinc-900 rounded-lg w-[300px] lg:w-[350px] mx-5 overflow-hidden">
        <div className="header-bg relative h-[150px] flex justify-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
          {avatar ? (
            <div className="absolute top-[70%]  picture mb-5 ">
              <Avatar sx={{ width: 80, height: 80 }} alt={name} src={avatar} />
            </div>
          ) : (
            <div className="absolute top-[70%]  picture mb-5 ">
              <Avatar {...stringAvatar(name, 'large')} />
            </div>
          )}
        </div>
        {/* <img src={bg} alt="" /> */}
        <div className="pt-14 text-center mb-10 px-3">
          <h1 className="text-xl mb-3">{name}</h1>
          <p className="text-zinc-400 text-sm">Pecinta alam dan fotografi. Sering berkeliaran di hutan untuk menangkap keindahan alam. 📷🌿</p>
          <div>
            <button className="flex gap-2 mx-auto mt-10 justify-center hover:border-[var(--primary)]" onClick={() => navigate('edit')}>
              <p className="text-sm">edit profile</p>
              <EditIcon sx={{ color: 'white', fontSize: 20 }} />
            </button>
            <section className="w-32 ml-10 md:ml-0">
              <Button
                variant="outlined"
                color="error"
                size="small"
                endIcon={<ArrowBackIcon />}
                onClick={() => {
                  navigate('/');
                }}
              >
                Back
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
