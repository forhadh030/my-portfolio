import { useRef } from "react";

import { useIntersect } from "../../hooks/useIntersect";

export const AnimSection = ({ children, className = "", delay = 0, style = {} }) => {
  const ref = useRef();
  const visible = useIntersect(ref);
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity .6s ${delay}s, transform .6s ${delay}s`,
        ...style,
      }}>
      {children}
    </div>
  );
};
