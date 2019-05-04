const hys_callback = (callback) => {
	console.log(callback());
} 

const hys_callback_with_arg = (callback) => {
	console.log(callback('hys'));
} 

const hello = () => {
	return 'hello';	
}

const hello_who = (name) => {
	return 'hello ' + name;	
}

const add_event_listener = (func) => {
	document.addEventListener('DOMContentLoaded', func);
}

add_event_listener(hys_callback_with_arg(hello_who));
