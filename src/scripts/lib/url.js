export function objToStr(op, obj){
	var str = op;
	Object.keys(obj).forEach(function(key){
		var value = obj[key];
		str += key + '=' + value + '&';
	});
	return str.substr(0, str.length - 1);
}

export function strToObj(str){
	var op = (str[0] === '#' || str[0] === '?') ? str[0] : new Error('Invalid URL String'),
		full = str.slice(str.indexOf(op) + 1),
		arr = full.split('&'), obj = {};
	arr.forEach(function(n, i){
		var t = n.split('=');
		obj[t[0]] = t[1];
	});
	return obj || op;
}

export function	getDomain(){
	return location.hostname.split('.')[1];
}


export function	getsubdomain(){
	return location.hostname.split('.')[0];
}

export function getParameter(name, type){
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location[type]);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}