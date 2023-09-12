import { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
  initialValue: number;
  targetValue: number;
  duration: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ initialValue, targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0); // Start at 0 initially
  const [animationStarted, setAnimationStarted] = useState(false); // State to track animation

  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          // When the element is in the view and animation hasn't started
          setAnimationStarted(true);

          const increment = (targetValue - initialValue) / (duration / 16);
          let currentValue = initialValue;

          const animationInterval = setInterval(() => {
            currentValue += increment;
            setCurrentValue(Math.min(currentValue, targetValue));

            if (currentValue >= targetValue) {
              clearInterval(animationInterval);
            }
          }, 16);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [initialValue, targetValue, duration, animationStarted]);

  return <span ref={counterRef}>{Math.round(currentValue)}</span>;
};

export default NumberCounter;
