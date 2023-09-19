import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Headers from './components/Templates/Headers';
import Season from './pages/Season';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import PosterDetail from './pages/PosterDetail';
import { Provider } from './context/myContext';
import MenuNavbar from './components/Templates/MenuNavbar';
import GlobalLoading from './components/GlobalLoading';
import { useEffect, useState } from 'react';
import Top from './pages/Top';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileUser from './pages/ProfileUser';
import EditProfile from './pages/EditProfile';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <section className={`overflow-hidden bg-black relative`}>
          <Provider>
            <Headers />
            <MenuNavbar />
            {isLoading ? (
              <GlobalLoading />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
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
          </Provider>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
