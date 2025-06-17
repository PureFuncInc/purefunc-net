import WordCloud from "react-d3-cloud";
import React from "react";

const data = [
  // languages
  { text: "JavaScript", value: 300 },
  { text: "TypeScript", value: 300 },
  { text: "Dart", value: 300 },
  { text: "Java", value: 300 },
  { text: "Kotlin", value: 300 },
  { text: "Python", value: 300 },
  // frameworks
  { text: "React.js", value: 500 },
  { text: "Vue.js", value: 500 },
  { text: "Next.js", value: 500 },
  { text: "Nuxt.js", value: 500 },
  { text: "Flutter", value: 500 },
  { text: "Spring Framework", value: 500 },
  { text: "Quarkus", value: 500 },
  { text: "FastAPI", value: 500 },
  { text: "Pyppeteer", value: 500 },
  // domains
  { text: "Generative AI Application", value: 1000 },
  { text: "Mobile Application", value: 1000 },
  { text: "Web Application", value: 1000 },
  { text: "Backend Application", value: 1000 },
  { text: "Full Stack Application", value: 1000 },
  { text: "Automation Testing", value: 1000 },
  { text: "System Design", value: 1000 },
  { text: "DevOps Engineering", value: 1000 },
];

export default function TechniqueBlock() {
  return (
    <section className={`mx-8 hidden md:block`}>
      <WordCloud data={data} height={256} rotate={0} />
    </section>
  );
}
