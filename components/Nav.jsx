import { CONFIG, NAV_ITEMS } from "../config/portfolioConfig";
import { useSectionSpy } from "../hooks/useSectionSpy";
import { useTheme } from "../theme/ThemeContext";
import { Btn } from "./common/Btn";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  const active = useSectionSpy();
  const { theme: { tokens: t, fonts } } = useTheme();

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "18px 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: t.bgNav, backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${t.borderNav}`, transition: "all .3s",
    }}>
      <a href="#hero" style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, color: t.textPrimary, textDecoration: "none", letterSpacing: "-.02em", transition: "color .4s" }}>
        {CONFIG.name.split(" ")[0]}<span style={{ color: t.textAccent }}>.</span>
      </a>

      <ul className="hide-mobile" style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {NAV_ITEMS.map(n => (
          <li key={n}>
            <a href={`#${n.toLowerCase()}`} style={{
              fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
              textDecoration: "none", fontFamily: fonts.body,
              color: active === n.toLowerCase() ? t.textAccent : t.textMuted,
              transition: "color .2s",
            }}>{n}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <ThemeSwitcher />
        <Btn href={CONFIG.resumeUrl} variant="ghost" style={{ fontSize: 11, padding: "7px 14px" }} className="hide-mobile">Resume ↗</Btn>
      </div>
    </nav>
  );
};

