import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Btn } from "../common/Btn";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

export const About = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  const codeLines = CONFIG.profileCode;

  return (
    <Section id="about">
      <SectionHeader label="About" title="Who I Am" />
      <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <AnimSection delay={0.1}>
          {CONFIG.about.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: i === 0 ? 16 : 14, lineHeight: 2, color: i === 0 ? t.textSecondary : t.textMuted, marginBottom: 16, fontFamily: fonts.body, transition: "color .4s" }}>
              {para.trim()}
            </p>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <Btn href={CONFIG.github} variant="ghost" style={{ fontSize: 11, padding: "9px 18px" }}>GitHub</Btn>
            <Btn href={CONFIG.resumeUrl} variant="ghost" style={{ fontSize: 11, padding: "9px 18px" }}>Resume</Btn>
          </div>
        </AnimSection>

        <AnimSection delay={0.2}>
          <div style={{
            background: t.bgCode, border: `1px solid ${t.borderSurface}`,
            borderRadius: t.borderRadiusCard, padding: 24, fontSize: 12, lineHeight: 2.1,
            position: "relative", overflow: "hidden", transition: "all .4s",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: t.surfaceTopAccent, opacity: .6 }} />
            <div style={{ color: t.textMuted, fontFamily: fonts.body }}>{"// developer.profile"}</div>
            {codeLines.map(([key, val]) => (
              <div key={key} style={{ fontFamily: fonts.body }}>
                <span style={{ color: t.textCodeKey }}>{key}</span>
                <span style={{ color: t.textMuted }}>: </span>
                <span style={{ color: t.textCode }}>{val}</span>
                <span style={{ color: t.textMuted }}>,</span>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </Section>
  );
};
