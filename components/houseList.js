import { useState, useEffect } from 'react';
import HouseRow from './houseRow';

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

const HouseList = ({ selectHouse }) => {
  const [houses, setHouses] = useState(houseArray);

  useEffect(() => {
    const fetchHouses = async () => {
      await fetch(`/houses.json`)
        .then((response) => response.json())
        .then((data) => setHouses(data.houses));
    };
    fetchHouses();
  }, []);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: '32 Valley Way, New York',
        country: 'USA',
        price: 1000000,
      },
    ]);
  };
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} house={house} selectHouse={selectHouse} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
