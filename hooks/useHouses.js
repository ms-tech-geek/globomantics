import { useState, useEffect } from 'react';
import useGetRequest from './useGetRequest';

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const { get, loadingState } = useGetRequest(`./houses.json`);

  useEffect(() => {
    const fetchHouses = async () => {
      const result = await get();
      setHouses(result.houses);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
