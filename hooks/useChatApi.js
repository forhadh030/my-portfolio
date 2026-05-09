import { useState } from "react";

import { CONFIG } from "../config/portfolioConfig";
import { formatExperienceYears } from "../utils/experience";

const includesAny = (text, terms) => terms.some(term => text.includes(term));
const normalize = text => text.toLowerCase().replace(/[^\w\s+.#-]/g, " ");

const listSkills = category => {
  const group = CONFIG.skills.find(item => item.category.toLowerCase().includes(category));
  return group ? group.items.join(", ") : "";
};

const summarizeExperience = () => {
  const [latest, ...previous] = CONFIG.experience;
  const previousCompanies = previous.map(item => item.company.split(" - ")[0]).filter((item, index, arr) => arr.indexOf(item) === index);
  return `Syed has ${formatExperienceYears(CONFIG.careerStartDate)} years of full-stack experience. His latest role is ${latest.role} on ${latest.company}, with previous work across ${previousCompanies.join(", ")}.`;
};

const answerQuestion = question => {
  const q = normalize(question);
  const topProjects = CONFIG.projects.slice(0, 3).map(project => project.title).join(", ");

  if (includesAny(q, ["contact", "email", "phone", "reach", "call", "message"])) {
    return `You can reach Syed at ${CONFIG.email} or ${CONFIG.phone}. He is based in ${CONFIG.location}.`;
  }

  if (includesAny(q, ["start", "begin", "notice", "soon", "immediately", "availability", "available", "job status", "status", "open"])) {
    return "Syed is presenting himself as open to full-time roles, contract work, and strong full-stack or cloud-focused opportunities. For exact start date and scheduling, contact him directly at syedf.hussain7@gmail.com.";
  }

  if (includesAny(q, ["reliable", "dependable", "consistent", "trust", "trusted", "responsible", "accountable", "team player", "work ethic"])) {
    return "Syed's background points to accountable team-based delivery: he has supported long-running enterprise projects, CI/CD automation, production troubleshooting, API validation, and technical documentation across multiple roles.";
  }

  if (includesAny(q, ["stack", "tech stack", "technology", "technologies", "tools", "use"])) {
    return `Syed's core stack includes Java, Spring Boot, Angular, React, Python, MySQL/PostgreSQL, AWS, Docker, Kubernetes, Jenkins, and Git-based CI/CD workflows.`;
  }

  if (includesAny(q, ["rag", "ai", "llm", "vector", "embedding", "inference"])) {
    return "Syed engineered a RAG pipeline using Python, FastAPI/Flask, React, and vector databases to query private datasets with context-aware LLM responses.";
  }

  if (includesAny(q, ["cloud", "aws", "devops", "kubernetes", "docker", "deployment", "deploy", "cicd", "ci/cd", "jenkins", "argocd"])) {
    return `Syed works with ${listSkills("cloud")}. He has used Jenkins, ArgoCD, Docker, AWS ECS Fargate, and Kubernetes to automate delivery and support cloud-native deployments.`;
  }

  if (includesAny(q, ["backend", "java", "spring", "api", "rest", "database", "hibernate", "mysql", "postgres"])) {
    return `Syed's backend experience includes ${listSkills("backend")}, plus REST, WSDL integrations, Postman, SOAPUI, MySQL, and PostgreSQL.`;
  }

  if (includesAny(q, ["frontend", "front end", "react", "angular", "ui", "typescript", "javascript", "html", "scss"])) {
    return `Syed's frontend stack includes ${listSkills("frontend")}. He has modernized AngularJS and jQuery components and built responsive Angular 17 interfaces.`;
  }

  if (includesAny(q, ["experience", "work history", "company", "accenture", "lenet", "background", "career"])) {
    return summarizeExperience();
  }

  if (includesAny(q, ["project", "portfolio", "built", "building", "showcase"])) {
    return `Selected work includes ${topProjects}. His projects focus on RAG systems, cloud-native integrations, enterprise modernization, and CI/CD delivery pipelines.`;
  }

  if (includesAny(q, ["cert", "certification", "security+", "comptia", "education", "degree", "school", "college"])) {
    return `Syed earned a ${CONFIG.education[0].degree} from ${CONFIG.education[0].school}. His certifications include ${CONFIG.certifications.join(", ")}.`;
  }

  if (includesAny(q, ["resume", "cv"])) {
    return "You can download Syed's resume from the Resume button in the navigation bar.";
  }

  if (includesAny(q, ["remote", "hybrid", "onsite", "relocate", "location"])) {
    return `Syed is based in ${CONFIG.location}. The portfolio does not specify remote, hybrid, onsite, or relocation preferences, so it is best to ask him directly at ${CONFIG.email}.`;
  }

  if (includesAny(q, ["clearance", "citizen", "authorization", "visa", "sponsorship"])) {
    return `The portfolio does not list work authorization, clearance, or sponsorship details. Please contact Syed directly at ${CONFIG.email} for that information.`;
  }

  return `I can answer questions about Syed's skills, projects, experience, availability, certifications, and contact info. A good place to start: ask about his Java/Spring work, cloud deployments, or RAG experience.`;
};

export const useChatApi = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hey! I'm ${CONFIG.name.split(" ")[0]}'s portfolio assistant. Ask me about his skills, projects, experience, availability, or contact info.` },
  ]);
  const [loading, setLoading] = useState(false);

  const send = async text => {
    if (!text?.trim() || loading) return;
    const userMsg = text.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    window.setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: answerQuestion(userMsg) }]);
      setLoading(false);
    }, 300);
  };

  return { messages, loading, send };
};
