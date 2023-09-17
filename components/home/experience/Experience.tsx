import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Sootchy",
    position: "Frontend Software Engineer",
    time: "2020 - Present",
    location: "Los Angeles, California",
    description:
      "I help build and manage all of the company's online presence and render help to it's sister company The Pacific Group when needed.",
    tech: ["ReactJS", "NextJS", "Tailwind", "Webflow", "WordPress"],
  },
  {
    title: "Microverse",
    position: "Mentor & Code Reviewer",
    time: "2019 - 2020",
    location: "San Francisco, California",
    description:
      "I joined Microverse as a student where i optained a certificate in web development, and after a couple of months, i also got employed by them as a code reviewer and mentor to help students produce good quality work",
    tech: ["React", "Node", "Ruby", "Ruby on Rails", "Postgress"],
  },
  {
    title: "Novetat Group",
    position: "Co-founder and Lead Software Engineer",
    time: "2023 - Present",
    location: "Kampala, Uganda",
    description:
      "As lead software engineer, I manage all aspects of the development, from APIs, Databases and managing servers. I do most of the DevOps involved",
    tech: [
      "Node",
      "Python",
      "S3",
      "RDS",
      "AWS",
      "Docker",
      "Kubernetes",
      "ReactJS",
    ],
  },
];
