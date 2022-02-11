


export function shadeX (x) {
	return Math.floor(x * 0.9);
}

export function tintX (x) {
	if (x < 20) {
		return (x + 2)
	} else {
		let y = Math.floor(x * 1.1);
		return (y < 255) ? y : 255;
	}
}

export function toneX (x) {
	if (x === 128) {
		return 128;
	} else {
		let change = Math.ceil(Math.abs(x - 128) * 0.1);
		return (x < 128) ? (x + change) : (x - change);
	}
}

export function mixX (x, y) {
	if (x === y) {
		return x;
	}

	let change = Math.ceil(Math.abs(x - y) * 0.1);
	return (x < y) ? (x + change) : (x - change);
}

export function mixHex (base, mix) {
	let [br, bg, bb] = hexToRgb(base);
	let [mr, mg, mb] = hexToRgb(mix);
	let nr = mixX(br, mr);
	let ng = mixX(bg, mg);
	let nb = mixX(bb, mb);
	return [nr, ng, nb];
}


