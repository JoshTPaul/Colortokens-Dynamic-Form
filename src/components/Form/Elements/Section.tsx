import { SectionFormElement } from "../../../types";
import Tooltip from "../Tooltip";
import { getFormElements } from "../utils";

function Section(props: SectionFormElement) {
  const childrenFormElements = getFormElements(props.children);

  return (
    <section>
      <h2>
        {props.displayName}
        <Tooltip text={props.information} />
      </h2>
      {childrenFormElements}
    </section>
  );
}

export default Section;
