import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Layout from '../../common/layout/Layout';
import './Department.scss';
import { useDepartmentQuery } from '../../../hook/useDepartmentQuery';

export default function Department() {
	const [Opt, setOpt] = useState();
	const path = useRef(process.env.PUBLIC_URL);
	const handleTab = (type) => {
		if (type === 'exhibition') setOpt({ type: 'exhibitions' });
		if (type === 'lectures') setOpt({ type: 'lectures' });
		if (type === 'awards') setOpt({ type: 'awards' });
	};
	const { data: Data, isSuccess: isData } = useDepartmentQuery();
	if (isData) {
		const DataFull = Data;
		setOpt(Data.exhibitions);
		console.log(DataFull);
	}
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
					<div class='detailAward'>
						<ul>
							{isData &&
								Opt.map((data, idx) => {
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
						{isData &&
							Data.members.map((data, idx) => {
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
