import { useState } from "react";

import { CONFIG } from "../config/portfolioConfig";

const getAccessKey = () => import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

export const useContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = field => e => {
    setError("");
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const submit = async event => {
    event?.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out every field before sending.");
      return;
    }

    const accessKey = getAccessKey();
    if (!accessKey) {
      setStatus("not_configured");
      setError(`Add VITE_WEB3FORMS_ACCESS_KEY to .env.local to enable direct email delivery.`);
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("subject", `Portfolio inquiry from ${form.name}`);
      formData.append("from_name", "Syed Hussain Portfolio");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("botcheck", "");

      const response = await fetch(CONFIG.contactForm.endpoint, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send message.");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please email Syed directly.");
    }
  };

  return { form, status, error, update, submit };
};
