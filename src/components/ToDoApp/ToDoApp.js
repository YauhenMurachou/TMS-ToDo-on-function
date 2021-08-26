import React, { useState, useEffect, useRef } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import './ToDoApp.css'

function ToDoApp() {

	let [items, setItems] = useState([]);
	const [searchItems, setSearchItems] = useState(null);
	const [text, setText] = useState('');
	const [searchText, setSearchText] = useState('');
	const [inputWarning, setInputWarning] = useState('');

	const inputAddEl = useRef(null);
	const inputSearchEl = useRef(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((result) => setItems(result.slice(0, 10).sort((a, b) => a.title.length - b.title.length)))
			.then((json) => console.log(json))
	}, []
	)
	items = items.sort((a, b) => a.title.length - b.title.length);

	const handleSubmitSearch = (e) => {
		e.preventDefault();
		if (searchText === '') {
			setSearchItems([])
			console.log('setSearchItems');
		} else {
			const itemsCopy = [...items];
			const searchItemsCopy = itemsCopy.filter(item => item.title.includes(searchText));
			setSearchItems(searchItemsCopy);
			console.log('handleSubmitSearch');
		}
	}

	const handleChangeSearch = (e) => {
		setSearchText(e.target.value);
		console.log('handleChangeSearch');
	}

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
		newItems[delId].completed = !newItems[delId].completed;
		setItems(newItems);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let copyText = text.replace(/\s/g, '');
		let copyItems = items.slice();
		if (text.length === 0 || copyItems.some(item => item.title.replace(/\s/g, '') === copyText)
			|| (searchItems && searchItems.length !== 0)) {

			return
		} else if (text.length < 4) {
			warningHidden()
			return
		} else {
			const newItem = {
				title: text,
				id: Date.now(),
				completed: false
			};
			setItems(items.concat(newItem));
			setText('');
			setInputWarning('')
		}
	}

	const warningHidden = () => {
		return setInputWarning("Длина задачи должна быть не менее 4-х символов")
	}


	const changeTask = () => {

		let renderItems = [];
		if (searchItems === null) {
			renderItems = items;
			return renderTasks(renderItems);
		}
		if (searchItems && searchItems.length > 0) {

			renderItems = searchItems;
			return renderTasks(renderItems);

		} else if (searchItems && searchItems.length === 0 && searchText === '') {

			renderItems = items;
			return renderTasks(renderItems);

		} else if (searchItems && searchItems.length === 0 && searchText !== '') {

			return <span> Tasks not found </span>;
		}
	}


	const renderTasks = (arr) => {
		return (
			<ul>
				{arr.map((item) => (
					<ToDoList
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
			<form onSubmit={handleSubmitSearch}>
				<label className='label-ToDo' htmlFor='find-todo'>
					Find task
				</label>
				<input
					id='find-todo'
					className='addSearch-input'
					ref={inputSearchEl}
					onChange={handleChangeSearch}
					value={searchText}
				/>
				<br />
				<button className='addSearch-btn'>
					Поиск
				</button>
			</form>

			{changeTask()}

			<form onSubmit={handleSubmit}>


				<label className='label-ToDo' htmlFor='new-todo'>
					Что нужно сделать?
				</label>
				<input
					id='new-todo'
					ref={inputAddEl}
					onChange={handleChange}
					value={text}
				/>

				<br />
				<button className='add-btn'>
					Добавить #{items.length + 1}
				</button>
				<br />



			</form>
			<div className='inputWarning'>

				{inputWarning}

			</div>

		</div>
	);
}


export default ToDoApp;
