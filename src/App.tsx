import FormGenerator from "./components/Form";
import { FORM_PAYLOAD } from "./constants";

function App() {
  return (
    <>
      <h1>Colortokens Take Home Assignment</h1>
      <FormGenerator elements={FORM_PAYLOAD} />
    </>
  );
}

export default App;
