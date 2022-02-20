import { useReducer } from "react";

import Editor from "./components/Editor";

import { JsonContext } from "./context/JsonContext";
import reducer from "./context/JsonReducer";

import { defaultState } from "./utils/constant";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <JsonContext.Provider value={{ state, dispatch }}>
      <Editor />
    </JsonContext.Provider>
  );
}

export default App;
