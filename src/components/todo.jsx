import React,{useState} from "react";
import TodoForm from './todo-form';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({todos,onComplete,onRemove,onEdit})=>
{
 
const [edit,setEdit]=useState({id:null,
value:''});

const handleFormSubmit = (value) =>
{
onEdit(edit.id,value);
setEdit({id:null,value:''});
}
if(edit.id)
{   
  
return(<TodoForm  edit={edit} onSubmit={handleFormSubmit}/>)
}   

return(todos.map((todo,index) =><div key={index} 
className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
<div key={todo.id} onClick={() => onComplete(todo.id)}>{todo.text}</div>
<div className="icons">
<RiCloseCircleLine onClick={() =>onRemove(todo.id)} className="todo-remove"/>
 <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} 
 className="todo-edit"/>   
</div>
</div>))
}

export default Todo;