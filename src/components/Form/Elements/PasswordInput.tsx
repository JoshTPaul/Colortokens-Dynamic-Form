import { PasswordFormElement } from "../../../types";
import Label from "../Label";

function PasswordInput(props: PasswordFormElement) {
  return (
    <div>
      <Label {...props} />
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
