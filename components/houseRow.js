import currencyFormatter from '@/helpers/currencyFormatter.js';

const HouseRow = ({ house: { address, country, price } }) => {
  return (
    <tr>
      <td>{address}</td>
      <td>{country}</td>
      <td className={`${price > 500000 ? 'text-primary' : ''}`}>
        {currencyFormatter.format(price)}
      </td>
    </tr>
  );
};

export default HouseRow;
