import React, { useState } from 'react';
import { Password, Person } from '@mui/icons-material';
import Input from '../components/Elements/Input';
import CreateIcon from '@mui/icons-material/Create';
import KeyIcon from '@mui/icons-material/Key';
import LogoTitle from '../components/Elements/LogoTitle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErorr, setIsErorr] = useState(false);
  const [text, setText] = useState('');
  const [textAlert, setTextAlert] = useState('');
  const [textLoading, setTextLoading] = useState('create');
  const [role, setRole] = useState('User');
  const url = 'https://cute-tan-jaguar-cap.cyclic.cloud';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextLoading('loading...');
    // validation jika salah satu dari input kosong
    if (!username || !password || !confPassword || !name) {
      alert('maaf data harus di input kan');
      setTimeout(() => {
        setTextLoading('create');
      }, 1000);
      return;
    }

    // validation char pass and confPass kurang dari 10
    if (password.length < 10) {
      setTextAlert('maaf password dan confPass harus minimal 8char');
      setIsErorr(true);
      return;
    }
    try {
      const response = await fetch(`${url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This here
        body: JSON.stringify({
          name,
          username,
          password,
          confPassword,
          role,
        }),
      });

      const data = await response.json();

      //  jika gagal
      if (!response.ok) {
        console.log('gagal registrasi');
        setTextAlert(data.msg);
        console.log(data.msg);
        throw new Error(data.msg);
      }

      // jika success
      setIsSuccess(true);
      setText(data.msg);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      // tambahan action jika error
      setIsErorr(true);
    } finally {
      setTextLoading('create');
    }
  };

  return (
    <>
      <section className="register bg-black relative z-[9999]  min-h-screen flex items-center text-white flex-col justify-center">
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl mb-3" />
        <div className="  bg-zinc-900 rounded-md w-5/6 md:w-4/6 lg:w-2/6 mx-auto px-3">
          {isSuccess ? (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{text}</span>
            </div>
          ) : null}
          <h1 className="text-center text-[var(--primary)]  p-3 font-bold">{textAlert}</h1>
          <h1 className="mt-2 text-center text-2xl mb-5">Register</h1>
          <form action="">
            <Input
              icon={<Person />} //
              title="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={<CreateIcon />} //
              title="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              icon={<Password />} //
              title="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setIsErorr(false);
                setTextAlert('');
              }}
              isErorr={isErorr}
            />
            <Input
              icon={<KeyIcon />} //
              title="confPassword"
              type="password"
              onChange={(e) => {
                setConfPassword(e.target.value);
                setIsErorr(false);
                setTextAlert('');
              }}
              isErorr={isErorr}
            />
          </form>
          <div className="flex mt-5 mb-2">
            <button
              className="btn border-none text-white w-full bg-[var(--primary)] hover:bg-red-700 " //
              type="submit"
              onClick={handleSubmit}
            >
              {textLoading}
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-link text-[var(--primary)] hover:text-red-700"
              onClick={() => {
                navigate('/');
              }}
            >
              Home ?
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
