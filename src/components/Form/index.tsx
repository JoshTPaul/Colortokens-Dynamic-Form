import { FormElement } from "../../types";
import { getFormElementComponents } from "./utils";

type Props = {
  elements: Array<FormElement>;
};

function FormGenerator({ elements }: Props) {
  const formElementComponents = getFormElementComponents(elements);

  return <form>{formElementComponents}</form>;
}

export default FormGenerator;
