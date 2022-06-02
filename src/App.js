import './App.css';
import Todo from './componenets/Todo';
import { Route, Routes } from 'react-router-dom';
import { SingleTodo } from './componenets/SingleTodo';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/:todo" element={<SingleTodo/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
