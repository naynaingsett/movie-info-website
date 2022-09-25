import React from 'react';
import { useGlobalContext } from '../context';
import {
	BsFillSkipBackwardFill,
	BsFillSkipForwardFill,
} from 'react-icons/bs';
const Pagination = () => {
	const { page, setPage } = useGlobalContext();
	const nextPage = () => {
		setPage((prev) => prev + 1);
	};
	const prevPage = () => {
		page > 1
			? setPage((prev) => prev - 1)
			: setPage(1);
	};
	const next4Page = () => {
		setPage((prev) => prev + 4);
	};
	const prev4Page = () => {
		page <= 4
			? setPage(1)
			: setPage((prev) => prev - 4);
	};
	return (
		<div className='pagination'>
			{page === 1 ? (
				''
			) : (
				<button
					onClick={() => setPage(1)}
					className='p-btn'
				>
					1
				</button>
			)}
			<button
				className='p-btn'
				onClick={() => {
					prev4Page();
				}}
			>
				<BsFillSkipBackwardFill />
			</button>

			<button
				className='p-btn'
				onClick={() => {
					prevPage();
				}}
			>
				prev
			</button>
			<button className='p-btn'>{page}</button>
			<button
				className='p-btn'
				onClick={() => {
					nextPage();
				}}
			>
				next
			</button>
			<button
				className='p-btn'
				onClick={() => {
					next4Page();
				}}
			>
				<BsFillSkipForwardFill />
			</button>
		</div>
	);
};

export default Pagination;
