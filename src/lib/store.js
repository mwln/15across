import { writable, derived } from "svelte/store";

const KEYLOG = {
	key: null, 
	code: null,
}
const HIGHLIGHTER = {x: 0, y: 0}
const GRID_INFO = {
	minSize: 5,
	maxSize: 25,
	initSize: 8,
}
export const MAPPINGS = {
	h: {x: -1, y: 0, desc: "LEFT"},
	j: {x: 0, y: 1, desc: "DOWN"},
	k: {x: 0, y: -1, desc: "UP"},
	l: {x: 1, y: 0, desc: "RIGHT"}
}

function highlight(width, movement, now) {
	console.log(width)
	console.log(movement)
	console.log(now)
	let cap = width-1
	let nx = movement.x + now.x
	let ny = movement.y + now.y	

	// boundary handling
	if (nx > cap && ny == cap) 	{ nx = 0; 	ny = 0 }
	if (nx > cap && ny < cap)	{ nx = 0; 	ny += 1}
	if (nx < 0 && ny > 0)		{ nx = cap; 	ny -= 1}
	if (nx < 0 && ny == 0) 		{ nx = cap;}	
	
	if (ny < 0)			{ ny = cap}
	if (ny > cap)			{ ny = 0 }

	return { x: nx, y: ny }
}

function openKeylog() {
    const { subscribe, set } = writable(KEYLOG);
    
    return {
		subscribe,
		log: (e) => set({key: e.key, code: e.keyCode})
		}
};

function openGrid() {
    const { subscribe, set, update } = writable(GRID_INFO.initSize);
    return {
	    subscribe,
	    add: (size) => update(n => n+size > GRID_INFO.maxSize ? n : n+size),
	    reduce: (size) => update(n => n-size < GRID_INFO.minSize ? n : n-size),
	    reset: () => set(GRID_INFO.initSize)
    }
}    

function openHighlighter() {
	const { subscribe, set, update } = writable(HIGHLIGHTER)
	return {
		subscribe,
		move: (width, movement) => update(n => highlight(width, movement, n)),
	}
}

export const keylog = openKeylog();
export const grid = openGrid();
export const highlighter = openHighlighter();
export const movement = derived(keylog, $keylog => MAPPINGS[ $keylog.key ], {x:0, y:0});
