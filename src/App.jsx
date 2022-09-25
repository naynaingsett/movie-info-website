import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleMovie from './pages/SingleMovie';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='*' element={<Error />} />
				<Route
					path='movie/:id'
					element={<SingleMovie />}
				/>
			</Routes>
		</Router>
	);
}
