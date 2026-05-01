import { useEffect, useRef, useState } from "react";

import { CONFIG, QUICK_PROMPTS } from "../config/portfolioConfig";
import { useChatApi } from "../hooks/useChatApi";
import { useTheme } from "../theme/ThemeContext";

export const ChatBot = () => {
  const { theme: { tokens: t, fonts } } = useTheme();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, loading, send } = useChatApi();
  const bottomRef = useRef();
  const initials = CONFIG.name.split(" ").map(n => n[0]).join("");

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const handleSend = () => {
    send(input);
    setInput("");
  };
  const handleKey = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const bubbleStyle = role => ({
    maxWidth: "78%", padding: "10px 14px", fontSize: 13, lineHeight: 1.6, fontFamily: fonts.body,
    background: role === "user" ? t.bgChatMsgUser : t.bgChatMsgBot,
    color: role === "user" ? t.textChatMsgUser : t.textChatMsgBot,
    border: `1px solid ${role === "user" ? "transparent" : t.borderChatMsg}`,
    borderRadius: role === "user"
      ? `${t.borderRadiusCard} 2px ${t.borderRadiusCard} ${t.borderRadiusCard}`
      : `2px ${t.borderRadiusCard} ${t.borderRadiusCard} ${t.borderRadiusCard}`,
  });

  const avatarStyle = bg => ({
    width: 24, height: 24, borderRadius: "50%", background: bg, flexShrink: 0, marginTop: 2,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 10, fontFamily: fonts.heading, fontWeight: 700, color: t.chatFabIcon,
  });

  return (
    <>
      {open && (
        <div style={{
          position: "fixed", bottom: 96, right: 32, zIndex: 200, width: 360,
          background: t.bgChatWindow, border: `1px solid ${t.borderChatWindow}`,
          borderRadius: t.borderRadiusChat, overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,.5)", display: "flex", flexDirection: "column",
          maxHeight: 520, animation: "slideIn .25s ease both", transition: "background .4s",
        }}>
          <div style={{ padding: "14px 18px", background: t.bgChatHeader, borderBottom: `1px solid ${t.borderChatHeader}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ ...avatarStyle(t.bgChatAvatar), width: 30, height: 30, fontSize: 13 }}>{initials}</div>
              <div>
                <div style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 13, color: t.textPrimary }}>Ask about {CONFIG.name.split(" ")[0]}</div>
                <div style={{ fontSize: 11, color: t.textGreen }}>Local resume assistant</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: t.textMuted, cursor: "pointer", fontSize: 20, lineHeight: 1 }}>x</button>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row", animation: "fadeUp .2s ease both" }}>
                <div style={avatarStyle(m.role === "user" ? t.bgChatUserAvatar : t.bgChatAvatar)}>{m.role === "user" ? "Y" : initials}</div>
                <div style={bubbleStyle(m.role)}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 8 }}>
                <div style={avatarStyle(t.bgChatAvatar)}>{initials}</div>
                <div style={{ display: "flex", gap: 4, padding: "12px 14px", background: t.bgChatMsgBot, border: `1px solid ${t.borderChatMsg}`, borderRadius: `2px ${t.borderRadiusCard} ${t.borderRadiusCard} ${t.borderRadiusCard}` }}>
                  {[0, .2, .4].map(d => <div key={d} style={{ width: 5, height: 5, borderRadius: "50%", background: t.textAccent, animation: `blink 1.2s ease ${d}s infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 16px 12px" }}>
              {QUICK_PROMPTS.map(q => (
                <button key={q} onClick={() => { send(q); }} style={{
                  fontSize: 11, padding: "5px 10px", background: "transparent",
                  border: `1px solid ${t.borderTag || t.borderSurface}`, color: t.textAccent,
                  borderRadius: 20, cursor: "pointer", fontFamily: fonts.body, transition: "all .2s",
                }}>{q}</button>
              ))}
            </div>
          )}

          <div style={{ padding: 12, borderTop: `1px solid ${t.borderChatHeader}`, display: "flex", gap: 8, alignItems: "flex-end" }}>
            <textarea placeholder="Ask anything..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} rows={1}
              style={{ flex: 1, background: t.bgChatInput, border: `1px solid ${t.borderChatInput}`, borderRadius: t.borderRadius, padding: "10px 12px", color: t.textSecondary, fontFamily: fonts.body, fontSize: 12, outline: "none", resize: "none", minHeight: 40, maxHeight: 100, lineHeight: 1.5, transition: "border-color .2s" }}
              onFocus={e => e.target.style.borderColor = t.borderChatInputFocus}
              onBlur={e => e.target.style.borderColor = t.borderChatInput}
            />
            <button onClick={handleSend} disabled={!input.trim() || loading} style={{
              width: 36, height: 36, background: t.bgBtn, border: "none", borderRadius: t.borderRadius,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              opacity: (!input.trim() || loading) ? .4 : 1, transition: "all .2s", flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.textBtn} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(o => !o)} style={{
        position: "fixed", bottom: 32, right: 32, zIndex: 200, width: 52, height: 52,
        borderRadius: "50%", background: t.bgFab, border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 4px 24px ${t.fabGlow}`, transition: "all .3s", animation: "pulse 2.5s ease infinite",
      }}>
        {open
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.chatFabIcon} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg width="20" height="20" viewBox="0 0 24 24" fill={t.chatFabIcon}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
      </button>
    </>
  );
};
