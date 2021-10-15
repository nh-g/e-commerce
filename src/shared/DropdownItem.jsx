export default function DropdownItem({ categories, children, onClick }) {
  return (
    <li>
      <button type="button" className="dropdown-item" onClick={onClick}>
        <h4>{children}</h4>
      </button>
    </li>
  );
}
