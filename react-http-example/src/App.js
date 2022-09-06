import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList.js'
import PostListUsingFunctionalComponent from './components/PostListUsingFunctionalComponent';

function App() {
  return (
    <div className="App">
      <PostList />
      <PostListUsingFunctionalComponent />
    </div>
  );
}

export default App;
