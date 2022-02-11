
import * as accessibility from './accessibility.js';
import * as convert from './convert.js';
import * as mix from './mix.js';
import * as shades from './shades.js';

function colorita () {
	console.log("colorita says hello!");
}

const obj = {
	colorita,
	...accessibility,
	...convert,
	...mix,
	...shades
};

export default obj;
