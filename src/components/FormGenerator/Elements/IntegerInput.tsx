import { IntegerFormElement } from "../../../types";
import Label from "../Label";

function IntegerInput(props: IntegerFormElement) {
  return (
    <div>
      <Label {...props} />
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
