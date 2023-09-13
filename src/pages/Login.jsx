import { Password, Person } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import Input from '../components/Elements/Input';
import { useNavigate } from 'react-router-dom';
import LogoTitle from '../components/Elements/LogoTitle';
import axios from 'axios';
import { Context } from '../context/myContext';
import AlertErorr from '../components/Elements/AlertErorr';

const Login = () => {
  const { setToken } = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [textButton, setTextButton] = useState('login');
  const [textErorr, setTextErorr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextButton('loading...');
    try {
      const response = await axios.post('https://proud-fawn-cowboy-boots.cyclic.app/login', { username, password });
      setToken(response.data.accessToken);
      navigate('/');
    } catch (error) {
      setTextErorr(error.response.data.msg);
      setTextButton('login');
      setTimeout(() => {
        setTextErorr('');
      }, 5000);
    }
  };

  const handleInputUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleInputUserPass = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="login  bg-black relative z-[9999] min-h-screen flex flex-col items-center text-white justify-center">
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl mb-3" />
        <div className=" border border-[#aeaeae] rounded-md w-5/6 md:w-4/6 lg:w-2/6 mx-auto  p-3">
          {/* jika gagal login maka text ini tampil maka  */}
          {textErorr && <AlertErorr textErorr={textErorr} />}
          <h1 className="mt-5 text-center text-2xl mb-5">Login</h1>
          <form action="">
            <Input
              icon={<Person />}
              title="userName" //
              onChange={handleInputUserName}
            />
            <Input
              icon={<Password />}
              title="password" //
              type="password"
              onChange={handleInputUserPass}
            />
            <button
              className="btn text-white w-full bg-[var(--primary)] hover:bg-red-700" //
              onClick={handleSubmit}
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
