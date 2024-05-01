import { PasswordFormElement } from "../../../types";

function PasswordInput(props: PasswordFormElement) {
  return (
    <div>
      <label htmlFor={props.key}>{props.displayName}</label>
      <input
        id={props.key}
        name={props.key}
        type="password"
        defaultValue={props.defaultValue || ""}
        disabled={props.readOnly}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default PasswordInput;
