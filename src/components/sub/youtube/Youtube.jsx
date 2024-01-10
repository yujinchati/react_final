import './Youtube.scss';
import Layout from '../../common/layout/Layout';
import { useCustomText } from '../../../hook/useText';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useYoutubeQuery } from '../../../hook/useYoutubeQuery';

export default function Youtube() {
	const upperTxt = useCustomText('upper');
	const { data: Vids, isSuccess, isError, error, isLoading } = useYoutubeQuery();

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
					{isLoading && <p>Loading...</p>}
					{isSuccess &&
						Vids.map((data, idx) => {
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
					{isError && <p>데이터 반환에 실패했습니다.</p>}
				</ul>
			</section>
		</Layout>
	);
}
