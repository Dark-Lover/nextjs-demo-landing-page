import Service from "../../components/service";
import styles from "./Services.module.css";
function OurServices() {
  return (
    <section className={styles.services}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <Service />
          <Service />
        </div>
        <div className={styles.right_side}>
          <Service />
          <Service />
        </div>
      </div>
    </section>
  );
}
export default OurServices;
