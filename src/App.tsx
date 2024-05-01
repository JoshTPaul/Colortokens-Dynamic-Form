import FormGenerator from "./components/Form";
import { FORM_PAYLOAD } from "./constants";

function App() {
  return (
    <>
      <h1>Colortokens Take Home Assignment</h1>
      <FormGenerator elements={FORM_PAYLOAD}>
        {/* Extra info or components can be added here */}
        <button type="submit">Submit</button>
      </FormGenerator>
    </>
  );
}

export default App;
