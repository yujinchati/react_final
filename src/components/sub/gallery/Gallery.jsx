import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Gallery.scss';
import { IoIosSearch } from 'react-icons/io';
import { useCustomText } from '../../../hook/useText';
import Masonry from 'react-masonry-component';

export default function Gallery() {
	const upperTxt = useCustomText('upper');
	const myID = useRef('199632221@N03');
	const isUser = useRef(true);
	const tabNav = useRef(null);
	const [Pics, setPics] = useState([]);
	const searched = useRef(false);
	const handleUser = (e) => {
		if (isUser.current) return;
		isUser.current = e.target.innerText;
		fetchFlickr({ type: 'user', id: e.target.innerText });
	};
	const activateBtn = (e) => {
		const links = tabNav.current.querySelectorAll('a');
		links.forEach((a) => a.classList.remove('on'));
		e && e.target.classList.add('on');
	};
	const handleInterest = (e) => {
		if (e.target.classList.contains('on')) return;
		isUser.current = '';
		activateBtn(e);
		fetchFlickr({ type: 'interest' });
	};
	const handleMine = (e) => {
		if (e.target.classList.contains('on') || isUser.current === myID.current) return;
		isUser.current = myID.current;
		activateBtn(e);
		fetchFlickr({ type: 'user', id: myID.current });
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
		fetchFlickr({ type: 'search', keyword: keyword });
		searched.current = true;
	};

	const fetchFlickr = async (opt) => {
		const num = 20;
		const flickr_api = 'ce038f944e7f6b92329629071369b808';
		const baseURL = `https://www.flickr.com/services/rest/?&api_key=${flickr_api}&per_page=${num}&format=json&nojsoncallback=1&extras=description,date_taken&method=`;

		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const interestURL = `${baseURL}${method_interest}`;
		const userURL = `${baseURL}${method_user}&user_id=${opt.id}`;
		const searchUrl = `${baseURL}${method_search}&tags=${opt.keyword}`;

		let url = '';
		opt.type === 'user' && (url = userURL);
		opt.type === 'interest' && (url = interestURL);
		opt.type === 'search' && (url = searchUrl);

		const data = await fetch(url);
		const json = await data.json();
		setPics(json.photos.photo);
	};
	useEffect(() => {
		fetchFlickr({ type: 'interest', id: myID.current });
	}, []);

	return (
		<>
			<Layout title={'Gallery'}>
				<section>
					<div class='control'>
						<ul class='tab' ref={tabNav}>
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
								<legend class='blind'>검색</legend>
								<input type='text' placeholder='Search' class='tf_search' />
								<button type='button' class='btnSearch'>
									<IoIosSearch color='#fff' size='24' />
								</button>
							</fieldset>
						</form>
					</div>
					<Masonry className={'frame'} options={{ transitionDuration: '0.5s' }} columns={4} spacing={2}>
						{searched.current && Pics.length === 0 ? (
							<p>해당 키워드에 대한 검색 결과가 없습니다.</p>
						) : (
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
						;
					</Masonry>
				</section>
			</Layout>
		</>
	);
}
