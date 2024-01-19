import { useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Gallery.scss';
import { IoIosSearch } from 'react-icons/io';
import { useCustomText } from '../../../hook/useText';
import Masonry from 'react-masonry-component';
import { useFlickrQuery } from '../../../hook/useFlickrQuery';

export default function Gallery() {
	const upperTxt = useCustomText('upper');
	const myID = useRef('199632221@N03');
	const isUser = useRef(true);
	const tabNav = useRef(null);
	const searched = useRef(false);

	const [Opt, setOpt] = useState({ type: 'interest', id: myID.current });
	const { isSuccess, data: Pics } = useFlickrQuery(Opt);

	const activateBtn = (e) => {
		const links = tabNav.current.querySelectorAll('a');
		links.forEach((a) => a.classList.remove('on'));
		e && e.target.classList.add('on');
	};
	const handleUser = (e) => {
		if (isUser.current) return;
		isUser.current = e.target.innerText;
		activateBtn();
		setOpt({ type: 'user', id: e.target.innerText });
	};
	const handleInterest = (e) => {
		if (e.target.classList.contains('on')) return;
		isUser.current = '';
		activateBtn(e);
		setOpt({ type: 'interest', id: e.target.innerText });
	};
	const handleMine = (e) => {
		if (e.target.classList.contains('on') || isUser.current === myID.current) return;
		isUser.current = myID.current;
		activateBtn(e);
		setOpt({ type: 'user', id: isUser.current });
	};
	const dateChange = (date) => {
		let dateTxt = new Date(date);
		dateTxt = upperTxt(dateTxt.toDateString());
		return dateTxt;
	};
	const handleSearch = (e) => {
		e.preventDefault();
		isUser.current = '';
		activateBtn();
		const keyword = e.target.querySelectorAll('input')[0].value;
		if (!keyword.trim()) return;
		e.target.children[0].value = '';
		setOpt({ type: 'search', keyword: keyword });
		searched.current = true;
	};

	return (
		<>
			<Layout title={'Gallery'}>
				<section>
					<div className='control'>
						<ul className='tab' ref={tabNav}>
							<li>
								<a className='on' onClick={handleInterest}>
									All PROJECT
								</a>
							</li>
							<li>
								<a onClick={handleMine}>COMPLETE PROJECT</a>
							</li>
						</ul>
						<form onSubmit={handleSearch}>
							<fieldset>
								<legend className='blind'>검색</legend>
								<input type='text' placeholder='Search' className='tf_search' />
								<button type='button' className='btnSearch'>
									<IoIosSearch color='#fff' size='24' />
								</button>
							</fieldset>
						</form>
					</div>
					<Masonry className={'frame'} options={{ transitionDuration: '0.5s' }} columns={4} spacing={2}>
						{searched.current && Pics.length === 0 ? (
							<p>해당 키워드에 대한 검색 결과가 없습니다.</p>
						) : (
							isSuccess &&
							Pics.map((pic, idx) => {
								return (
									<div key={pic.id} className='pic'>
										<img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt={pic.title} />
										<div className='profile'>
											<span className='date'>POST ON :{dateChange(pic.datetaken)}</span>
											<strong className='title'>{pic.title}</strong>
											{pic.description ? <p className='desc'>{pic.description._content}</p> : ''}
											<span className='name' onClick={handleUser}>
												{pic.owner}
											</span>
										</div>
									</div>
								);
							})
						)}
					</Masonry>
				</section>
			</Layout>
		</>
	);
}
