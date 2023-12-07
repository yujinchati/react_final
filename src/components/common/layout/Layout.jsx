import { useEffect, useRef } from 'react';
import './Layout.scss';
import { useCustomText } from '../../../hook/useText';

export default function Layout({ title, children }) {
	const refFrame = useRef(null);
	const refTitle = useRef(null);

	const upperTxt = useCustomText('upper');

	useEffect(() => {
		setTimeout(() => {
			refFrame.current.classList.add('on');
		}, 100);
	}, []);
	return (
		<main className={`Layout ${title}`}>
			<h2 ref={refFrame}>{upperTxt(title)}</h2>
			{children}
		</main>
	);
}
