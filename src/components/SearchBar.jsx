import React from 'react';
import { useGlobalContext } from '../context';
const Navbar = () => {
	const { setSearchTerm } = useGlobalContext();
	const handleSubmit = (e) => e.preventDefault();
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='form'
		>
			<input
				type='text'
				onChange={handleSearchChange}
				placeholder='Search...'
				className='input'
			/>
		</form>
	);
};

export default Navbar;
