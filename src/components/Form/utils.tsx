import { FormElement } from "../../types";
import Section from "./Elements/Section";

export const getFormElements = (data: Array<FormElement>) => {
  const map: Record<FormElement["type"], any> = {
    section: Section,
    dropdown: () => <p>Dropdown</p>,
    string: () => <p>String</p>,
    integer: () => <p>Integer</p>,
    password: () => <p>Password</p>,
  };

  return data.map((element) => map[element.type](element));
};
