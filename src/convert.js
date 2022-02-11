


export function hexToRgb (hex) {
	if (hex[0] === "#") hex = hex.slice(1);

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	if (hex.length !== 6) return [0, 0, 0];

	let bigint = parseInt(hex, 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;

	return [r, g, b];
}

export function roundOffComponent (c) {
	if (c < 0) return 0;
	if (c > 255) return 255;
	return c;
}

export function componentToHex (c) {
	let hex = c.toString(16);
	return (hex.length === 1) ? "0" + hex : hex;
}

export function rgbToHex (r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



export function hslToRgb (h, s, l) {
	s /= 100;
	l /= 100;

	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs((h / 60) % 2 - 1));
	let m = l - c/2;

	let r = 0, g = 0, b = 0;

	if (0 <= h && h < 60) {
		r = c; g = x; b = 0;
	} else if (60 <= h && h < 120) {
		r = x; g = c; b = 0;
	} else if (120 <= h && h < 180) {
		r = 0; g = c; b = x;
	} else if (180 <= h && h < 240) {
		r = 0; g = x; b = c;
	} else if (240 <= h && h < 300) {
		r = x; g = 0; b = c;
	} else if (300 <= h && h < 360) {
		r = c; g = 0; b = x;
	}

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];
}

export function rgbToHsl (r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;

	let cmin = Math.min(r, g, b);
	let cmax = Math.max(r, g, b);
	let delta = cmax - cmin;

	let h = 0, s = 0, l = 0;

	if (delta === 0) {
		h = 0;
	} else if (cmax === r) {
		h = ((g-b) / delta) + 6;
	} else if (cmax === g) {
		h = ((b-r) / delta) + 2;
	} else {
		h = ((r-g) / delta) + 4;
	}

	h = Math.round(h * 60);
	if (h < 0) h += 360;
	if (h >= 360) h -= 360;

	l = (cmax + cmin) / 2;
	s = (delta === 0) ? 0 : delta / (1 - Math.abs(2 * l - 1));

	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return [h, s, l];
}
