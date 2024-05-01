import { StringFormElement } from "../../../types";
import Label from "../Label";

function StringInput(props: StringFormElement) {
  return (
    <div>
      <Label {...props} />
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
