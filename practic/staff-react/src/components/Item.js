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

	if (!info) {
		return null
	}

	return (
		<div className='container mx-auto '>
			<div className='rounded-t-lg border-2 border-sky-900 h-[200px] w-[160px] bg-slate-200 hover:bg-slate-300 '>
				<div className='item-info '>
					<h2 className='font-bold text-lg p-2 break-words'>{info.name}</h2>
					<p className='text-lg p-2 break-words'>{info.desc}</p>
				</div>
				<div className='item-quantity py-4 flex justify-center items-center mt-2'>
					<button
						className='border border-sky-500 w-10 h-10 text-xl bg-gray-400 hover:bg-gray-600'
						disabled={total === 0}
						onClick={handleRemoveClick}
					>
						-
					</button>
					<h3 className='p-3 font-bold text-lg'>{total ? total : ''}</h3>
					<button
						className='border border-sky-500 w-10 h-10 text-xl bg-gray-400 hover:bg-gray-600'
						onClick={handleAddClick}
					>
						+
					</button>
				</div>
			</div>
		</div>
	)
}
