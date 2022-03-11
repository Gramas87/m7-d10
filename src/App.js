import './App.css';
import {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"





function App() {

  
  const [query, setQuery] = useState("")
 

  return (
    <div>
      <Home query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
