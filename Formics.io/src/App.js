import { useState } from "react";
import Barbara from "./Components/Barbara/Barbara";

function App() {

  const [addbarbara, setAddbarbara] = useState([])


  const handleAdd = () => {
    const newBarbaraComponent = <Barbara key={Date.now()} />;
    setAddbarbara((prevComponents) => [...prevComponents, newBarbaraComponent]);
  };


  return (
    <>
      <div className="w-1/4 p-8 bg-slate-300 f">
        <div className="flex justify-center">
          <div className="space-y-4">
          {addbarbara.map((component, index) => (
              <div key={index}>{<Barbara counter={index+1}/>}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-center p-4">
          <button onClick={handleAdd} className="bg-blue-900 text-white font-bold px-16 py-2 rounded">Add</button>
        </div>
      </div>
    </>
  );
}

export default App;
