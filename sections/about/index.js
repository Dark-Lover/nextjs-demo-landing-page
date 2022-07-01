import styles from "./About.module.css";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";

const meanings = [
  {
    title: "Market diagnose",
  },
  {
    title: "Competitor analysis",
  },
  {
    title: "Quality service",
  },
  {
    title: "Release help",
  },
  {
    title: "Recommendations",
  },
];
function About() {
  return (
    <div className={styles.container} id="about">
      <section className={styles.about_wrapper}>
        <div className={styles.about_left}>
          <Image
            src="/assets/vector.jpg"
            alt="About"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.about_right}>
          <div className={styles.section_title}>About us</div>
          <h1 className={styles.about_heading}>
            We are here to make success your business
          </h1>
          <p className={styles.about_desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            soluta nam molestias. Consequatur rerum veniam in nihil, magnam odio
            sed magni minus, non sit explicabo molestiae veritatis rem
            asperiores quos! Incidunt ex autem.
            <br />
            <br />
            Our Main actions:
            <br />
            <br />
          </p>
          <div className={styles.check_list}>
            {meanings.map((mean, i) => {
              return (
                <div className={styles.check_item} key={i}>
                  <BsCheckLg />
                  <span>{mean.title}</span>
                </div>
              );
            })}
          </div>
          <button className={styles.learn}>Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default About;
