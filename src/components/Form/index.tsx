import { FORM_PAYLOAD } from "../../constants";
import { getFormElements } from "./utils";

function FormGenerator() {
  const formElements = getFormElements(FORM_PAYLOAD);

  return <div>{formElements}</div>;
}

export default FormGenerator;
