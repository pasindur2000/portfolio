import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "EPITONI (Promotion App)",
    desc: "Discover personalized offers from your favorite businesses",
    img: "/static/projects/yei-learn.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.ebridge.epitoni&pcampaignid=web_share",
    //github: "https://github.com/Aruni2000/Order-Management-System",
    tags: ["Flutter", "Dart", "Firebase", "GCP", "Neo4J "],
    caseStudy: "/case-studies/oms",
  },
  {
    id: 1,
    title: "Mathru App",
    desc: "AI-Powered Pregnancy Tracker with Smart Guidance Assistant",
    img: "/static/projects/buildfaster.jpeg",
    link: "https://play.google.com/store/search?q=mathru&c=apps",
    tags: ["Flutter", "Dart", "Firebase", "GCP"],
    caseStudy: "/case-studies/case_study_web",
  },
  {
    id: 2,
    title: "Vegetable Disease Detection App",
    desc: "Vegetable Disease Detector using ML and 3D Technology",
    img: "/static/projects/create-html-boilerplate.jpeg",
    link: "",
    github: "https://github.com/pasindur2000/Disease-Detector-",
    tags: ["Flutter", "Dart", "ML", "3D Technology"],
    caseStudy: "/case-studies/case_study_web",
  },
  {
    id: 3,
    title: " Notebook Mobile App",
    desc: "Gem Business Management App | Android & IOS",
    img: "/static/projects/react-emoji-search.jpeg",
    github: "https://github.com/pasindur2000/Gemify_new.git",
    tags: ["Flutter", "Dart", "Firebase", "GCP"],
    caseStudy: "/case-studies/case_study_web",
  },
  {
    id: 4,
    title: "NEO JI Chat",
    desc: "NEO - JI Chat : Real-Time Chat App with AI Agent",
    img: "/static/projects/bitcointemp.jpeg",
    tags: ["Flutter", "Dart", "Firebase", "Websockets"],
    caseStudy: "/case-studies/bitcointemp",
  },

  // {
  //   id: 5,
  //   title: "Logo Collection Vol. 01",
  //   desc: "A professional showcase of logo designs reflecting strong branding, creative skill, and visual harmony.",
  //   img: "/static/projects/8ball-rust.png",
  //     link: "https://www.behance.net/gallery/237867683/Log-Collection-Vol01",
  //   tags: ["Adobe Illustrator", "Figma", "Adobe XD"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe ",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

// Collect all unique tags
export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
