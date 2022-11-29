import React, { useState } from 'react'

export default function Item(props) {
	const [total, setTotal] = useState(0)

	const { info } = props

	function handleAddClick() {
		setTotal(total + 1)
	}

	function handleRemoveClick() {
		if (total > 0) {
			setTotal(total - 1)
		}
	}

	return (
		<div className='item'>
			<img src={info.image} alt='' />
			<div className='item-info py-4 '>
				<h2 className='text-lg font-bold py-4 bg-slate-100 flex justify-center'>
					{info.name}
				</h2>
				<p className='text-lg py-2 flex justify-center'>{info.desc}</p>
			</div>
			<div className='item-quantity flex justify-center'>
				<button
					className='bg-blue-500 hover:bg-blue-600 w-10 h-10 font-bold text-lg text-white'
					disabled={total === 0}
					onClick={handleRemoveClick}
				>
					-
				</button>
				<h3 className='font-bold  p-2'>{total ? total : ''}</h3>
				<button
					className='bg-blue-500 hover:bg-blue-600 w-10 h-10 font-bold text-lg text-white'
					onClick={handleAddClick}
				>
					+
				</button>
			</div>
		</div>
	)
}
