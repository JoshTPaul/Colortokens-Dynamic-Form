import { FormEventHandler } from "react";
import { FormElement } from "../../types";
import { getFormElementComponents } from "./utils";

type Props = {
  elements: Array<FormElement>;
  children: React.ReactNode;
  onSubmit: FormEventHandler;
};

function FormGenerator({ elements, children, onSubmit }: Props) {
  const formElementComponents = getFormElementComponents(elements);

  return (
    <form onSubmit={onSubmit}>
      {formElementComponents}
      {children}
    </form>
  );
}

export default FormGenerator;
