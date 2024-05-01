import { SectionFormElement } from "../../../types";
import { getFormElements } from "../utils";

function Section(props: SectionFormElement) {
  const childrenFormElements = getFormElements(props.children);

  return (
    <section>
      <h2>{props.displayName}</h2>
      {childrenFormElements}
    </section>
  );
}

export default Section;
