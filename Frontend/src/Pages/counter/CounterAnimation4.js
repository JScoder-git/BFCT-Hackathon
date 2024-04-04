import React, { useEffect, useState } from 'react';

const CounterAnimation = () => {
  const [count, setCount] = useState(0); // Start from 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, 10000)); 
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-animation" style={{ color: 'white' }}>
      <div className="counter-text">{count}</div>
    </div>
  );
};

export default CounterAnimation;
