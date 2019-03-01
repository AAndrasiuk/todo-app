import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBRow, MDBContainer, MDBCard, MDBCardHeader } from "mdbreact";
import Input from './components/Input/Input'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  const initialList = JSON.parse(localStorage.getItem('todoList')) || []
  const [todoList, setTodoList] = useState(initialList)
  const [todoItem, setTodoItem] = useState('')

  const regexForInput = /^[a-zA-Ząęłśżź ]{0,30}$/;

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const handleInput = event => {
    let { value } = event.target     
    if (regexForInput.test(value)){
      setTodoItem(value)
    }
  }
  
  const handleAdd = () => {
    let value = textProcessing(todoItem) 
    setTodoList([...todoList, value])
    setTodoItem('')
  }

  const textProcessing = str => {
    str = str.charAt(0).toUpperCase() + str.substr(1, str.length).toLowerCase();
    return str
  }

  const handleRemove = () => {
    let list = todoList.slice(0, todoList.length - 1)
    setTodoList(list)
  }

  const handleClear = () => {
    setTodoList([])
  }

  return (
    <MDBContainer>
  
      <MDBCard className="my-6" style={{margin:'40px 0', backgroundColor:'#f2f2f2'}} >
        <MDBCardHeader color="black" tag="h3" style={{textAlign:'center'}}>
          Todo List
        </MDBCardHeader>
    
        <MDBRow style={{padding: '0 20px'}}>
			    <MDBCol md='6' className="m-2 mx-auto" >
            <Input
              handleInput={handleInput}
              todoItem={todoItem}
            />
          </MDBCol>
		    </MDBRow>
      
        <MDBRow className="d-flex justify-content-center" style={{padding: '0 20px'}}>
			    <MDBCol md='6'>
            <ButtonGroup
              handleAdd={handleAdd}
              handleClear={handleClear}
              handleRemove={handleRemove}
              handleInput={handleInput}
              todoItem={todoItem}
              todoList={todoList}
            />
          </MDBCol>
        </MDBRow>

      <MDBRow style={{padding: '0 20px'}}>
		    <MDBCol md='6' className="mx-auto">
		      <MDBCard style={{margin: '20px 0 40px'}}>
            <TodoList
              todoList={todoList}
            />
          </MDBCard>
		    </MDBCol>
		  </MDBRow>

     </MDBCard>
   </MDBContainer>
  );

}

export default App;
