import { CONFIG } from "../../config/portfolioConfig";
import { useContactForm } from "../../hooks/useContactForm";
import { useTheme } from "../../theme/ThemeContext";
import { AnimSection } from "../common/AnimSection";
import { Btn } from "../common/Btn";
import { Section } from "../common/Section";
import { SectionHeader } from "../common/SectionHeader";

export const Contact = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  const { form, status, error, update, submit } = useContactForm();

  const inputStyle = {
    width: "100%", background: t.bgInput, border: `1px solid ${t.borderInput}`,
    borderRadius: t.borderRadius, padding: "12px 16px", color: t.textSecondary,
    fontFamily: fonts.body, fontSize: 13, outline: "none", transition: "border-color .2s",
  };

  const contactLinks = [
    { icon: "@", label: CONFIG.email, href: `mailto:${CONFIG.email}` },
    { icon: "tel", label: CONFIG.phone, href: `tel:${CONFIG.phone}` },
    { icon: "GH", label: "GitHub", href: CONFIG.github },
  ];

  return (
    <Section id="contact">
      <SectionHeader label="Contact" title="Let's Build Something" />
      <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <AnimSection delay={0.1}>
          <p style={{ fontSize: 14, lineHeight: 1.9, color: t.textMuted, marginBottom: 28, fontFamily: fonts.body }}>
            I'm open to full-time roles, contract work, and interesting side projects. Send a note and it will go directly to my inbox once the form service is configured.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {contactLinks.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: t.textMuted, textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => e.currentTarget.style.color = t.textAccent}
                onMouseLeave={e => e.currentTarget.style.color = t.textMuted}>
                <span style={{ width: 32, height: 32, border: `1px solid ${t.borderSurface}`, borderRadius: t.borderRadius, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: t.textAccent, flexShrink: 0 }}>{link.icon}</span>
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: t.textDim, fontFamily: fonts.body }}>
              <span style={{ width: 32, height: 32, border: `1px solid ${t.borderSurface}`, borderRadius: t.borderRadius, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: t.textDim, flexShrink: 0 }}>in</span>
              {CONFIG.linkedinStatus}
            </div>
          </div>
        </AnimSection>

        <AnimSection delay={0.15}>
          {status === "sent" ? (
            <div style={{ padding: 32, textAlign: "center", color: t.textGreen, fontFamily: fonts.heading, fontSize: 22, fontWeight: 700 }}>
              Message sent<br />
              <span style={{ fontSize: 13, color: t.textMuted, fontFamily: fonts.body, fontWeight: 400 }}>Thanks for reaching out. I'll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[["name","Name","text","Your name"],["email","Email","email","your@email.com"]].map(([id, label, type, ph]) => (
                <div key={id}>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: t.textSubtle, marginBottom: 8, fontFamily: fonts.body }}>{label}</label>
                  <input name={id} type={type} placeholder={ph} value={form[id]} onChange={update(id)} required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = t.borderInputFocus}
                    onBlur={e => e.target.style.borderColor = t.borderInput} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: t.textSubtle, marginBottom: 8, fontFamily: fonts.body }}>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={update("message")} required
                  style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = t.borderInputFocus}
                  onBlur={e => e.target.style.borderColor = t.borderInput} />
              </div>
              <Btn type="submit" style={{ alignSelf: "flex-start", opacity: status === "sending" ? .5 : 1, pointerEvents: status === "sending" ? "none" : "auto" }}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Btn>
              {error && (
                <div style={{ fontSize: 12, lineHeight: 1.6, color: status === "not_configured" ? t.textWarning : t.textMuted, fontFamily: fonts.body }}>
                  {error}
                </div>
              )}
            </form>
          )}
        </AnimSection>
      </div>
    </Section>
  );
};
