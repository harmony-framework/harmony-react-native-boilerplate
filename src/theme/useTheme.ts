import {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
