export default function ButtonAdd({ label, toggler, setToggler }) {
  return (
    <div className="add">
      <label>
        +
        <input className="btn-circle" onClick={() => setToggler(!toggler)} />
      </label>
      <p>Add {label}</p>
    </div>
  );
}
