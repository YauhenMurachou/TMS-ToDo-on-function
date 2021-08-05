import React, { useState, useEffect } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import './ToDoApp.css'

function ToDoApp() {

	const [items, setItems] = useState([]);
	const [text, setText] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((result) =>  setItems(result.slice(0, 10)))
			.then((json) => console.log(json))
	}, []
	)

	const handleChange = (e) => {
		setText(e.target.value);
	}

	const removeTask = (id) => {
		let newItems = items.slice();
		const delId = newItems.findIndex((n) => n.id === id);
		newItems.splice(delId, 1);
		setItems(newItems);
	}

	const handleCheckbox = (id) => {
		let newItems = items.slice();
		const delId = newItems.findIndex((n) => n.id === id);
		newItems[delId].checked = !newItems[delId].checked;
		setItems(newItems);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.length === 0) {
			return;
		}
		const newItem = {
			text: text,
			id: Date.now()
		};
		setItems(items.concat(newItem));
		setText('');
	}

	const changeTask = (arr) => {
		return (
			<ul>
				{arr.map((item) => (
					<ToDoList
						// list = {this.componentDidMount}
						key={item.id}
						item={item}
						onClick={() => removeTask(item.id)}
						onChange={() => handleCheckbox(item.id)}
					/>
				))}
			</ul>
		);
	}

	return (
		<div>
			<h3>Список дел</h3>
			{changeTask(items)}
			<form onSubmit={handleSubmit}>
				<label className='label-ToDo' htmlFor='new-todo'>
					Что нужно сделать?
				</label>
				<input
					id='new-todo'
					onChange={handleChange}
					value={text}
				/>
				<br />
				<button className='add-btn'>
					Добавить #{items.length + 1}
				</button>
			</form>
		</div>
	);
}


export default ToDoApp;
