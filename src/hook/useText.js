export function useCustomText(type) {
	//대문자 치환 훅
	if (type === 'upper') {
		return (txt) => {
			return (txt = txt.toUpperCase());
		};
	}
}
