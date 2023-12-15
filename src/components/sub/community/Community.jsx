import Layout from '../../common/layout/Layout';
import './Community.scss';

export default function Community() {
	return (
		<Layout title={'Community'}>
			<section>
				<div className='inputBox'>
					<h3>Talk</h3>
					<div className='write'>
						<input type='text' placeholder='title' />
						<textarea cols='30' rows='3' placeholder='content'></textarea>
					</div>
					<div className='btnWrap'>
						<button type='button' className='cancle hide'>
							CANCLE
						</button>
						<button type='button' className='submit'>
							WRITE
						</button>
					</div>
				</div>
				<div className='listBox'>
					<ul>
						<li>
							<strong className='tit'>제목ㅈ목제목ㅈ목제목ㅈ목제목ㅈ목</strong>
							<p className='desc'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quam sequi nemo cum magni numquam voluptatem natus vitae obcaecati nulla
								delectus, libero nobis incidunt facilis praesentium. Sint nisi tenetur alias!
							</p>
							<span className='date'></span>
							<div className='btnWrap'>
								<button type='button'>Edit</button>
								<button type='button'>Delete</button>
							</div>
						</li>
						<li>
							<strong className='tit'>제목ㅈ목제목ㅈ목제목ㅈ목제목ㅈ목</strong>
							<p className='desc'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quam sequi nemo cum magni numquam voluptatem natus vitae obcaecati nulla
								delectus, libero nobis incidunt facilis praesentium. Sint nisi tenetur alias!
							</p>
							<span className='date'></span>
							<div className='btnWrap'>
								<button type='button'>Edit</button>
								<button type='button'>Delete</button>
							</div>
						</li>
						<li>
							<strong className='tit'>제목ㅈ목제목ㅈ목제목ㅈ목제목ㅈ목</strong>
							<p className='desc'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quam sequi nemo cum magni numquam voluptatem natus vitae obcaecati nulla
								delectus, libero nobis incidunt facilis praesentium. Sint nisi tenetur alias!
							</p>
							<span className='date'></span>
							<div className='btnWrap'>
								<button type='button'>Edit</button>
								<button type='button'>Delete</button>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
}
