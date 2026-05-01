import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "./AnimSection";

export const SectionHeader = ({ label, title }) => {
  const { theme: { tokens: t, fonts } } = useTheme();
  return (
    <AnimSection>
      <div style={{ fontSize: 11, letterSpacing: ".2em", color: t.textAccent, textTransform: "uppercase", marginBottom: 12, fontFamily: fonts.body }}>{label}</div>
      <div style={{ fontFamily: fonts.heading, fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: t.textPrimary, marginBottom: 48, transition: "color .4s" }}>{title}</div>
    </AnimSection>
  );
};
