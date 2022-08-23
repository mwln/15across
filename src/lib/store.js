import { writable } from "svelte/store";

let key;
let code;
let x = 0
let y = 0;

const MAPPINGS = {
	h: {x: -1, y: 0},
	j: {x: 0, y: -1},
	k: {x: 0, y: 1},
	l: {x: 1, y: 0}
}

function movement(event, keylog) {
	if (MAPPINGS[event.key]) {
		keylog.x += MAPPINGS[event.key].x
		keylog.y += MAPPINGS[event.key].y
		keylog.key = event.key
		keylog.code = event.code
		return keylog
	}
	return keylog
}

function keylog() {
    const { subscribe, set, update } = writable({key, code, x, y});
    
    return {
		subscribe,
		handleKeydown: (e) => update(n => movement(e, n))
		}
	};

export const watch = keylog();
