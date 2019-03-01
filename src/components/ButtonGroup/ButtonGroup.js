import React from 'react';
import { MDBBtn, MDBBtnGroup, MDBIcon } from "mdbreact";

const ButtonGroup = ({ handleAdd, handleClear, handleRemove, todoItem, todoList }) => {
	return (
		<MDBBtnGroup size="md" className="d-flex">
			<MDBBtn 
				color="primary" 
				onClick={handleAdd}
				disabled={!todoItem} 
				className="mr-2"
			><MDBIcon icon="plus-circle" className="mr-2" />Add</MDBBtn>
			<MDBBtn 
				color="warning" 
				onClick={handleRemove}
				disabled={todoList.length === 0}  
				className="mr-2"
			><MDBIcon icon="minus-circle" className="mr-2" />Remove</MDBBtn>
			<MDBBtn 
				color="danger" 
				onClick={handleClear}
				disabled={todoList.length === 0}
				className="mr-2"
				><MDBIcon icon="trash-alt" className="mr-2" />Clear</MDBBtn>
		</MDBBtnGroup>
	)
}

export default ButtonGroup