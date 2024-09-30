import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AnimeDetail() {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchAnimeInfo();
    fetchEpisodes();
  }, [id]);

  const fetchAnimeInfo = async () => {
    try {
      const response = await fetch(`https://aniyoi-api.vercel.app/meta/anilist/info/${id}`);
      const data = await response.json();
      setAnimeInfo(data);
    } catch (error) {
      console.error('Error fetching anime info:', error);
    }
  };

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(`https://aniyoi-api.vercel.app/meta/anilist/episodes/${id}`);
      const data = await response.json();
      setEpisodes(data);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  if (!animeInfo) return <div>Loading...</div>;

  return (
    <div className="anime-detail">
      <h1>{animeInfo.title.romaji}</h1>
      <img src={animeInfo.image} alt={animeInfo.title.romaji} />
      <p>{animeInfo.description}</p>
      <h2>Episodes</h2>
      <ul className="episode-list">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <a href={`/watch/${id}/${episode.id}`}>Episode {episode.number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeDetail;
