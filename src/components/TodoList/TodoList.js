import React from 'react'
import { MDBListGroup, MDBListGroupItem } from "mdbreact";

const TodoList = ({ todoList }) => {
	return (
		<MDBListGroup>
			{todoList.map((item, index) => <MDBListGroupItem key={index} ><span style={{color: 'rgb(180, 179, 179)'}}>#{index + 1}.</span> {item}</MDBListGroupItem> )}
		</MDBListGroup>
	)
}

export default TodoList