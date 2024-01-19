import './Footer.scss';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaYoutubeSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className='Footer'>
			<div className='inner'>
				<h2>Retreat</h2>
				<div className='info'>
					<strong>INFOMATION</strong>
					<ul className='infoMenu'>
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
				</div>
				<div className='info'>
					<strong>CONTACT</strong>
					<dl>
						<dt>e-mail</dt>
						<dd>info@retreat.com</dd>
						<dt>phone</dt>
						<dd>050423154545</dd>
						<dt>address</dt>
						<dd>
							312 w.islay st.
							<br /> santa barbara CA US
						</dd>
					</dl>
					<ul className='infoSns'>
						<li>
							<a href='#' target='_blank'>
								<FaYoutubeSquare size='20' color='#FFF' />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<FaInstagramSquare size='20' color='#FFF' />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<FaFacebookSquare size='20' color='#FFF' />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<FaTwitterSquare size='20' color='#FFF' />
							</a>
						</li>
					</ul>
				</div>
				<small className='txt_copyright'>Copyright ©Retreat Corp. All rights reserved.</small>
			</div>
		</div>
	);
}
