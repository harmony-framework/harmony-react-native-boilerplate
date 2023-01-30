import React, {useState} from 'react';
import {colors, ColorsProps, typography} from 'src/styles';

export const ThemeContext = React.createContext<any>(undefined);

export type Props = {
  children: React.ReactNode;
};

export interface ThemeProps {
  colors: ColorsProps;
  typography: any;
  toggleTheme: Function;
  isLightTheme: boolean;
}

const ThemeProvider: React.FC<Props> = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);

  const theme: ThemeProps = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography: typography,
    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
