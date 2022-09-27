import React from 'react';
import axios from 'axios';
import {
	useParams,
	Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { IoIosArrowBack } from 'react-icons/io';
const SingleMovie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [readMore, setReadMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const getDetail = async () => {
		setLoading(true);
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/movie/${id}?api_key=2a12949e4f97f36d04a71b9cdafee3e1`
			);
			const data = await response.data;
			return data;
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getDetail().then((item) => {
			setMovie(item);
		});
		setLoading(false);
	}, []);
	if (loading) {
		return <Loading />;
	}
	return (
		movie && (
			<section className='info-container'>
				<div className='image-container'>
					<Link to='/' className='back'>
						<IoIosArrowBack />
					</Link>
					<img
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						className='info-image'
					/>
				</div>
				<div className='detail-info'>
					<div>
						<h1>{movie.title}</h1>
					</div>
					{movie.title !==
					movie.original_title ? (
						<div>
							<h6>{movie.original_title}</h6>
						</div>
					) : (
						''
					)}
					<div>
						<p>
							<span className='info-btn'>
								Release Date:
							</span>
							{movie.release_date}
						</p>
					</div>
					<div className='genre'>
						{movie.genres &&
							movie.genres.map((item, index) => {
								return item ? (
									<p key={index}>
										<span className='genre-name'>
											{item.name}
										</span>
									</p>
								) : (
									''
								);
							})}
					</div>
					<div>
						<a
							href={movie.homepage}
							target='_blank'
							className='info-btn'
						>
							Original Source
						</a>
					</div>
					<div>
						<p className='overview'>
							{movie.overview && readMore
								? `${movie.overview.substring(
										0,
										200
								  )}`
								: movie.overview}
							{movie.overview &&
							movie.overview.length > 200 ? (
								<button
									className='readMore'
									onClick={() =>
										setReadMore(!readMore)
									}
								>
									{readMore
										? '...read more'
										: 'show less'}
								</button>
							) : (
								''
							)}
						</p>
					</div>
					<div>
						<p>
							<span className='info-btn'>
								Popularity:
							</span>
							{movie.popularity}
						</p>
					</div>
				</div>
			</section>
		)
	);
};

export default SingleMovie;
