import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchAnimesById, fetchAnimesUpComing } from '../api/apiMyAnimeList';
import Star from '../components/Elements/Stars';
import StarsLogo from '../components/Elements/StarsLogo';
import GlobalLoading from '../components/GlobalLoading';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Context } from '../context/myContext';
import MainAnimes from '../components/Fragments/mainAnimes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchAnimesPicturesById } from '../api/apiMyAnimeList';

const PosterDetail = () => {
  const { darkMode } = useContext(Context);
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [titleEng, setTitleEng] = useState('');
  const [img, setImg] = useState('');
  const [season, setSeason] = useState('');
  const [years, setYears] = useState('');
  const [ranked, setRenked] = useState('');
  const [popularity, setPopularity] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [score, setScore] = useState('');
  const [type, setType] = useState('');
  const [source, setSource] = useState('');
  const [episode, setEpisode] = useState('');
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollPosition } = useContext(Context);
  const [pictures, setPictures] = useState([]);
  const [to, setTo] = useState('');

  const location = useLocation();

  const getAnimesById = async () => {
    const response = await fetchAnimesById(id);
    setTitle(response.data.title);
    setTitleEng(response.data.title_english);
    setImg(response.data.images.jpg.large_image_url);
    setSeason(response.data.season);
    setYears(response.data.year);
    setGenres(response.data.genres);
    setScore(response.data.score);
    setRenked(response.data.rank);
    setPopularity(response.data.popularity);
    setSynopsis(response.data.synopsis);
    setType(response.data.type);
    setEpisode(response.data.episodes);
    setSource(response.data.source);
    setStudios(response.data.studios);
    setTrailer(response.data.trailer.embed_url);
    stateLoading();
  };

  const getPictures = async () => {
    const response = await fetchAnimesPicturesById(id);
    setPictures(response.data);
  };

  const navigate = useNavigate();

  const stateLoading = () => {
    setIsLoading(false);
  };

  const handleCardClick = () => {
    if (to?.to === 'backToSearch') {
      navigate(`/search`);
      window.scrollTo(0, 0);
    } else if (to?.to === 'backToHome') {
      navigate(`/`);
      window.scrollTo(0, 700);
    } else if (to?.to === 'backToSeason') {
      navigate(`/season`);
    } else if (to?.to === 'backToTop') {
      navigate(`/top`);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    getAnimesById();
    getPictures();
    setTo(location.state);
  }, [isLoading]);

  return (
    <div className="text-white  mt-16 mb-10 min-h-screen">
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <>
          <div className={`container grid grid-cols-1 justify-center items-center mx-auto max-w-3xl mx-auto  lg:max-w-5xl ${darkMode ? 'text-white' : 'text-black'}`}>
            <section className="w-32 ml-10 md:ml-0">
              <Button variant="outlined" color="error" size="small" endIcon={<ArrowBackIcon />} onClick={handleCardClick}>
                Back
              </Button>
            </section>
            <section className="cardsDetail__header  gap-5 md:flex md:max-w-4xl md:mx-auto mt-6">
              <div className="relative mx-auto cardsDetail__header-img flex  justify-center w-60  md:h-fit">
                <img src={img} alt="" className="w-full h-full" />
                <StarsLogo rating={score} />
              </div>
              <div className="cardsDetail__header-content text-center gap-y-3 md:translate-x-10 justify-center py-10 flex-col md:text-start md:flex ">
                <div className="hidden md:flex stars-score">{score ? <Star stars={score} /> : <h1>-</h1>}</div>
                <div className={`-mt-5 md:mt-0`}>
                  <p className="text-[#aeaeae] text-xs md:text-lg ">
                    <span>{season}</span> <span>{years}</span>
                  </p>
                  <h1 className={`text-lg md:text-4xl`}>{title}</h1>
                  <h4 className="text-md text-[#aeaeae] typograpy-oveflow--line1 md:text-xl">{titleEng}</h4>
                  <ul className="taq flex gap-3 text-center scale-75 justify-center  mt-2 md:scale-100 md:justify-start">
                    {genres.map((data, index) => (
                      <li className={`bg-[var(--primary)] inline-block px-2 py-1 rounded-md text-xs text-white`} key={index}>
                        {data.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rank-section text-white mt-3 flex gap-2 items-center justify-center md:justify-start">
                  <h1 className="px-2 py-1 text-sm text-[var(--primary)]">Rank #{ranked}</h1>
                  <h1 className="px-2 py-1 text-sm text-[var(--primary)]">popularity #{popularity}</h1>
                </div>
              </div>
            </section>
            <section className={`cardsDetail__source max-w-xl mx-auto md:mt-10 mb-6 -mt-4  py-1 rounded-md -translate-x-[8px] md:translate-x-2 ${darkMode ? 'bg-stone-900' : 'bg-stone-300 '}`}>
              <ul className="flex gap-5 px-5 py-1 md:gap-10">
                <li className="text-xs flex gap-y-1 flex-col justify-center">
                  <p className="text-center">type</p>
                  <span className="text-[var(--primary)]  block text-center md:inline text-xs">{type}</span>
                </li>
                <li className="text-xs flex gap-y-1 flex-col justify-center">
                  <p className="text-center">sources</p>
                  <span className="text-[var(--primary)] block text-center md:inline text-xs">{source}</span>
                </li>
                <li className="text-xs flex gap-y-1 flex-col justify-center">
                  <p className="text-center">episode</p>
                  {episode ? <span className="text-[var(--primary)] block text-center md:inline text-xs">{episode}</span> : <span className="text-[var(--primary)] block text-center md:inline text-sm">-</span>}
                </li>
                <li className="text-xs flex gap-y-1 flex-col justify-center">
                  <p className="text-center">studios</p>
                  {studios.map((data, index) => (
                    <span key={index} className="text-[var(--primary)] block text-center md:inline text-xs">
                      {data.name}
                    </span>
                  ))}
                </li>
              </ul>
            </section>
            <section className="cardsDetail__synopsis px-4">
              <span className="border-b-4 border-[var(--primary)]">synopsis</span>
              <p className="mt-2 text-sm">{synopsis}</p>
            </section>
            <section className="cardsDetail__trailer px-4 mt-5">
              <div className=" relative">
                <h4>Trailer</h4>
                <div className="absolute bg-[var(--primary)] w-12 h-1 rounded-sm -bottom-1 left-[1px]"></div>
              </div>
              <div className="mt-3 lg:mt-10">{trailer ? <iframe className="w-full h-[250px] md:h-[300px] lg:h-[400px]" src={trailer}></iframe> : <h1>not found</h1>}</div>
            </section>
            {/* picture */}
            <section className="cardsDetail_pictures mt-10">
              <Swiper
                slidesPerView={6}
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  '@0.75': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  '@1.00': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  '@1.50': {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={10}
              >
                {pictures.map((data, index) => (
                  <SwiperSlide key={index}>
                    <img src={data.jpg.large_image_url} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default PosterDetail;
{
  /* <section className="recomendation mt-10 mb-2">
  <MainAnimes dataFetch={tes} id={21} reload={true} title="recomendation" />
</section>; */
}
