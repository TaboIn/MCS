import React from 'react'

export default function AddItem(props) {
	return (
		<form onSubmit={props.onFormSubmit} className='py-6'>
			<div className='py-4'>
				<label htmlFor='item-name' className='font-bold p-4 text-lg'>
					Название:
				</label>
				<input
					type='text'
					value={props.name}
					onChange={props.onNameChange}
					id='item-name'
					placeholder='Название товара'
					className='w-[180px] h-12 font-bold rounded border border-sky-900 p-4'
				/>
			</div>
			<div className='py-4'>
				<label htmlFor='item-description' className='font-bold p-4 text-lg'>
					Описание:
				</label>
				<input
					type='text'
					value={props.desc}
					onChange={props.onDescChange}
					id='item-description'
					placeholder='Описание товара'
					className='w-[180px] h-12 font-bold rounded border border-sky-900 p-4'
				/>
			</div>
			<div className='form-footer py-2'>
				<div className='validation py-2'>{props.valid}</div>
				<input
					type='submit'
					className='w-[150px] bg-blue-400 hover:bg-blue-500 rounded border-2 border-sky-900 p-4 '
					value='Добавить'
				/>
			</div>
		</form>
	)
}
