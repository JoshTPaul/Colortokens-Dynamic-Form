import { FormElement } from "../../types";
import Tooltip from "./Tooltip";

type Props = Pick<
  FormElement,
  "displayName" | "information" | "key" | "required"
>;

function Label({ key: htmlFor, displayName, information, required }: Props) {
  return (
    <label htmlFor={htmlFor}>
      <span>
        {displayName}
        {required && <sup>*</sup>}
      </span>
      <Tooltip text={information} />
    </label>
  );
}

export default Label;
