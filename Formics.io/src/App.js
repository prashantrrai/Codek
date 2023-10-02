import { useState } from "react";
import Barbara from "./Components/Barbara/Barbara";
import CounterValues from "./Components/Barbara/CounterValues";

function App() {

  const [counter, setCounter] = useState([])
  const [showCounterValues, setShowCounterValues] = useState(false)


  const handleAdd = () => {
    const newBarbaraComponent = <Barbara key={Date.now()} />;
    setCounter((prevComponents) => [...prevComponents, newBarbaraComponent]);
  };

  const handleSubmit = () => {
    setShowCounterValues(true);
  };



  return (
    <>
      <div className="w-1/4 p-8 bg-slate-300 f">
        <div className="flex justify-center">
          <div className="space-y-4">
            {counter.map((component, index) => (
              <div key={index}>{<Barbara counter={index + 1} />}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-center p-4">
          <button onClick={handleAdd} className="bg-blue-900 text-white font-bold px-16 py-2 rounded">Add</button>
        </div>
      </div>

      <div className="p-8 w-1/4 flex flex-col justify-center">
        <button onClick={handleSubmit} className="bg-blue-900 text-white font-bold px-16 py-2 rounded">Submit</button>
        <div className="mt-8 font-bold">
          {showCounterValues && <CounterValues counters={counter} />}
        </div>
      </div>
    </>
  );
}

export default App;
