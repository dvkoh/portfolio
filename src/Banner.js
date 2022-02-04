import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Banner = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 9000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key} style={{ width: "100vw" }}>
      <animated.div style={scrolling}>
        <p style={{ width: "100px" }}>{text}</p>
      </animated.div>
      );
    </div>
  );
};

export default Banner;
