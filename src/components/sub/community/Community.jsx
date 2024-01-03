import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Community.scss';

export default function Community() {
	const refTit = useRef(null);
	const refCon = useRef(null);

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return [];
	};
	const [Post, setPost] = useState(getLocalData);
	const creatPost = () => {
		if (!refTit.current.value.trim() || !refCon.current.value.trim()) {
			resetPost();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		const korTime = new Date().getTime() + 1000 * 60 * 60 * 9;
		setPost([{ title: refTit.current.value, content: refCon.current.value, date: new Date(korTime) }, ...Post]);
		resetPost();
	};
	const resetPost = () => {
		refTit.current.value = '';
		refCon.current.value = '';
	};
	const deletePost = (delIndex) => {
		//기존 map과 마찬가지로 기존 배열값을 deep copy해서 새로운배열 반환
		//이때 안쪽에 조건문을 처리해서 특정 조건에 부합되는 값만 filtering해서 리턴
		setPost(Post.filter((_, idx) => delIndex !== idx));
	};
	const editPost = (editIndex) => {
		setPost(
			Post.map((el, idx) => {
				if (editIndex === idx) el.enableUpdate = true;
				return el;
			})
		);
	};
	const editCancle = (editIndex) => {
		setPost(
			Post.map((el, idx) => {
				if (editIndex === idx) el.enableUpdate = false;
				return el;
			})
		);
	};
	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Post));
	}, [Post]);
	return (
		<Layout title={'Community'}>
			<section>
				<div className='inputBox'>
					<h3>Talk</h3>
					<form className='write'>
						<input type='text' placeholder='title' ref={refTit} />
						<textarea cols='30' rows='3' placeholder='content' ref={refCon}></textarea>
					</form>
					<div className='btnWrap'>
						<button type='button' className='cancle blind' onClick={resetPost}>
							CANCLE
						</button>
						<button type='button' className='submit' onClick={creatPost}>
							WRITE
						</button>
					</div>
				</div>
				<div className='listBox'>
					<ul>
						{Post.map((data, idx) => {
							const date = JSON.stringify(data.date);
							const strDate = date ? date.split('T')[0].slice(1) : '';
							if (data.enableUpdate) {
								return (
									<li key={data + idx} className='edit'>
										<input type='text' className='tit' value={data.title} />
										<textarea className='desc'>{data.content}</textarea>
										<div className='btnWrap'>
											<button type='button' onClick={() => editCancle(idx)}>
												Cancle
											</button>
											<button type='button' onClick={() => deletePost(idx)}>
												Save
											</button>
										</div>
									</li>
								);
							} else {
								return (
									<li key={data + idx}>
										<strong className='tit'>{data.title}</strong>
										<p className='desc'>{data.content}</p>
										<span className='date'>{strDate}</span>
										<div className='btnWrap'>
											<button type='button' onClick={() => editPost(idx)}>
												Edit
											</button>
											<button type='button' onClick={() => deletePost(idx)}>
												Delete
											</button>
										</div>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</section>
		</Layout>
	);
}
