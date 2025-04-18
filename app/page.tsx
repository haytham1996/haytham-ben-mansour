import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Haytham Ben Mansour",
            url: "https://your-domain.com",
            jobTitle: "Fullstack Developer & Software Engineer",
            knowsAbout: [
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
            ],
            sameAs: [
              "https://github.com/haytham1996",
              "https://www.linkedin.com/in/haytham-ben-mansour-2a0597165",
              "https://x.com/HaythamBenmans4",
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
