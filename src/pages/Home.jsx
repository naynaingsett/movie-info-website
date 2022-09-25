import React from 'react';
import DiffMovie from '../components/DiffMovie';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
const Home = () => {
	return (
		<>
			<DiffMovie />
			<MovieList />
			<Pagination />
			<Footer />
		</>
	);
};

export default Home;
