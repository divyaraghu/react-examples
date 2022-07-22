import logo from './logo.svg';
import './App.css';
import ParentComp from './ParentComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Passing functions as properties to child components.
        <ParentComp/>
      </header>
    </div>
  );
}

export default App;
