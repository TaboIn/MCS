import React, { useState } from 'react'
import ItemsList from './ItemsList'
import AddItem from './AddItems'

export default function Shop() {
	const [items, setItems] = useState([])
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [valid, setValid] = useState('')

	function handleFormSubmit(event) {
		event.preventDefault()

		fetch('https://covid-shop-mcs.herokuapp.com', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				name: name,
				desc: desc,
			}),
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error))

		if (!name) {
			setValid('Введите название')
			return
		}
		if (!desc) {
			setValid('Введите описание ')
			return
		}
		setItems([
			...items,
			{
				id: items.length + 1,
				name: name,
				desc: desc,
			},
		])

		setName('')
		setDesc('')
		setValid('')
	}

	function handleNameChange(event) {
		setName(event.target.value)
	}

	function handleDescChange(event) {
		setDesc(event.target.value)
	}

	function handleDeleteClick(id) {
		setItems(items.filter(item => item.id !== id))
	}

	return (
		<>
			<AddItem
				name={name}
				desc={desc}
				valid={valid}
				onNameChange={handleNameChange}
				onDescChange={handleDescChange}
				onFormSubmit={handleFormSubmit}
			/>
			<div className='font-bold'>
				{items.length === 0 && <p>Добавьте первый товар</p>}
			</div>
			<ItemsList items={items} onDeleteClick={handleDeleteClick} />
		</>
	)
}
