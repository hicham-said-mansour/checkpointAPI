import AddToDo from './components/AddToDo'
import './App.css';
import TodoItem from './components/TodoItem'
import TodoListe from './components/TodoListe'
import axios from 'axios'
import {setState} from 'react'


function App() {
  return (
    <div className="App">
     <AddToDo AddToDo = {AddToDo}></AddToDo>
     {/* <TodoItem></TodoItem> */}
     <TodoListe></TodoListe>
    </div>
  );
}

export default App;
