import React from 'react';
import Movie from './Movie';
import { useGlobalContext } from '../context';
import Loading from './Loading';
const MovieList = () => {
	const { movies, loading } = useGlobalContext();
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<section>
				<div className='movie-container'>
					{movies &&
						movies.map((item) => {
							return (
								<Movie key={item.id} {...item} />
							);
						})}
				</div>
			</section>
		</>
	);
};

export default MovieList;
