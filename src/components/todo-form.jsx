import React,{useState,useRef,useEffect, Fragment} from "react";
const TodoForm = (props) =>
{
const [input,setInput]=useState(props.edit ? props.edit.value : '' );
const inputRef=useRef(null);
const focus = useEffect(()=>
{
    inputRef.current.focus();
})
const handleFormSubmit = (e) =>
{
e.preventDefault();
props.onSubmit({
id:Math.random(Math.floor * 10000),
text:input,
isComplete:false
});
setInput('');
}
const handleInput = (e) =>
{
setInput(e.target.value);
}
return(<div className="todo-form">
<form onSubmit={handleFormSubmit}>
 {props.edit ? (<Fragment>
    <input type="text" name="text" className="todo-input" value={input}
onChange={handleInput}
ref={inputRef}/>
<button className="todo-button edit">Edit Todo</button></Fragment>)
: (<Fragment><input type="text" name="text" className="todo-input" value={input}
onChange={handleInput}
ref={inputRef}/>
<button className="todo-button">Add Todo</button></Fragment>)
}  
 
</form>    
</div>);
} 
export default TodoForm;