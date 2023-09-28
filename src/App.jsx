import { Route, Routes } from 'react-router-dom';
import Headers from './components/Templates/Headers';
import Season from './pages/Season';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import PosterDetail from './pages/PosterDetail';
import { Context, Provider } from './context/myContext';
import MenuNavbar from './components/Templates/MenuNavbar';
import GlobalLoading from './components/GlobalLoading';
import { useContext, useEffect, useState } from 'react';
import Top from './pages/Top';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileUser from './pages/ProfileUser';
import EditProfile from './pages/EditProfile';
import UserList from './pages/UserList';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode } = useContext(Context);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <section className={`overflow-hidden relative ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <Headers />
        <MenuNavbar />
        {isLoading ? (
          <GlobalLoading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/top" element={<Top />} />
            <Route path="/season" element={<Season />} />
            <Route path="/search" element={<Search />} />
            <Route path="/poster/:id" element={<PosterDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </section>
    </>
  );
}

export default App;
