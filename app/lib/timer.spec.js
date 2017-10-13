const assert = require('assert');
const timer = require('./timer');
const Events = require('events');

describe('Timer Function', function(){
	var $el, bus = new Events.EventEmitter();

	beforeEach(function(){
		$el = document.createElement('div');
	});

	afterEach(function(){
		$el.textContent = '';
	});

	it('takes in a minute duration and an HTML Element and updates the Element\'s Content', function(){
		var actual = timer(3, $el, bus),
			expected = $el.textContent;

		setInterval(function(){
			assert.equal(actual, expected);
		}, 1000);
	});

	it('fires an end event when done', function(){
		var expected = true,
			actual = false;

		bus.on('stop-timer', function(){
			actual = true;
		});

		setTimeout(function(){
			assert.equal(actual, expected);
		}, 60000);
	});
});