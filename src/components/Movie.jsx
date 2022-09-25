import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ image, id, title, star }) => {
	return (
		<div className='movie'>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/original${image}`}
					className='poster'
				/>

				<div className='title-detail'>
					<h6>{title}</h6>
					<p className='star'>
						<span>{star}</span>
					</p>
				</div>
			</div>
			<div>
				<Link
					to={`/movie/${id}`}
					className='detail'
				>
					Detail
				</Link>
			</div>
		</div>
	);
};

export default Movie;
