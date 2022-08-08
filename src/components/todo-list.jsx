import React,{useState} from "react";
import TodoForm from "./todo-form";
import Todo from "./todo";
const TodoList = () =>
{

 const [todos,setTodos]=useState([]);
const addTodo = (todo) =>
{

    if(!todo.text || /^\s*$/.test(todo.text))
    {
    return;
    }
    const newTodo= [todo,...todos];
    setTodos(newTodo);
    
}    
const compeletedTodo = (id) =>
{
    
    const updatedTodos = todos.map((todo) =>
    {
       if(todo.id === id)
       {
         todo.isComplete = !todo.isComplete
       }
       return todo;
    }
    );
   
   setTodos(updatedTodos);
}
const removeTodo = (id) =>
{
const updatedTodos = [...todos].filter(todo =>
    {
        return todo.id !== id;
    });
  
    setTodos(updatedTodos);
} 
const editTodo = (id,value) =>
{
   
    if(!value.text || /^\s*$/.test(value.text))
    {
      return;
    }
    setTodos(todos.map((item)=>item.id === id ? value : item));
}
return(<div>
<h1>What's plan for Today?</h1>
<TodoForm onSubmit={addTodo}/>  
<Todo todos={todos} onComplete={compeletedTodo} onRemove={removeTodo}
onEdit={editTodo}/>  
</div>);
}
export default TodoList;