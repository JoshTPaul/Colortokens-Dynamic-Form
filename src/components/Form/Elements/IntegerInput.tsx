import { IntegerFormElement } from "../../../types";

function IntegerInput(props: IntegerFormElement) {
  return (
    <div>
      <label htmlFor={props.key}>{props.displayName}</label>
      <input
        id={props.key}
        name={props.key}
        type="number"
        defaultValue={props.defaultValue || ""}
        disabled={props.readOnly}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default IntegerInput;
