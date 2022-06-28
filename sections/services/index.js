import Service from "../../components/service";
import styles from "./Services.module.css";
function OurServices() {
  return (
    <section className={styles.services}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.container}>
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </section>
  );
}
export default OurServices;
