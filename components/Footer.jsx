import { CONFIG } from "../config/portfolioConfig";
import { useTheme } from "../theme/ThemeContext";

export const Footer = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  return (
    <footer style={{ padding: 32, textAlign: "center", borderTop: `1px solid ${t.borderSurface}`, fontSize: 11, color: t.textDim, letterSpacing: ".05em", background: t.bgPage, transition: "all .4s", fontFamily: fonts.body }}>
      <span style={{ fontFamily: fonts.heading, fontWeight: 700, color: t.textSubtle }}>{CONFIG.name}</span>
      {" "}- Built with React · {new Date().getFullYear()}
    </footer>
  );
};
