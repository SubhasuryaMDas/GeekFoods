import style from "./Get.module.css";
import house from "../src/assets/house (1).jpeg";
const Get = () => {
  return (
    <>
      <section>
        <div className={style.house}>
          <img src={house} alt="" />
        </div>
        <div className={style.right}>
          <div><h2>
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.{" "}
            <br /> Tempore, debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Aliquid, molestiae! Quidem est esse numquam odio <br /> deleniti,
            beatae, magni dolores provident quaerat totam <br /> eos, aperiam
            architecto eius quis quibusdam fugiat dicta. Get in Touch
          </p>
          <button>Get In Touch</button></div>
        </div>
      </section>
    </>
  );
};

export default Get;
