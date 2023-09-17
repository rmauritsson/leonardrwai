import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Leonard Rwai Kanyesigye, but you can call me Leo.
              I&apos;m a remote software engineer who loves creating beautiful
              user experiences. I specialize in the frontend (ofcourse 😌),
              primarily React and Tailwind, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I currently work for a California based fintech called{" "}
              <Link href="https://sootchy.com" target="_blank" rel="nofollow">
                Sootchy
              </Link>{" "}
              Inc for most of (if not) all of it's projects
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I would also discribe myself as a creative or entrepreneur. I've
              helped create a couple of startups. My most recent project is{" "}
              <Link href="novetatgroup.com" target="_blank" rel="nofollow">
                Novetat Group
              </Link>{" "}
              where i am a co-founder to a friend of mine, and then a non-profit
              organisation with emphasis on mental health. More on that later
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to catch a little of bit of sci-fi and
              action movies. Any given Sunday you&apos;ll find me at home trying
              to have a relaxing day with my family (wishful thinking since i
              will be getting married in a couple of months) 😌 ☁️
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently not looking looking for new positions. But if
              you think you&apos;ve got an opening or opportunity that I might
              like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
