import Header from './Header/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchHits } from '../services/api';
import List from './List/List';
import SearchBar from './SearchBar/SearchBar';
import toast from 'react-hot-toast';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [hitsPerPage, setHitsPerPage] = useState(20);
  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHits(query, page, hitsPerPage, abortController.signal);
        setHits(prev => [...prev, ...data.hits]);
        setTotalPages(data.nbPages - 1);
      } catch (error) {
        console.log(error);
        if (error.code !== 'ERR_CANCELED') {
          setIsError(true);
          toast.error('Try again later...');
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    return () => {
      abortController.abort();
    };
  }, [query, page, hitsPerPage]);

  const handleChangePerPage = e => {
    setHitsPerPage(e.target.value);
    setHits(prev => [...prev].slice(0, prev.length - hitsPerPage));
  };
  const handleChangeQuery = newQuery => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setHits([]);
    setPage(0);
  };
  return (
    <div style={{ paddingBottom: '100px' }}>
      <Header />
      <select value={hitsPerPage} onChange={handleChangePerPage}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <List hits={hits.filter(item => item.title || item.story_title)} />
      {isError && <h2>Server is dead...</h2>}
      {isLoading && <h2>Loading...</h2>}
      {page < totalPages && !isLoading && <button onClick={() => setPage(page + 1)}>Load more</button>}
    </div>
  );
};
export default App;
