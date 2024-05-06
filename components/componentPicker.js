import navValues from '../helpers/navValues';
import House from './house';
import HouseList from './houseList';

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      return <h3>No Component found for {currentNavLocation}</h3>;
  }
};

export default ComponentPicker;
