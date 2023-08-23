import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Headers from './components/Headers';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Popular from './pages/Popular';
import Search from './pages/Search';
import { Provider } from './context/myContext';
import MenuNavbar from './components/MenuNavbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="overflow-hidden  bg-black">
          <Provider>
            <Headers />
            <MenuNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/comingSoon" element={<ComingSoon />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Provider>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
