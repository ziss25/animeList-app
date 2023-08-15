import { useState } from 'react';
import Headers from './components/Headers';
import Hero from './components/Hero';
import MenuNavbar from './components/MenuNavbar';

function App() {
  const [isOpenMenuList, setIsOpenMenuList] = useState(false);
  return (
    <section className="overflow-hidden">
      <Headers setIsOpenMenuList={setIsOpenMenuList} />
      <MenuNavbar isOpenMenuList={isOpenMenuList} setIsOpenMenuList={setIsOpenMenuList} />
      <Hero />
    </section>
  );
}

export default App;
