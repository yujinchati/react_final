import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Layout from '../../common/layout/Layout';
import './Department.scss';

export default function Department() {
	const [MemberInfo, setMemberInfo] = useState();
	const [ExhibitionsInfo, setExhibitions] = useState();
	const [LecturesInfo, setLectures] = useState();
	const [AwardsInfo, setAwards] = useState();

	const path = useRef(process.env.PUBLIC_URL);
	const fetchMember = async () => {
		try {
			const data = await fetch(`${path.current}/DB/department.json`);
			const json = await data.json();
			setMemberInfo(json.members);
			setExhibitions(json.exhibitions);
			setLectures(json.lectures);
			setAwards(json.awards);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchMember();
	}, []);

	return (
		<Layout title={'Department'}>
			<section>
				<div className='awardBox'>
					<ul className='listAward'>
						<li>
							<button type='button'>Exhibitions</button>
						</li>
						<li>
							<button type='button'>Lectures</button>
						</li>
						<li>
							<button type='button'>Awards & Recognition</button>
						</li>
					</ul>
					<div class='detailAward'>
						<ul>
							{ExhibitionsInfo &&
								ExhibitionsInfo.map((data, idx) => {
									return (
										<li kay={data.idx}>
											<strong>{data.year}</strong>
											<p>{data.desc}</p>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
				<div className='memberBox'>
					<h3>People</h3>
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
