import React from 'react'
import { MDBInput } from "mdbreact";

const Input = ({ handleInput, todoItem }) => {
	return (
		<MDBInput label="Todo" onChange={event => handleInput(event)} value={todoItem}/>
	)
}

export default Input