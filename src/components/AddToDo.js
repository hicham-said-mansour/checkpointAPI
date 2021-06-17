import React from 'react'
import {useState} from 'react'

function AddToDo(props) {
  const [title, setTitle] = useState('')
const inputChangeHandler = (e)=> {
  setTitle(e.target.value);
}
const onClickTodo =()=> {
  props.addTdo(title)
  setTitle('')
}
  return (
    <div>
      <input type="text" onChange={(e)=> {this.setState({title:e.target.value})}}/>
      <button placeholder="Add" onClick={}>Add</button>
    </div>
  )
}

export default AddToDo
