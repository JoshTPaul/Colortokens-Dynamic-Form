import { DropdownFormElement } from "../../../types";

function Dropdown(props: DropdownFormElement) {
  return (
    <div>
      <label htmlFor={props.key}>{props.displayName}</label>
      <select id={props.key} name={props.key}>
        {props.possibleValues.map((dropdownValue) => (
          <option key={dropdownValue.key} value={dropdownValue.key}>
            {dropdownValue.displayName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
