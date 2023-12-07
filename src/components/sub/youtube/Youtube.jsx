import './Youtube.scss';
import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import { useCustomText } from '../../../hook/useText';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Youtube() {
	const upperTxt = useCustomText('upper');
	const [vidList, setvidList] = useState();
	const fetchYoutube = async () => {
		const api_key = 'AIzaSyAGQQAc30WFVJWFnaZ0xLYoGa-J0PLtu1E';
		const pid = 'PLV27B61FcKAXJrIYY52dsHtVtJzzHS1PM';
		const num = 10;
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

		try {
			const data = await fetch(baseURL);
			const json = await data.json();
			setvidList(json.items);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		fetchYoutube();
	}, []);

	//날짜 문자열 변환
	const dateTxt = (date) => {
		let newDate = new Date(date);
		newDate = newDate.toDateString().split(' ');
		return newDate;
	};

	return (
		<Layout title={'Youtube'}>
			<section>
				<ul className='listYoutube'>
					{vidList &&
						vidList.map((data, idx) => {
							return (
								<li>
									<div className='date'>
										<span className='month'>{upperTxt(dateTxt(data.snippet.publishedAt)[1])}</span>
										<span className='day'>{dateTxt(data.snippet.publishedAt)[2]}</span>
									</div>
									<div className='pic'>
										<img
											src={data.snippet.thumbnails.standard ? data.snippet.thumbnails.standard.url : '/img/member1.jpg'}
											alt={data.snippet.title}
										/>
									</div>
									<div className='info'>
										<strong>{data.snippet.title}</strong>
										<p>{data.snippet.description}</p>
										<Link to={`/detail/${data.id}`}>
											View Video Detail <IoIosArrowRoundForward />
										</Link>
									</div>
								</li>
							);
						})}
				</ul>
			</section>
		</Layout>
	);
}
