import useTheme from './useTheme';

const useThemedStyles = (styles: any) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
