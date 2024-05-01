import { FormElement } from "../../types";
import IntegerInput from "./Elements/IntegerInput";
import Section from "./Elements/Section";
import StringInput from "./Elements/StringInput";

export const getFormElements = (data: Array<FormElement>) => {
  const map: Record<FormElement["type"], any> = {
    section: Section,
    dropdown: () => <p>Dropdown</p>,
    string: StringInput,
    integer: IntegerInput,
    password: () => <p>Password</p>,
  };

  return data.map((element) => map[element.type](element));
};
