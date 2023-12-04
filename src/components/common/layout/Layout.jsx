import { useEffect, useRef } from 'react';
import './Layout.scss';

export default function Layout({ title, children }) {
	const refFrame = useRef(null);
	const refTitle = useRef(null);

	useEffect(() => {}, []);
	return (
		<main ref={refFrame} className={`Layout ${title}`}>
			{children}
		</main>
	);
}
