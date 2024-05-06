import currencyFormatter from '@/helpers/currencyFormatter.js';
import { navigationContext } from './app';
import { useContext } from 'react';
import navValues from '@/helpers/navValues';

const HouseRow = ({ house }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <tr
      onClick={() => {
        navigate(navValues.house, house);
      }}
    >
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? 'text-primary' : ''}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

export default HouseRow;
