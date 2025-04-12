import styles from './Testimonials.module.css';
import avatar from '../assets/avtar.jpeg'; // replace with actual image

const testimonials = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.`,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.`,
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora.`,
  },
  {
    text: `Lorem ipsum dolor sit amet adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.`,
  },
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      {testimonials.map((item, index) => (
        <div className={styles.card} key={index}>
          <p className={styles.message}>{item.text}</p>
          <div className={styles.user}>
            <img src={avatar} alt="user" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
