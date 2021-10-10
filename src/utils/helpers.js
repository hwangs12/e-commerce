export const formatPrice = (price) => {
	const decimal = price / 100;
	return "$" + decimal.toFixed(2);
};

export const getUniqueValues = () => {};
