import { useTheme } from "../../theme/ThemeContext";

export const Btn = ({ href, onClick, children, variant = "primary", type = "button", style = {} }) => {
  const { theme: { tokens: t } } = useTheme();
  const base = {
    display: "inline-block", textDecoration: "none", cursor: "pointer", border: "none",
    fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", padding: "12px 24px",
    borderRadius: t.borderRadius, transition: "all .2s", fontFamily: "inherit",
  };
  const variants = {
    primary: { background: t.bgBtn,      color: t.textBtn,       border: `1px solid ${t.borderBtn}` },
    ghost:   { background: "transparent", color: t.textSecondary, border: `1px solid ${t.borderGhostBtn}` },
  };
  const merged = { ...base, ...variants[variant], ...style };
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={merged}>{children}</a>
    : <button type={type} style={merged} onClick={onClick}>{children}</button>;
};

