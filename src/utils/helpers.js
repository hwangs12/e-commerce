export const formatPrice = (price) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price / 100);
};

export const getUniqueValues = (list, category) => {
	const categorizedItems = list.map((item) => item[category]);
	if (category === "colors") {
		const flattenedValues = new Set(categorizedItems.flat());
		return ["all", ...flattenedValues];
		// return ["all", ...uniqueColors];
	}
	const uniqueValues = new Set(categorizedItems);
	return ["all", ...uniqueValues];
};
