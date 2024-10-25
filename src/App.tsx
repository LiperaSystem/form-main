import "./App.css";
import { Form } from "./components/Form/Form";
import { ScoreProvider } from "./providers/form.provider";

function App() {
  return (
    <>
      <ScoreProvider>
        <Form />
      </ScoreProvider>
    </>
  );
}

export default App;
