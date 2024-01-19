import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Layout from '../../common/layout/Layout';
import './Department.scss';

export default function Department() {
	const [MemberInfo, setMemberInfo] = useState();
	const [ExhibitionsInfo, setExhibitions] = useState();

	const path = useRef(process.env.PUBLIC_URL);
	const fetchMember = async (type) => {
		try {
			const data = await fetch(`${path.current}/DB/department.json`);
			const json = await data.json();

			if (!type) {
				setMemberInfo(json.members);
				setExhibitions(json.exhibitions);
			}
			if (type === 'exhibition') setExhibitions(json.exhibitions);
			if (type === 'lectures') setExhibitions(json.lectures);
			if (type === 'awards') setExhibitions(json.awards);
		} catch (err) {
			console.error(err);
		}
	};
	const handleTab = (type) => {
		fetchMember(type);
	};

	useEffect(() => {
		fetchMember();
	}, []);

	return (
		<Layout title={'Department'}>
			<section>
				<div className='awardBox'>
					<ul className='listAward'>
						<li className='on'>
							<a onClick={(e) => handleTab('exhibition')}>#Exhibitions</a>
						</li>
						<li>
							<a onClick={(e) => handleTab('lectures')}>#Lectures</a>
						</li>
						<li>
							<a onClick={(e) => handleTab('awards')}>#Awards & Recognition</a>
						</li>
					</ul>
					<div className='detailAward'>
						<ul>
							{ExhibitionsInfo &&
								ExhibitionsInfo.map((data, idx) => {
									return (
										<li key={data.idx}>
											<strong>{data.year}</strong>
											<p>{data.desc}</p>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
				<div className='memberBox'>
					<h3>#People</h3>
					<ul className=''>
						{MemberInfo &&
							MemberInfo.map((data, idx) => {
								return (
									<li key={`member${idx}`}>
										<img src={`${path.current}/img/${data.pic}`} alt={data.name} />
										<div className='profile'>
											<strong>{data.name}</strong>
											<span>{data.position}</span>
										</div>
										<div className='sns'>
											<a href='#' target='_blank'>
												<FaTwitter size='20' color='white' />
											</a>
											<a href='#' target='_blank'>
												<FaFacebookF size='20' color='white' />
											</a>
											<a href='#' target='_blank'>
												<FaInstagram size='22' color='white' />
											</a>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</section>
		</Layout>
	);
}
