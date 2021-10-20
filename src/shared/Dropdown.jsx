import { useState } from "react";
import DropdownItem from "./DropdownItem";
import down from "../assets/images/down.svg";

export default function Dropdown({ items, hook, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = hook;
  const ListItems = items.map((item) => {
    return (
      <DropdownItem
        key={item.id}
        onClick={() => {
          setItemSelected(item);
          setIsOpen(false);
        }}
      >
        {item.title}
      </DropdownItem>
    );
  });

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn select-ghost"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h4>
          {itemSelected === "" ? `Select ${children}` : itemSelected.title}{" "}
        </h4>
        <img src={down} alt="down" className="dropdown-arrow" />
      </button>

      {isOpen && (
        <div className="caret">
          {items.length === 0 && (
            <p className="dropdown-item">no elements found</p>
          )}
          <ul>
            {ListItems}
            <DropdownItem
              onClick={() => {
                setItemSelected("");
                setIsOpen(false);
              }}
            >
              -
            </DropdownItem>
          </ul>
        </div>
      )}
    </div>
  );
}
