import "./App.css";
import { EffectExample } from "./diif-hooks/use-effect";
import { ImperativeHandleExample } from "./diif-hooks/use-imperative-handle";
import { InsertionEffectExample } from "./diif-hooks/use-insertion-effect";
import { MemoExample } from "./diif-hooks/use-memo";
import { ReducerExample } from "./diif-hooks/use-reducer";
import { RefExample } from "./diif-hooks/use-ref";
// import StateExample from "./diif-hooks/useState";


function App() {
  return (
    <>
      {/* <StateExample/> */}
      {/* <EffectExample/> */}
      {/* <ReducerExample/> */}
      {/* <RefExample/> */}
      {/* <ImperativeHandleExample/> */}
      {/* <InsertionEffectExample/> */}
      <MemoExample/>
    </>
  );
}

export default App;