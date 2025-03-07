import { useState, useEffect } from 'react';

export function useViewportScale(baseSize: number, minSize: number, maxSize: number) {
  const [fontSize, setFontSize] = useState(baseSize);

  useEffect(() => {
    function calculateScale() {
      const width = window.innerWidth;
      // Base calculation on viewport width
      let calculatedSize = (width / 1920) * baseSize; // 1920 is our reference width
      
      // Clamp the value between min and max
      calculatedSize = Math.max(minSize, Math.min(maxSize, calculatedSize));
      
      setFontSize(calculatedSize);
    }

    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, [baseSize, minSize, maxSize]);

  return fontSize;
}
