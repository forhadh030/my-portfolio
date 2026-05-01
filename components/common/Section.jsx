import { useTheme } from "../../theme/ThemeContext";

export const Section = ({ id, children, alt = false, style = {} }) => {
  const { theme: { tokens: t } } = useTheme();
  return (
    <section id={id} className="section"
      style={{ background: alt ? `color-mix(in srgb, ${t.bgPage} 80%, #000 20%)` : t.bgPage, transition: "background .4s", ...style }}>
      <div className="container">{children}</div>
    </section>
  );
};
