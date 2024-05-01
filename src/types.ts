type FormElementType =
  | "section"
  | "string"
  | "password"
  | "dropdown"
  | "integer";

type FormElementCommonProperties<T extends FormElementType> = {
  displayName: string;
  key: string;
  identifier: string;
  type: T;
};

type SectionFormElement = FormElementCommonProperties<"section"> & {
  defaultValue: null;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
  information: string;
  children: Array<any>;
};

type StringFormElement = FormElementCommonProperties<"string"> & {
  defaultValue: string | null;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
  information: string;
};

type PasswordFormElement = FormElementCommonProperties<"password"> & {
  defaultValue: null;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
  information: string;
};

type DropdownPossibleValue = {
  displayName: string;
  key: string;
  defaultValue: string;
  children: null;
  identifier: string;
  Type: string;
};

type DropdownFormElement = FormElementCommonProperties<"dropdown"> & {
  defaultValue: string;
  readOnly: boolean;
  required: boolean;
  possibleValues: Array<DropdownPossibleValue>;
  placeholder: string;
  information: string;
  identifier: string;
};

type IntegerFormElement = FormElementCommonProperties<"integer"> & {
  defaultValue: number | null;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
  information: string;
  identifier: string;
};

export type FormElement =
  | SectionFormElement
  | StringFormElement
  | PasswordFormElement
  | DropdownFormElement
  | IntegerFormElement;