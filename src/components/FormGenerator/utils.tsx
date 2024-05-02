import { FormElement } from "../../types";
import Dropdown from "./Elements/Dropdown";
import IntegerInput from "./Elements/IntegerInput";
import PasswordInput from "./Elements/PasswordInput";
import Section from "./Elements/Section";
import StringInput from "./Elements/StringInput";

export const getFormElementComponents = (data: Array<FormElement>) => {
  const map: Record<FormElement["type"], (...args: any[]) => JSX.Element> = {
    section: Section,
    dropdown: Dropdown,
    string: StringInput,
    integer: IntegerInput,
    password: PasswordInput,
  };

  return data.map((element) => map[element.type](element));
};
