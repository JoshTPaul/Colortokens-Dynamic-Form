import { FormElement } from "../../types";
import { getFormElementComponents } from "./utils";

type Props = {
  elements: Array<FormElement>;
  children: React.ReactNode;
};

function FormGenerator({ elements, children }: Props) {
  const formElementComponents = getFormElementComponents(elements);

  return (
    <form>
      {formElementComponents}
      {children}
    </form>
  );
}

export default FormGenerator;
