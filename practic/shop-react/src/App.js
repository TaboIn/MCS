import React, { useState } from 'react'

import './App.css'
import Shop from './components/Shop.js'

function App() {
	const [login, setLogin] = useState(false)

	if (login) {
		return (
			<>
				<div className='flex justify-center py-4'>
					<Shop />
				</div>
				<div className='flex justify-center py-4'>
					<button
						className='font-bold w-[140px] h-[64px] bg-blue-600 hover:bg-blue-700 text-slate-200  hover:text-slate-100'
						onClick={() => setLogin(false)}
					>
						Выйти
					</button>
				</div>
			</>
		)
	} else {
		return (
			<>
				<h2 className='flex justify-center text-lg py-4 font-bold'>
					Нужно залогиниться!
				</h2>
				<div className='flex justify-center py-4'>
					<button
						className='p-4 font-bold w-[150px] h-[72px] bg-blue-600 hover:bg-blue-700 text-slate-200  hover:text-slate-100'
						onClick={() => setLogin(true)}
					>
						Войти
					</button>
				</div>
			</>
		)
	}
}

export default App
