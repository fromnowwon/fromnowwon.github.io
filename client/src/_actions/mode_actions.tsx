import { 
	PAGE_MODE
} from "./types";

// Action creator
export function modeHandler() {
	let location = window.location.pathname.split('/')[1];
	let mode = '';

	if (location === "lab") {
		mode = 'dark-mode'
	} else if (location === "contact") {
		mode = 'pink-mode'
	} else {
		mode = 'default-mode';
	}

	// Action 반환
	return {
		type: PAGE_MODE,
		payload: mode
	}
}