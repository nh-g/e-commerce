import arrowBack from "../assets/images/arrow-left-circle.svg";

export default function ButtonBack({ label }) {
  return (
    <>
      <img className="icon-btn" src={arrowBack} alt="back" />
      <h3>{label} </h3>
    </>
  );
}
