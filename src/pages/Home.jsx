import Hero from '../components/Hero';
import SeasonNow from '../components/SeasonNow';
import TopRatedAnimes from '../components/TopRatedAnimes';
import UpcomingAnimes from '../components/UpComingAnimes';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="p-5 text-white md:p-10">
        <TopRatedAnimes />
        <UpcomingAnimes />
        <SeasonNow />
      </section>
      {/* <div className="h-20 bg-gradient-to-b from-black to-stone-950"></div>
      <div className="bg-stone-950 p-12 text-white">
        <h3 className="text-center">copyRight by ziss25</h3>
      </div> */}
    </>
  );
};

export default Home;
