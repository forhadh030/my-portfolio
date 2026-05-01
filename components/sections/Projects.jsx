import { useState } from "react";

import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

const ProjectCard = ({ project, delay }) => {
  const { theme: { tokens: t, fonts } } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <AnimSection delay={delay}>
      <a href={project.link} target="_blank" rel="noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block", textDecoration: "none",
          background: hovered ? t.bgSurfaceHover : t.bgSurface,
          border: `1px solid ${hovered ? t.borderSurfaceHover : t.borderSurface}`,
          borderRadius: t.borderRadiusCard, padding: 32, transition: "all .3s",
          position: "relative", overflow: "hidden",
          transform: hovered ? "translateY(-4px)" : "none",
        }}>
        {/* Hover top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: t.cardTopBar, transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .3s" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <span style={{ fontSize: 11, color: t.textDim, letterSpacing: ".1em", fontFamily: fonts.body }}>{project.year}</span>
          <span style={{ color: t.textAccent, fontSize: 18, opacity: hovered ? 1 : 0, transition: "opacity .2s" }}>↗</span>
        </div>

        <div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 700, color: t.textPrimary, marginBottom: 12, transition: "color .4s" }}>{project.title}</div>
        <div style={{ fontSize: 13, lineHeight: 1.8, color: t.textMuted, marginBottom: 20, fontFamily: fonts.body }}>{project.description}</div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", padding: "4px 10px",
              border: `1px solid ${t.borderTag}`, color: t.textAccent, background: t.bgTag,
              borderRadius: t.borderRadius, fontFamily: fonts.body,
            }}>{tag}</span>
          ))}
        </div>
      </a>
    </AnimSection>
  );
};

export const Projects = () => (
  <Section id="projects" alt>
    <SectionHeader label="Work" title="Selected Projects" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: 24 }}>
      {CONFIG.projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.07} />)}
    </div>
  </Section>
);
