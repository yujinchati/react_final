import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.scss';

export default function Header() {
	return (
		<header className='Header'>
			<h1>
				<Link to='/'>Retreat</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department' activeClassName={'on'}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={'on'}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={'on'}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeClassName={'on'}>
						Community
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeClassName={'on'}>
						Members
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={'on'}>
						Contact
					</NavLink>
				</li>
			</ul>
			<button type='button'>Mobile Menu</button>

			<div class='checkSwitch'>
				<input type='checkbox' id='checkPush' name='inpPush' class='inpSwitch' />
				<label for='checkPush' class='labSwitch'>
					Dark mode change
				</label>
			</div>
		</header>
	);
}
