import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1424px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return { isBigScreen, isTabletOrMobile };
};
export default useMedia;
