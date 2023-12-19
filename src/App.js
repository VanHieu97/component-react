
import Task from "./component/Task/Task";
import {useState} from "react";

function App() {
  const [name,setName] = useState("Hieu")
  return (
    <Task myName = {name}/>
  );
}

export default App;
