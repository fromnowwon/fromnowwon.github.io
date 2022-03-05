import { 
	PAGE_MODE
} from "./types";

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
	
	// 모드 정보를 내보닌다.
	return {
		type: PAGE_MODE,
		payload: mode
	}
}