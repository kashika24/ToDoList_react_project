import './App.css';
import Header from './MyComponents/Header';
import { About } from './MyComponents/About';
import {ToDos} from './MyComponents/ToDos';
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
      
  return (
      <>
      <Router>
      <Header title="My ToDos List" searchBar={true} />
      <Switch>

        <Route exact path="/" render={()=>{
          return(
          <>
          <AddTodo addTodo={addTodo}/>
          <ToDos todos={todos} onDelete={onDelete}/>
          </>
          )
        }}>
        </Route>

        <Route  path="/about">
          <About/>
        </Route>

      </Switch>
      
      <Footer/>
      </Router>
      </>
  );
}

export default App;
