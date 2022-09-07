import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList.js'
import PostListUsingFunctionalComponent from './components/PostListUsingFunctionalComponent';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostList />
      <PostListUsingFunctionalComponent />
      <PostForm />
    </div>
  );
}

export default App;
