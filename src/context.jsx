import axios from 'axios';
import React from 'react';
import {
	useState,
	useEffect,
	useContext,
} from 'react';
const api_key =
	'api_key=2a12949e4f97f36d04a71b9cdafee3e1';
const url = 'https://api.themoviedb.org/3/movie';
const searchUrl =
	'https://api.themoviedb.org/3/search/movie?api_key=2a12949e4f97f36d04a71b9cdafee3e1&query=';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [searchPage, setSearchPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [type, setType] = useState('popular');
	const [searchTerm, setSearchTerm] =
		useState('');
	const getMovies = async () => {
		setLoading(true);
		try {
			const response = await axios(
				`${url}/${type}?${api_key}&page=${page}`
			);
			const data = await response.data;
			const { results } = data;
			if (results) {
				const newMovies = results.map((item) => {
					const {
						id,
						title,
						release_date,
						overview,
						poster_path,
						vote_average,
					} = item;
					return {
						id: id,
						title: title,
						date: release_date,
						overview: overview,
						image: poster_path,
						star: vote_average,
					};
				});
				setMovies(newMovies);
			} else {
				setMovies([]);
			}
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	const searchMovies = async () => {
		try {
			const response = await axios(
				`${searchUrl}${searchTerm}&page=${page}`
			);
			const data = await response.data;
			const { results } = data;
			if (results) {
				const newMovies = results.map((item) => {
					const {
						id,
						title,
						release_date,
						overview,
						poster_path,
					} = item;
					return {
						id: id,
						title: title,
						date: release_date,
						overview: overview,
						image: poster_path,
					};
				});
				setMovies(newMovies);
			} else {
				setMovies([]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovies();
	}, [page, type]);
	useEffect(() => {
		searchMovies();
	}, [searchTerm, page]);
	return (
		<AppContext.Provider
			value={{
				movies,
				page,
				setPage,
				loading,
				setLoading,
				setType,
				setSearchTerm,
				searchPage,
				setSearchPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
/*.then((json) => {
			setMovies(json);
		});*/
