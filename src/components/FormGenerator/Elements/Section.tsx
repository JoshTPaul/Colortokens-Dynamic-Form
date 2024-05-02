import { SectionFormElement } from "../../../types";
import Tooltip from "../Tooltip";
import { getFormElementComponents } from "../utils";

function Section(props: SectionFormElement) {
  const childElementComponents = getFormElementComponents(props.children);

  return (
    <section>
      <h2>
        {props.displayName}
        <Tooltip text={props.information} />
      </h2>
      {childElementComponents}
    </section>
  );
}

export default Section;
