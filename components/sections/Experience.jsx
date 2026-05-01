import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

export const Experience = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  return (
    <Section id="experience" alt>
      <SectionHeader label="Career" title="Experience" />
      <AnimSection delay={0.1}>
        <div style={{ maxWidth: 640, position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: t.borderTimeline }} />
          {CONFIG.experience.map(exp => (
            <div key={exp.company} style={{ paddingLeft: 40, paddingBottom: 48, position: "relative" }}>
              <div style={{ position: "absolute", left: -4, top: 4, width: 9, height: 9, borderRadius: "50%", background: t.timelineDot, border: `2px solid ${t.bgPage}`, boxShadow: `0 0 10px ${t.timelineDotGlow}` }} />
              <div style={{ fontSize: 11, letterSpacing: ".1em", color: t.textDim, textTransform: "uppercase", marginBottom: 8, fontFamily: fonts.body }}>{exp.period}</div>
              <div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 700, color: t.textPrimary, marginBottom: 4, transition: "color .4s" }}>{exp.role}</div>
              <div style={{ fontSize: 13, color: t.textAccent, marginBottom: 12, fontFamily: fonts.body }}>{exp.company}</div>
              <div style={{ fontSize: 13, lineHeight: 1.8, color: t.textMuted, fontFamily: fonts.body }}>{exp.description}</div>
            </div>
          ))}
        </div>
      </AnimSection>
    </Section>
  );
};
