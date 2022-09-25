import React from 'react';
import {
	BsLinkedin,
	BsGithub,
} from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
const About = () => {
	return (
		<section>
			<div className='about'>
				<h1>About the website</h1>
				<p>
					This product uses the TMDB API but is
					not endorsed or certified by TMDB.
				</p>
				<p>
					I made this website as a beta project
					for my portfolio.
				</p>
				<p>
					Features I could have added more if I
					had much more time:
				</p>
				<ul>
					<li>- TV shows</li>
					<li>- sorting by genres</li>
					<li>
						- prettier user-interface and color
						scheme
					</li>
				</ul>
				<p>
					This movie info website is made by Nay
					Naing Sett, a Mechanical Engineer turned
					Developer.
				</p>
				<p>
					If you are interested to work with me,
					contact me.
				</p>
				<div>
					<a
						href='https://www.linkedin.com/in/nay-naing-sett-162359244'
						target='_blank'
					>
						<BsLinkedin className='contact' />
					</a>
					<a
						href='https://github.com/naynaingsett'
						target='_blank'
					>
						<BsGithub className='contact' />
					</a>
					<a
						href='https://hashnode.com/@TomSett'
						target='_blank'
					>
						<SiHashnode className='contact' />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
