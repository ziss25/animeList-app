import Hero from '../components/Hero';
import SeasonNow from '../components/SeasonNow';
import TopRatedAnimes from '../components/TopRatedAnimes';
import UpcomingAnimes from '../components/UpcomingAnimes';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="p-5 text-white md:p-10">
        <TopRatedAnimes />
        <UpcomingAnimes />
        <SeasonNow />
      </section>
    </>
  );
};

export default Home;
