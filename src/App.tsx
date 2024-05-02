import FormGenerator from "./components/FormGenerator";
import { FORM_PAYLOAD } from "./constants";

function App() {
  return (
    <>
      <h1>Colortokens Take Home Assignment</h1>
      <FormGenerator
        elements={FORM_PAYLOAD}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form data saved");
        }}
      >
        {/* Extra info or components can be added here */}
        <button type="submit">Submit</button>
      </FormGenerator>
    </>
  );
}

export default App;
