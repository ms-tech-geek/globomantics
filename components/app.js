import { createContext, useCallback, useState } from 'react';
import Banner from './banner';
import navValues from '@/helpers/navValues';
import ComponentPicker from './componentPicker';

const navigationContext = createContext(navValues.home);

const App = () => {
  const [nav, setNav] = useState({
    current: navValues.home,
    navigate,
  });
  const navigate = useCallback(
    (navTo) => setNav({ current: navTo, navigate }),
    []
  );
  return (
    <navigationContext.Provider value={{ nav, navigate }}>
      <Banner>Providing houser all over the world</Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
