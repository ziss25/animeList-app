import { useContext, useEffect } from 'react';
import Footer from '../components/Templates/Footer';
import Heros from '../components/Templates/Heros';
import Main from '../components/Templates/Main';
import { Context } from '../context/myContext';

const Home = () => {
  const { darkMode } = useContext(Context);
  useEffect(() => {
    console.log(darkMode);
  });
  return (
    <>
      <div className={darkMode ? 'bg-black' : 'bg-white'}>
        <Heros />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
