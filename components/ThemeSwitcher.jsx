import { useEffect, useRef, useState } from "react";

import { THEMES } from "../theme/themes";
import { useTheme } from "../theme/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, themeId, setThemeId } = useTheme();
  const t = theme.tokens;
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = e => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        background: t.bgSurface, border: `1px solid ${t.borderSurface}`, color: t.textSecondary,
        fontFamily: theme.fonts.body, fontSize: 11, letterSpacing: ".08em", padding: "7px 12px",
        borderRadius: t.borderRadius, cursor: "pointer", display: "flex", alignItems: "center",
        gap: 6, transition: "all .2s", whiteSpace: "nowrap",
      }}>
        <span>{theme.emoji}</span>
        <span>{theme.label}</span>
        <span style={{ opacity: .5, fontSize: 9 }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 300,
          background: t.bgChatWindow, border: `1px solid ${t.borderChatWindow}`,
          borderRadius: t.borderRadiusChat, overflow: "hidden", minWidth: 190,
          boxShadow: "0 16px 40px rgba(0,0,0,.4)", animation: "slideIn .15s ease both",
        }}>
          {Object.values(THEMES).map((th, i, arr) => (
            <button key={th.id} onClick={() => { setThemeId(th.id); setOpen(false); }} style={{
              width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 16px",
              background: th.id === themeId ? t.bgSurface : "transparent",
              border: "none",
              borderBottom: i < arr.length - 1 ? `1px solid ${t.borderChatHeader}` : "none",
              color: th.id === themeId ? t.textAccent : t.textSecondary,
              fontFamily: theme.fonts.body, fontSize: 12, cursor: "pointer", textAlign: "left",
              transition: "background .15s",
            }}>
              <span>{th.emoji}</span>
              <span>{th.label}</span>
              {th.id === themeId && <span style={{ marginLeft: "auto", color: t.textAccent, fontSize: 10 }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

