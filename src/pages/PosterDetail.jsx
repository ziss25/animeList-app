import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimesById } from '../api/apiMyAnimeList';
import Star from '../components/Elements/Stars';
import StarsLogo from '../components/Elements/starsLogo';
import Title from '../components/Elements/Title';
import GlobalLoading from '../components/GlobalLoading';

const PosterDetail = () => {
  // pull id params menggunakan use Params bawaan dari react-router-dom
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
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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
    stateLoading();
  };

  const stateLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getAnimesById();
    console.log(studios);
  }, [isLoading]);

  return (
    <div className="text-white mt-16 px-5 md:mt-28 mb-10">
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <>
          <div className="grid grid-cols-1 justify-center items-center">
            <div className="cardsDetail__header  gap-5 md:flex md:max-w-4xl md:mx-auto">
              <div className="relative mx-auto  cardsDetail__header-img flex  justify-center w-60  md:h-fit">
                <img src={img} alt="" className="w-full h-full" />
                <StarsLogo rating={score} />
              </div>
              <div className="cardsDetail__header-content text-center gap-y-3 md:translate-x-10 justify-center py-10 flex-col md:text-start md:flex ">
                <div className="hidden md:flex stars-score">{score ? <Star stars={score} /> : <h1>-</h1>}</div>
                <div className="-mt-5 md:mt-0">
                  <p className="text-[#aeaeae] text-xs md:text-lg ">
                    <span>{season}</span> <span>{years}</span>
                  </p>
                  <h1 className="text-lg md:text-4xl">{title}</h1>
                  <h4 className="text-md text-[#aeaeae] typograpy-oveflow--line1 md:text-xl">{titleEng}</h4>
                  <ul className="taq flex gap-3 text-center justify-center md:justify-start mt-2">
                    {genres.map((data, index) => (
                      <li className="bg-[var(--primary)] inline-block px-2 py-1 rounded-md text-xs" key={index}>
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
            </div>
            <div className="cardsDetail__source max-w-4xl mx-auto md:mt-10 mb-10 bg-stone-900 px-3 py-1 rounded-md md:translate-x-2">
              <ul className="flex gap-10">
                <li className="">
                  type <span className="text-[var(--primary)] block text-center md:inline text-sm">{type}</span>
                </li>
                <li>
                  sources <span className="text-[var(--primary)] block text-center md:inline text-sm">{source}</span>
                </li>
                <li>
                  episode
                  {episode ? <span className="text-[var(--primary)] block text-center md:inline text-sm">{episode}</span> : <span className="text-[var(--primary)] block text-center md:inline text-sm">-</span>}
                </li>
              </ul>
            </div>
            <div className="cardsDetail__synopsis max-w-4xl mx-auto">
              <span className="border-b-4 border-[var(--primary)]">synopsis</span>
              <p className="mt-2 text-sm">{synopsis}</p>
            </div>
            <div className="cardsDetail__devolpment max-w-4xl mx-auto bg-stone-900 mt-5">
              <h5>
                studios :
                {studios.map((data, index) => (
                  <span key={index} className="ml-3 text-[var(--primary)] ">
                    {data.name}
                  </span>
                ))}
              </h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PosterDetail;
