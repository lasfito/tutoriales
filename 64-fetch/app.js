fetch('/user')
	.then(res => res.json())
	.then(user => console.log('do something', user));

// conver this code to promise based
/* const res = await fetch('/user');
const user = await res.json();
 */

// ERROR HANDLING
try {
	const res = await fetch('/user');
	const user = await res.json();
} catch (err) {
	logAndHandlerError(err);
}

// OK AND CONTENT TYPE

//The response headers are available in a Map-like headers object in response.headers.


try {
	const res = await fetch('/user');

	if (!res.ok || res.headers.get('Content-Type') !== 'application/json') {
		throw new Error('Unexpected status code or content type');
		// 'Unexpected status code or content type'
	}

	const user = await res.json();
} catch (err) {
	logAndHandleError(err);
}

// CUSTOME ERROR

class ResponseError extends Error {
	constructor(message, response) {
		super(message);
		this.response = response;
	}
}

try {
	const res = await fetch('/user');

	if (!res.ok || res.headers.get('Content-Type') !== 'application/json') {
		throw new ResponseError('Unexpected status code or content type', response);
	}

	const user = await res.json();
} catch (err) {
	function logAndHandleError(err) {
		if (err instanceof ResponseError) {
			// err.response?.status:
			// 400
			// 500
			// 404
		}
	}
	logAndHandleError(err);
}

// CAUSE
try {
	const res = await fetch('/user');

	if (!res.ok || res.headers.get('Content-Type') !== 'application/json') {
		throw new Error('Unexpected status code or content type', {
			cause: { res },
		});
	}

	const user = await res.json();
} catch (err) {
	function logAndHandleError(err) {
		// err.cause.res?.status:
		// 400
		// 500
		// 404
	}
	logAndHandleError(err);
}

// eliminar application/json

try {
	const res = await fetch('/user');

	if (!res.ok || res.headers.get('Content-Type') !== 'application/json') {
		throw new Error('Unexpected status code or content type', {
			cause: { res },
		});
	}

	const user = await res.json();
} catch (err) {
	function logAndHandleError(err) {
		// err.cause.res?.status:
		// 400
		// 500
		// 404

		if (err instanceof SyntaxError) {
			// surprise, there was no json
		}

		if (err.headers.get('Content-Type') !== 'application/json') {
		}
	}
	logAndHandleError(err);
}

//AbortController




/* Response provides multiple promise-based methods to access the body in various formats:

response.text() – read the response and return as text,
response.json() – parse the response as JSON,
response.formData() – return the response as FormData object (explained in the next chapter),
response.blob() – return the response as Blob (binary data with type),
response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.
 */
