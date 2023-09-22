import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Context } from '../context/myContext';
import { stringAvatar } from '../utils/utilAvatar';

const UserList = () => {
  const url = 'https://cute-tan-jaguar-cap.cyclic.cloud';
  const { statusLogin, setStatusLogin } = useContext(Context);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [userLogin, setUserLogin] = useState(true);
  const [data, setData] = useState([]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${url}/token`, {
        withCredentials: true,
      });
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
      setToken(response.data.accessToken);
      setUserLogin(true);
    } catch (err) {
      setUserLogin(false);
    }
  };

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${url}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const auth = async () => {
    try {
      const response = await axiosJwt.get(`${url}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setStatusLogin(true);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    refreshToken();
    auth();
  }, [token, statusLogin]);

  return (
    <div className="min-h-screen pt-14  text-white bg-black">
      <div className="max-w-xl px-5 pt-5 mx-auto flex flex-col">
        {userLogin ? (
          data.map((user) => (
            <Card
              className={`mb-5 ${name === user.name ? 'order-first' : null}`}
              sx={{
                backgroundColor: '#18181b',
                color: 'white',
              }}
            >
              <CardHeader
                avatar={
                  user.avatar_url ? (
                    <Avatar
                      sx={{ bgcolor: 'red' }}
                      aria-label="recipe" //
                      src={user.avatar_url}
                    ></Avatar>
                  ) : (
                    <Avatar {...stringAvatar(user.name, 'medium')} />
                  )
                }
                action={<IconButton aria-label="settings"></IconButton>}
                title={
                  name == user.name ? (
                    <div className="flex gap-2">
                      <h1>{user.name}</h1>
                      <span className="px-2 text-xs scale-75 bg-[var(--primary)] rounded-lg">you</span>
                    </div>
                  ) : (
                    user.name
                  )
                }
                subheader={
                  <Typography
                    sx={{
                      color: '#aeaeae',
                      fontSize: 12,
                    }}
                  >
                    {/* optimaze jika description memiliki char panjang */}
                    {user.description.length > 60
                      ? user.description.slice(0, 55 - 3) + '...' //
                      : user.description}{' '}
                  </Typography>
                }
              />
            </Card>
          ))
        ) : (
          <div className="flex  h-[80vh] items-center justify-center">
            <h1 className="text-center text-2xl">silahkan login dlu bray</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
