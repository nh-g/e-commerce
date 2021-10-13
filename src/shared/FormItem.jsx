export default function FormItem({ settings, hook, isValid }) {
  const [state, setState] = hook;
  const { label, type, placeholder, alert, className } = settings;

  const displayError = !(isValid || state === "");

  return (
    <label>
      <div className="label-header">
        <h4>{label}</h4>
        {displayError && <p className="verif">{alert}</p>}
      </div>

      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  );
}
