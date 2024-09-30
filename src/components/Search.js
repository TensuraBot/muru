import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://aniyoi-api.vercel.app/meta/anilist/${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching anime:', error);
    }
  };

  return (
    <div className="search">
      <h1>Search Anime</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter anime title"
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults.map((anime) => (
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

export default Search;
