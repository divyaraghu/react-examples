import logo from './logo.svg';
import './App.css';
import Comp1WithName from './Comp1WithName';
import Comp2WithName from './Comp2WithName';
import Comp1ForAlert from './Comp1ForAlert';
import Comp1WithCounter from './Comp1WithCounter';

function App() {
  return (
    <div className='App'>
      <Comp1WithName />
      <Comp2WithName />
      <Comp1ForAlert />
      <Comp1WithCounter name='Counter1' />
    </div>
  );
}

export default App;
