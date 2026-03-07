import "./App.css";
import { EffectExample } from "./diif-hooks/use-effect";
import { ReducerExample } from "./diif-hooks/use-reducer";
import { RefExample } from "./diif-hooks/use-ref";
// import StateExample from "./diif-hooks/useState";


function App() {
  return (
    <>
      {/* <StateExample/> */}
      {/* <EffectExample/> */}
      {/* <ReducerExample/> */}
      <RefExample/>
    </>
  );
}

export default App;