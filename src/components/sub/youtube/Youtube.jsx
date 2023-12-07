import './Youtube.scss';
import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';

export default function Youtube() {
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

	return (
		<Layout title={'Youtube'}>
			<h2>YOUTUBE</h2>
			<section>
				<ul className='listYoutube'>
					{vidList &&
						vidList.map((data, idx) => {
							return (
								<li>
									<span>{data.snippet.publishedAt}</span>
									<div className='pic'>
										<img
											src={data.snippet.thumbnails.standard ? data.snippet.thumbnails.standard.url : '/img/member1.jpg'}
											alt={data.snippet.title}
										/>
									</div>
									<div className='info'>
										<strong>{data.snippet.title}</strong>
										<p>{data.snippet.description}</p>
										<a href='#'>View Detail -</a>
									</div>
								</li>
							);
						})}
				</ul>
			</section>
		</Layout>
	);
}
