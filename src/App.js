import { useState } from 'react';
import './App.css';

function App() {

  const[show, setShow] = useState(true)

  return (
    <div className="App">
      {show? <h1>Saurav's Portfolio</h1>:null}
      <button onClick={() => {setShow(!show)}}>Toggle</button>
    </div>
  );
}

export default App;
