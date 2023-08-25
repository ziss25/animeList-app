import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimesById } from '../api/apiMyAnimeList';

const PosterDetail = () => {
  // pull id params menggunakan use Params bawaan dari react-router-dom
  const { id } = useParams();
  const [title, setTitle] = useState('');

  // fetch request berdasarkan id params
  const getAnimesById = async () => {
    const response = await fetchAnimesById(id);
    // lalu di set ke state
    setTitle(response.data.title);
    // untuk sementara title untuk next baru styling nya
  };

  useEffect(() => {
    getAnimesById();
  }, []);

  return (
    <div className="h-screen w-screen text-white flex justify-center items-center text-2xl">
      {/* lalu di output berdasarkan state nya */}
      <h1>{title}</h1>
    </div>
  );
};

export default PosterDetail;

// tambahan aja ni
// jika ia berada di path card/id maka ia akan mengambil params dari useParams lalu ia request data lalu di tangkap habis itu di output kan
// untuk navigate pondasi dah ok tinggal styling aja ntar
