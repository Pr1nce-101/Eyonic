import styles from "../../Styles/Home.module.css";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import img5 from "../../Images/img5.jpg";
import img6 from "../../Images/img6.png";
import img7 from "../../Images/img7.png";

const Slider = SliderModule.default || SliderModule;

export default function Showcase() {

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,   
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  };

    const slides = [img1, img2, img3, img4, img5, img6, img7, ];

  return (
    <section>
      <h1 className={styles.h1}>
         <span className={styles.star}>✦</span>
            The Crowd Pleasers
          <span className={styles.star}>✦</span>
      </h1>
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className={styles.carImg}/>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}