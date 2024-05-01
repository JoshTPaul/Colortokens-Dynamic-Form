import { FORM_PAYLOAD } from "../../constants";
import { getFormElements } from "./utils";

function FormGenerator() {
  const formElements = getFormElements(FORM_PAYLOAD);

  return <form>{formElements}</form>;
}

export default FormGenerator;
