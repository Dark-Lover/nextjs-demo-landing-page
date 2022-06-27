import styles from "./Services.module.css";
function OurServices() {
  return (
    <section className={styles.services}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.service_body}>
        <h2 className={styles.service_title}>iOS Developement</h2>
        <p className={styles.service_desc}>
          Get a high-performance iOS mobile applictation tailored to your
          business needs and optimized for growth and scalability.
        </p>
        <button className={styles.learn}>Learn More</button>
      </div>
    </section>
  );
}
export default OurServices;
