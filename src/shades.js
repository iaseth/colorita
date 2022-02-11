


export function getTints (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red + ((255 - red) * i / n));
		let g = Math.floor(green + ((255 - green) * i / n));
		let b = Math.floor(blue + ((255 - blue) * i / n));
		return {r, g, b};
	});
	return colors;
}

export function getShades (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red - (red * i / n));
		let g = Math.floor(green - (green * i / n));
		let b = Math.floor(blue - (blue * i / n));
		return {r, g, b};
	});
	return colors;
}

export function getTintsAndShades (red, green, blue, n) {
	let tints = getTints(red, green, blue, n).reverse();
	tints.pop();
	let shades = getShades(red, green, blue, n);
	return [...tints, ...shades];
}


