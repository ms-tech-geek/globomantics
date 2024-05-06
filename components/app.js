import { createContext, useCallback, useState } from 'react';
import Banner from './banner';
import navValues from '@/helpers/navValues';
import ComponentPicker from './componentPicker';

const navigationContext = createContext(navValues.home);

const App = () => {
  const navigate = useCallback((navTo, param) => {
    setNav({ current: navTo, param, navigate });
  }, []);

  const [nav, setNav] = useState({
    current: navValues.home,
    navigate,
  });

  return (
    <navigationContext.Provider value={nav}>
      <Banner>Providing houser all over the world</Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
