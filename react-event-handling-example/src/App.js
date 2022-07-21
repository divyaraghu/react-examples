import logo from './logo.svg';
import './App.css';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Event Handler examples from Function Component and Class Component
        <div> {props.children} </div>
      </header>
    </div>
  );
}

export default App;
