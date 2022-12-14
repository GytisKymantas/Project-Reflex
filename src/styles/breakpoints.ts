import { useMediaQuery } from "react-responsive";

export const smMobile = "(max-width: 24rem)"; //384px
export const mobile = "(max-width: 30rem)"; //480px
export const tablet = "(max-width: 48rem)"; //768px
export const smDesktop = "(max-width: 71rem)"; //768px
export const lgDesktop = "(max-width: 90rem)"; //1440px

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  isSmDesktop: useMediaQuery({ query: smDesktop }),
  isLgDesktop: useMediaQuery({ query: lgDesktop }),
});
