import { CONFIG } from "../../config/portfolioConfig";
import { useTheme } from "../../theme/ThemeContext";
import { formatExperienceYears } from "../../utils/experience";
import { Btn } from "../common/Btn";

export const Hero = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  const experienceYears = formatExperienceYears(CONFIG.careerStartDate);
  const stats = CONFIG.stats.map(stat =>
    stat.dynamic && stat.value === "experienceYears"
      ? { ...stat, value: experienceYears }
      : stat
  );

  return (
    <section id="hero" className="section" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", position: "relative",
      overflow: "hidden", background: t.bgPage, paddingTop: 120, transition: "background .4s",
    }}>
      {/* Layered background effects */}
      <div style={{ position: "absolute", inset: 0, background: t.heroBg, transition: "background .4s" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: t.heroGrid, backgroundSize: "48px 48px", transition: "background .4s" }} />
      {t.heroScanline !== "transparent" && (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: `linear-gradient(transparent, ${t.heroScanline}, transparent)`, animation: "scanline 8s linear infinite" }} />
        </div>
      )}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="fade-up">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, fontSize: 12, letterSpacing: ".2em", color: t.textAccent, textTransform: "uppercase", fontFamily: fonts.body }}>
            <span style={{ display: "block", width: 32, height: 1, background: t.textAccent }} />
            Available for new roles
          </div>

          <h1 style={{ fontFamily: fonts.heading, fontSize: "clamp(42px,7vw,84px)", fontWeight: 800, lineHeight: .95, color: t.textPrimary, letterSpacing: "-.03em", marginBottom: 16, transition: "color .4s" }}>
            {CONFIG.name.split(" ")[0]}<br />
            <span style={{ color: t.textAccent }}>{CONFIG.name.split(" ")[1]}</span>
          </h1>

          <div style={{ fontFamily: fonts.heading, fontSize: "clamp(18px,3vw,28px)", fontWeight: 400, color: t.textSubtle, marginBottom: 24, transition: "color .4s" }}>
            // {CONFIG.title}
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.8, color: t.textMuted, maxWidth: 500, marginBottom: 40, fontFamily: fonts.body }}>
            {CONFIG.tagline}
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn href="#projects" style={{ animation: "pulse 2.5s ease infinite" }}>View My Work</Btn>
            <Btn href="#contact" variant="ghost">Get In Touch</Btn>
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 64, paddingTop: 40, borderTop: `1px solid ${t.borderSurface}` }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 800, color: t.textPrimary }}>{s.value}</div>
                <div style={{ fontSize: 11, letterSpacing: ".1em", color: t.textSubtle, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating status card */}
      <div className="hide-mobile" style={{
        position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)",
        background: t.bgHeroCard, border: `1px solid ${t.borderSurface}`,
        borderRadius: t.borderRadiusCard, padding: 24, width: 220,
        backdropFilter: "blur(20px)", transition: "all .4s",
      }}>
        <div style={{ fontSize: 11, color: t.textGreen, marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.textGreen, display: "inline-block", boxShadow: `0 0 6px ${t.textGreen}` }} />
          Open to work
        </div>
        {CONFIG.heroCard.map(row => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${t.borderSurface}`, fontSize: 11 }}>
            <span style={{ color: t.textSubtle }}>{row.label}</span>
            <span style={{ color: t.textSecondary }}>{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

