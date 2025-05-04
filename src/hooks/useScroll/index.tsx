import { useEffect, useState } from "react";

const useScroll = () => {
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (Math.floor(window.pageYOffset) > 150) {
      setHeaderOnScroll(true);
    } else {
      setHeaderOnScroll(false);
    }
  };
  return headerOnScroll;
};

export default useScroll;
