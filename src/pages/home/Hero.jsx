import heroImage from "../../assets/images/pages/home/hero.jpg";
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero__container">
        <img
          className="hero__image"
          src={heroImage}
          alt="orange neon light text on dark background"
        />
      </div>
    </section>
  );
}
