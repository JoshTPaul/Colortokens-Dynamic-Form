import { FormElement } from "../../types";
import Tooltip from "./Tooltip";

type Props = Pick<FormElement, "displayName" | "information" | "key">;

function Label({ key: htmlFor, displayName, information }: Props) {
  return (
    <label htmlFor={htmlFor}>
      {displayName}
      <Tooltip text={information} />
    </label>
  );
}

export default Label;
