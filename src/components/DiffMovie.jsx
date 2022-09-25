import React from 'react';
import { useGlobalContext } from '../context';
import { AiFillHome } from 'react-icons/ai';
import SearchBar from './SearchBar';
const DiffMovie = () => {
	const { setType, setPage } = useGlobalContext();
	return (
		<>
			<SearchBar />
			<div className='movie-type'>
				<button
					className='type-btn'
					onClick={() => {
						setType('popular');
						setPage(1);
					}}
				>
					<AiFillHome />
				</button>
				<button
					className='type-btn'
					onClick={() => {
						setType('popular');
						setPage(1);
					}}
				>
					Popular
				</button>
				<button
					className='type-btn'
					onClick={() => {
						setType('now_playing');
						setPage(1);
					}}
				>
					Now Playing
				</button>
				<button
					className='type-btn'
					onClick={() => {
						setType('top_rated');
						setPage(1);
					}}
				>
					Top Rated
				</button>
				<button
					className='type-btn'
					onClick={() => {
						setType('upcoming');
						setPage(1);
					}}
				>
					Upcoming
				</button>
			</div>
		</>
	);
};

export default DiffMovie;
