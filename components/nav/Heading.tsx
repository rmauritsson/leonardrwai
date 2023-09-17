import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <OutlineButton onClick={() => window.open("/fake_resume.pdf")}>
        My resume
      </OutlineButton> */}
      <OutlineButton onClick={() => window.open("https://wa.me/256779914434")}>
        Say Hi 👋
      </OutlineButton>
    </header>
  );
};
