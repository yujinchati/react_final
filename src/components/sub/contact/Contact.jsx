import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Contact.scss';

export default function Contact() {
	const { kakao } = window;

	const [Index, setIndex] = useState(0);
	const mapFrame = useRef(null);
	const marker = useRef(null);

	const mapInfo = useRef([
		{
			title: 'MAD Office (HQ)',
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
			address: '412, Moraenae-ro, Seodaemun-gu, Seoul, Republic of Korea',
			tel: '+86 10 64026632, 64031080, 64016894',
		},
		{
			title: 'Design Office(DO)',
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
			address: '412, Moraenae-ro, Seodaemun-gu, Seoul, Republic of Korea',
			tel: '+86 10 64026632, 64031080, 64016894',
		},
		{
			title: 'PRESS Office (POF)',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
			address: '412, Moraenae-ro, Seodaemun-gu, Seoul, Republic of Korea',
			tel: '+86 10 64026632, 64031080, 64016894',
		},
	]);

	marker.current = new kakao.maps.Marker({
		position: mapInfo.current[Index].latlng,
	});

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(mapFrame.current, {
			center: mapInfo.current[Index].latlng,
			level: 3,
		});

		marker.current.setMap(mapInstance);
	}, [Index, kakao]);

	return (
		<Layout title={'Contact'}>
			<section>
				<div className='addressBox'>
					<h3>Direction</h3>
					<div className='detailAddress'>
						<p className='desc'>
							MAD currently has offices in Beijing, Los Angeles, Rome and Jiaxing. Over 150 talented, passionate and creative Madders from all over
							the world are having architecture practices in Americas, Europe and Asia. Our projects include the Harbin Opera House, the Lucas Museum
							of Narrative Art, the Quzhou Sports Campus and the Absolute Towers in Mississauga.
						</p>
						<ul className='liAddress'>
							{mapInfo.current.map((el, idx) => (
								<li>
									<dl className='officeInfo'>
										<dt>Office Name</dt>
										<dd className='title'>{el.title}</dd>
										<dt>Office Address</dt>
										<dd>{el.address}</dd>
										<dt>Office TEL</dt>
										<dd>{el.tel}</dd>
									</dl>
									<button key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
										{`SEE MAP ->`}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div id='mapSection' className='mapBox' ref={mapFrame}></div>
			</section>
		</Layout>
	);
}
