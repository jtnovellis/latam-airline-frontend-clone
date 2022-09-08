import { useEffect, useState } from 'react';

function getBackgroundSize() {
  const { innerWidth: width } = window;
  return { width };
}

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(getBackgroundSize());

  useEffect(() => {
    function handleSize() {
      setWindowWidth(getBackgroundSize());
    }
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  return windowWidth;
}

export default WindowSize;
