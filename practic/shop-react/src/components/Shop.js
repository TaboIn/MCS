import React, { useState, useEffect } from 'react'
import Item from './Item.js'

export default function Shop() {
	const [items, setItem] = useState()
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		;(async () => {
			setLoader(true)
			try {
				const response = await fetch('https://covid-shop-mcs.herokuapp.com')
				const data = await response.json()
				if (data) {
					setItem(data)
				}
			} catch (error) {
				console.error(error)
			} finally {
				setLoader(false)
			}
		})()
	})

	return (
		<div className='shop'>
			<ul>
				{items &&
					items.map((elem, index) => {
						return (
							<li key={index}>
								<Item info={elem} />
							</li>
						)
					})}
			</ul>
		</div>
	)
}
