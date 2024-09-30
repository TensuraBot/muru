import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetchPopularAnime();
  }, []);

  const fetchPopularAnime = async () => {
    try {
      const response = await fetch('https://aniyoi-api.vercel.app/meta/anilist/popular');
      const data = await response.json();
      setPopularAnime(data.results);
    } catch (error) {
      console.error('Error fetching popular anime:', error);
    }
  };

  return (
    <div className="home">
      <h1>Popular Anime</h1>
      <div className="anime-grid">
        {popularAnime.map((anime) => (
          <Link to={`/anime/${anime.id}`} key={anime.id}>
            <div className="anime-card">
              <img src={anime.image} alt={anime.title.romaji} />
              <h3>{anime.title.romaji}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
