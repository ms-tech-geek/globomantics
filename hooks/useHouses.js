import { useState, useEffect } from 'react';

const houseArray = [
  {
    id: 1,
    address: '12 Valley of Kings, Geneva',
    country: 'Switzerland',
    price: 900000,
  },
  {
    id: 2,
    address: '89 Road of Forks, Bern',
    country: 'Switzerland',
    price: 500000,
  },
];

const useHouses = () => {
  const [houses, setHouses] = useState(houseArray);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch(`/houses.json`);
      const data = await response.json();
      const houses = data.houses;
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  return { houses, setHouses };
};

export default useHouses;
