import { useState } from "react";
import { DropdownFormElement, DropdownPossibleValue } from "../../../types";
import Label from "../Label";
import { getFormElementComponents } from "../utils";

function Dropdown(props: DropdownFormElement) {
  const [childElements, setChildElements] =
    useState<DropdownPossibleValue["children"]>(null);

  const onOptionClick = (data: DropdownPossibleValue) => {
    setChildElements(data.children);
  };

  return (
    <>
      <div>
        <Label {...props} />
        <select id={props.key} name={props.key}>
          {props.possibleValues.map((dropdownValue) => (
            <option
              key={dropdownValue.key}
              value={dropdownValue.key}
              onClick={() => onOptionClick(dropdownValue)}
            >
              {dropdownValue.displayName}
            </option>
          ))}
        </select>
      </div>
      {childElements && getFormElementComponents(childElements)}
    </>
  );
}

export default Dropdown;
