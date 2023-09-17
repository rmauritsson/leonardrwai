import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Le Rambouillet",
    imgSrc: "project-imgs/lerambouillet.png",
    code: "https://www.github.com",
    projectLink: "https://lerambouillet.com/",
    tech: ["Wordpress", "Elementor", "phpMyAdmin", "MySQL"],
    description:
      "Le Rambouillet is the provider of the best luxury concierge services in Los Angeles and lifestyle management.",
    modalContent: (
      <>
        <p>
          Le Rambouillet provides you with a unique range of essential lifestyle
          services including Private Travel Services, Yacht/Watercraft Services,
          Aircraft Services, Personal/Corporate Concierge Services,
          Estate/Property Consultation, 24/7 Request Available, Standby
          Lifestyle Managers, Private Security Services, VIP Shopping and
          Premium Event Access & VIP Support
        </p>
        <p>
          I developed this in WordPress because the client wanted a CMS where
          they could regurlary update their website content by themselves.{" "}
          {":)"}
        </p>
        <p>
          I chose the theme and customized it to fit the clients needs, i had to
          design custom plugins to support memberships.
        </p>
      </>
    ),
  },
  {
    title: "app.sootchy.com",
    imgSrc: "project-imgs/appSootchy.png",
    //code: "https://www.github.com",
    projectLink: "https://app.sootchy.com/signup",
    tech: ["ReactJS", "Azure", "Tailwind", "AWS"],
    description:
      "A revolutionary wealth growth platform made for the underserved and underrepresented children in America.",
    modalContent: (
      <>
        <p>
          A revolutionary wealth growth platform made for the underserved and
          underrepresented children in America.
        </p>

        <p>
          I worked on all aspects of the frontend of this application from
          creating and managing user profiles, transaction widgets among others
          but primarily focused on presenting a Udemy-kind of platform for their
          financial literacy program dubbed 'Money Academy'.
        </p>
      </>
    ),
  },

  {
    title: "Freemium Traveller",
    imgSrc: "project-imgs/freemiumTraveller.png",
    //code: "https://www.github.com",
    projectLink: "https://www.freemiumtraveler.com/",
    tech: ["Wordpress", "Elementor", "phpMyAdmin", "MySQL"],
    description:
      "A business portfolio for a seasoned expert on business, credit and travel rewards. I handle everything on this project.",
    modalContent: (
      <>
        <p>
          Freemium TRavellers helps clients fly in Business and First-Class for
          less than the price of economy.
        </p>

        <p>
          I developed this in WordPress because the client wanted a CMS where
          they could regurlary update their website content by themselves.{" "}
          {":)"}
        </p>
        <p>I chose the theme and customized it to fit the clients needs.</p>
      </>
    ),
  },

  {
    title: "Melroselab",
    imgSrc: "project-imgs/melroselab.png",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Webflow"],
    description:
      "Melrose lab are a no-code product studio located in Los Angeles, California who specialzie in quickly and affordably launching software products for businesses of all sizes.",
    modalContent: (
      <>
        <p>
          As a studio, they have become regular clients for most projects i cant
          share due to NDA signed.
        </p>
        <p>This was designed to showcase a portfolio of their own wokrs</p>
        <p>
          I designed this myself with emhasis on a minimalistic design and
          transitions
        </p>
        <p>
          The work was done in webflow so that the client is able to update
          their content regularly
        </p>
      </>
    ),
  },
  {
    title: "Coriket (COMING SOON)",
    imgSrc: "project-imgs/comingsoon.png",
    code: "https://www.github.com",
    projectLink: "http://coriket.com/",
    tech: ["Node", "React Js", "Docker", "Kubernetes", "Tailwind"],
    description:
      "A real-time ticketing app for event goers. This app is my baby, designed and built on my own. I will say more when i finally realise it",
    modalContent: (
      <>
        <p>
          More on this when i finally release it alonside the family App i am
          creating for my family
        </p>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },

  {
    title: "Other Websites done",
    imgSrc: "project-imgs/morework.png",
    code: "https://www.github.com",
    projectLink: "http://leonardrwai.com",
    tech: ["Node", "React Js", "WordPress", "Webflow", "React Native"],
    description:
      "Here i list most of the websites i've done (those that i can remember atleast)",
    modalContent: (
      <>
        <p>
          After close 10 years of buidling websites, i hardly remember all my
          freelance work but these are some of those that come to mind.
        </p>

        <p>
          I worked with <a href="https://freemanmovers.com/">Freeman Movers</a>{" "}
          on one of the first iterations of their website which has since been
          changed as they wanted to go in a different direction. I still
          maintain, manage and host their website{" "}
        </p>

        <p>
          <a href="https://shirecloud.com/" target="_blank">
            Shire Cloud
          </a>
        </p>
        <p>
          <a href="https://sootchy.com" target="_blank">
            Sootchy Website
          </a>
        </p>
        <p>
          <a href="https://thepacificgroup.com/" target="_blank">
            The Pacific Group
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://apps.apple.com/za/app/sootchy-529-college-savings/id1456803875"
          >
            Sootchy Mobile App
          </a>
        </p>
        <p>
          <a href="https://app.marvacares.com" target="_blank">
            Marv Cares
          </a>
        </p>
        <p>
          <a href="https://novetatgroup.com/" target="_blank">
            Novetat Group
          </a>
        </p>

        <p>
          I will keep udating list when i remember the rest or add to my
          clientele
        </p>

        <p></p>
      </>
    ),
  },
];
