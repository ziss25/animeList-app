import { Person } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import Input from '../components/Elements/Input';
import { useNavigate } from 'react-router-dom';
import LogoTitle from '../components/Elements/LogoTitle';
import axios from 'axios';
import AlertErorr from '../components/Elements/AlertErorr';
import { Context } from '../context/myContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [textButton, setTextButton] = useState('login');
  const [textErorr, setTextErorr] = useState('');
  const [isErorr, setIsErorr] = useState(false);
  const { setLoginPage } = useContext(Context);
  const { setOpenProfilePopUp } = useContext(Context);

  const url = 'https://jittery-wasp-undershirt.cyclic.cloud';

  const auth = async (e) => {
    e.preventDefault();
    setTextButton('loading...');
    try {
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This here
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setTextErorr(data.msg);
        throw new Error(data.msg);
      }

      const data = await response.json();
      console.log('Berhasil login:', data);
      setLoginPage(false);
      setOpenProfilePopUp(false);
      setTimeout(() => {
        navigate('/');
      });
    } catch (err) {
      console.log(err);
      setIsErorr(true);
    } finally {
      setTextButton('login');
    }
  };

  return (
    <>
      <section className="login bg-black relative z-[9999] min-h-screen flex flex-col items-center text-white justify-center">
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl mb-3" />
        <div className="  bg-zinc-900  border-[#aeaeae] rounded-md w-5/6 md:w-4/6 lg:w-2/6 mx-auto px-5">
          {/* jika gagal login maka text ini tampil maka  */}
          {textErorr && <AlertErorr textErorr={textErorr} />}
          <h1 className="mt-5 text-center text-2xl mb-5">Login</h1>
          <form onSubmit={auth}>
            <Input
              icon={<Person fontSize="small" />}
              title="username" //
              onChange={(e) => {
                setUsername(e.target.value);
                setIsErorr(false);
                setTextErorr('');
              }}
              value={username}
              isErorr={isErorr}
            />
            <Input
              title="password" //
              type="password"
              onChange={(e) => {
                setIsErorr(false);
                setTextErorr('');
                setPassword(e.target.value);
              }}
              value={password}
              isErorr={isErorr}
            />
            <button
              className="btn border-none text-white w-full bg-[var(--primary)] hover:bg-red-700 mt-5" //
              type="submit"
            >
              {textButton}
            </button>
          </form>
          <section className="scale-75">
            <h3 className="text-center mt-5">don't have an account ? </h3>
            <div className="flex justify-center">
              <div>
                <button
                  className="btn btn-link text-[var(--primary)] hover:text-red-700"
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  Register
                </button>
              </div>
              <div>
                <button
                  className="btn btn-link text-[var(--primary)] hover:text-red-700"
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Home
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Login;
