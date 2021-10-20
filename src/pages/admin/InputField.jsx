import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <label>
      {label}
      <input
        onChange={() => onChange(key, inputReference.current.value)}
        placeholder={placeholder}
        ref={inputReference}
        type={type}
        value={state}
        required
      />
    </label>
  );
}
