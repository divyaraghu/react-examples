import './App.css';
import USER_ARRAY from './MOCK_DATA.json'
import { useState } from 'react';
function App() {

  const [searchTerm,setSearchTerm] = useState('');

  const filterResults = (inputVal) => {
    //Call the useState hook to set state variable
    setSearchTerm(inputVal);
    console.log(inputVal);
  }
  //Call filter method before map method in order to filter results based on search term
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={event => filterResults(event.target.value)}/> 
      <div className='userList'>
        {
          USER_ARRAY.filter((user) => searchTerm == '' || user.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user,key) => <div key={key}> <p>{user.first_name} </p></div>)
        }
      </div>
    </div>
  );
}

export default App;
