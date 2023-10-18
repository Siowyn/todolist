import './App.css';
import PageTitle from "./ptitle.js"
import TodoList from './todolist.js'
function App() {
  return (
    <div className="container">
      <PageTitle />
      <TodoList />
    </div>
  );
}

export default App;
