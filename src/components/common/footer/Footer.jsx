import './Footer.scss';
import { FaYoutubeSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className='Footer'>
			<div className='inner'>
				<h2>Retreat</h2>
				<small class='txt_copyright'>Copyright ©Retreat Corp. All rights reserved.</small>
				<ul>
					<li>
						<a href='#' target='_blank'>
							<FaYoutubeSquare size='20' color='#36363D' />
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<FaInstagramSquare size='20' color='#36363D' />
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<FaFacebookSquare size='20' color='#36363D' />
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<FaTwitterSquare size='20' color='#36363D' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
