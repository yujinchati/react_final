import { useEffect, useState } from 'react';

export const useMedia = (opt) => {
	const defOpt = { mobile480: 480, mobile: 640, tablet: 1000, laptop: 1400 };
	const result = { ...defOpt, ...opt };
	const [Type, setType] = useState('');

	const getClientWid = () => {
		let wid = window.innerWidth;
		if (wid >= result.laptop) setType('');
		if (wid >= result.tablet && wid < result.laptop) setType('laptop');
		if (wid >= result.mobile && wid < result.tablet) setType('tablet');
		if (wid >= result.mobile && wid < result.mobile) setType('mobile');
		if (wid >= 0 && wid < result.mobile480) setType('mobile mobile480');
	};

	useEffect(() => {
		getClientWid();
		window.addEventListener('resize', getClientWid);
		return () => window.removeEventListener('resize', getClientWid);
	}, []);

	return Type;
};
