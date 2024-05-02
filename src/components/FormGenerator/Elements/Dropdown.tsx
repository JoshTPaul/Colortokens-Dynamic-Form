import { DropdownFormElement } from "../../../types";
import Label from "../Label";

function Dropdown(props: DropdownFormElement) {
  return (
    <div>
      <Label {...props} />
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
