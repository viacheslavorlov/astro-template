export const textAdapt = (text: string, length: number, dots: boolean) => {
	return dots && text.length > length ? text.slice(0, length) + '...' : text.slice(0, length);
};
