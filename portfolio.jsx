import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Credentials } from "./components/sections/Credentials";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { ThemeProvider } from "./theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
      <ChatBot />
    </ThemeProvider>
  );
}
