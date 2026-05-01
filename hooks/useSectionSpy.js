import { useEffect, useState } from "react";

export const useSectionSpy = () => {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document.querySelectorAll("[id]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
};
