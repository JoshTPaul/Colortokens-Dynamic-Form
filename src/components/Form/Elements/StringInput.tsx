import { StringFormElement } from "../../../types";

function StringInput(props: StringFormElement) {
  return (
    <div>
      <label htmlFor={props.key}>{props.displayName}</label>
      <input
        id={props.key}
        name={props.key}
        type="text"
        defaultValue={props.defaultValue || ""}
        disabled={props.readOnly}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default StringInput;
