import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { THEMES } from "./themes";

const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState("dark");
  const theme = useMemo(() => THEMES[themeId], [themeId]);

  // Inject Google Fonts + CSS variables whenever theme changes
  useEffect(() => {
    let fontEl = document.getElementById("portfolio-fonts");
    if (!fontEl) {
      fontEl = document.createElement("link");
      fontEl.id = "portfolio-fonts";
      fontEl.rel = "stylesheet";
      document.head.appendChild(fontEl);
    }
    fontEl.href = theme.fonts.google;

    const t = theme.tokens;
    const vars = Object.entries(t).map(([k, v]) => `--${k}: ${v}`).join(";");
    let varEl = document.getElementById("portfolio-vars");
    if (!varEl) {
      varEl = document.createElement("style");
      varEl.id = "portfolio-vars";
      document.head.appendChild(varEl);
    }
    varEl.textContent = `:root { ${vars}; --font-heading: ${theme.fonts.heading}; --font-body: ${theme.fonts.body}; }`;

    document.body.style.background = t.bgPage;
    document.body.style.color = t.textSecondary;
    document.body.style.fontFamily = theme.fonts.body;
    document.body.style.transition = "background .4s, color .4s";
  }, [theme]);

  // Inject static (non-theme) global CSS exactly once
  useEffect(() => {
    if (document.getElementById("portfolio-static")) return;
    const el = document.createElement("style");
    el.id = "portfolio-static";
    el.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: var(--bgPage); }
      ::-webkit-scrollbar-thumb { background: var(--scrollThumb); border-radius: 2px; }
      @keyframes fadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes scanline{ 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
      @keyframes pulse   { 0%,100%{box-shadow:0 0 0 0 var(--pulseShadow)} 70%{box-shadow:0 0 0 8px rgba(0,0,0,0)} }
      @keyframes slideIn { from{opacity:0;transform:translateX(16px)} to{opacity:1;transform:translateX(0)} }
      .section { padding: 96px 0; }
      .container { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
      .fade-up { animation: fadeUp .6s ease both; }
      @media (max-width: 768px) {
        .hide-mobile { display: none !important; }
        .col-2 { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(el);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
};
