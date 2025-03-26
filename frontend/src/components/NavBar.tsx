import './NavBar.css'

export default function Navbar() {
	return (
		<>
		<div className='top-nav'>
			<a href='/'>SFD</a>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="#">↺</a></li>
				<li><a href="#">Github</a></li>
			</ul>
		</div>
		</>
	)
}