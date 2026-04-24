type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    title: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    title: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    title: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    title: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
  {
    title: "Neo4J",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "MySql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
