import styles from "./findrestro.module.css";

const findresto = () => {
  return (
    <>
      <section className={styles.sec}>
        <div className={styles.textcontainer}> 
         <div className={styles.head}>
           <h1>Let us find your 
          </h1>
          <strong>Forever Food.</strong>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt <br />
                      <span> illo tenetur fuga ducimus numquam ea!</span>
          </p>
          <div className={styles.btncontainer} >
            <button className={styles.serch}>Search Now</button>
            <button className={styles.kn}>Know More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default findresto;
