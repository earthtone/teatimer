import * as view from '../views/index.view';
import Timer from './lib/timer';

export default (function(window, document, undefined){
	'use strict';

	function init(){
		let main = document.getElementById('maincontent');
		main.innerHTML = view.template;

		document.getElementById('submitBtn').addEventListener('click', function(){
			var input = document.getElementById('inputBx').value;
			setTimer(input);
		}, false);
	}

	function setTimer(val){
		var minutes = val * 60, div = document.getElementById('clockdiv');
		return Timer(minutes, div);
	}
	
	window.onload = init;

})(window, document, undefined);