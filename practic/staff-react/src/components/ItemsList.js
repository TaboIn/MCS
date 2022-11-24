import React from 'react'
import Item from './Item'

export default function ItemsList(props) {
	return (
		<ul className='inline-grid grid-cols-6 gap-6'>
			{props.items.map(item => (
				<li key={item.id} className='px-4'>
					<Item info={item} />
					<button
						className='bg-red-400 w-[160px] rounded-b-lg hover:bg-red-600 text-lg '
						onClick={() => props.onDeleteClick(item.id)}
					>
						Удалить
					</button>
				</li>
			))}
		</ul>
	)
}
