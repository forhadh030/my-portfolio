import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

export const Skills = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  return (
    <Section id="skills">
      <SectionHeader label="Capabilities" title="Skills & Tools" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
        {CONFIG.skills.map((group, i) => (
          <AnimSection key={group.category} delay={i * 0.07}>
            <div style={{ background: t.bgSurface, border: `1px solid ${t.borderSurface}`, borderRadius: t.borderRadiusCard, padding: 24, transition: "all .4s" }}>
              <div style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", color: t.textAccent, marginBottom: 16, fontFamily: fonts.body }}>{group.category}</div>
              {group.items.map(skill => (
                <div key={skill} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${t.borderSurface}`, fontSize: 13, color: t.textSecondary, fontFamily: fonts.body }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: t.dotColor, flexShrink: 0 }} />
                  {skill}
                </div>
              ))}
            </div>
          </AnimSection>
        ))}
      </div>
    </Section>
  );
};

