import logo from './logo.svg';
import './App.css';
import {Hello,HelloWithProps,Car} from './hello';

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloWithProps name="World" number="38"/>
      <Car color="yellow" model="honda"/>
    </div>
    
  );
}

export default App;
