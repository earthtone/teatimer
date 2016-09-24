export default function (method, url, args) {
	// Creating a promise
	var promise = new Promise( function (resolve, reject) {

	  // Instantiates the XMLHttpRequest
	  var client = new XMLHttpRequest();
	  var uri = url;

	  if (args && (method === 'POST' || method === 'PUT')) {
	    // uri += '?';
	    var argcount = 0;
	    for (var key in args) {
	      if (args.hasOwnProperty(key)) {
	        if (argcount++) {
	          uri += '&';
	        }
	        uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
	      }
	    }
		  client.open(method);
		  client.send(uri);
	  } else {
		  client.open(method, uri);
		  client.send();
	  }

	  client.onload = function () {
	    if (this.status >= 200 && this.status < 300) {
	      // Performs the function "resolve" when this.status is equal to 2xx
	      resolve(this.response);
	    } else {
	      // Performs the function "reject" when this.status is different than 2xx
	      reject(this.statusText);
	    }
	  };
	  client.onerror = function () {
	    reject(this.statusText);
	  };
	});

	// Return the promise
	return promise;
}