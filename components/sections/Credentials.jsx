import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

export const Credentials = () => {
  const { theme: { tokens: t, fonts } } = useTheme();

  return (
    <Section id="credentials">
      <SectionHeader label="Credentials" title="Education & Certifications" />
      <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <AnimSection delay={0.1}>
          <div style={{ background: t.bgSurface, border: `1px solid ${t.borderSurface}`, borderRadius: t.borderRadiusCard, padding: 24, transition: "all .4s" }}>
            <div style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", color: t.textAccent, marginBottom: 16, fontFamily: fonts.body }}>Education</div>
            {CONFIG.education.map(item => (
              <div key={item.degree}>
                <div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 700, color: t.textPrimary, marginBottom: 6 }}>{item.degree}</div>
                <div style={{ fontSize: 13, color: t.textMuted, fontFamily: fonts.body }}>{item.school}</div>
                <div style={{ fontSize: 11, color: t.textDim, fontFamily: fonts.body, marginTop: 8 }}>{item.period}</div>
              </div>
            ))}
          </div>
        </AnimSection>

        <AnimSection delay={0.15}>
          <div style={{ background: t.bgSurface, border: `1px solid ${t.borderSurface}`, borderRadius: t.borderRadiusCard, padding: 24, transition: "all .4s" }}>
            <div style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", color: t.textAccent, marginBottom: 16, fontFamily: fonts.body }}>Certifications</div>
            {CONFIG.certifications.map(cert => (
              <div key={cert} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: `1px solid ${t.borderSurface}`, fontSize: 13, color: t.textSecondary, fontFamily: fonts.body }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: t.dotColor, flexShrink: 0 }} />
                {cert}
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </Section>
  );
};
