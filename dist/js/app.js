// replace these values with those generated in your TokBox Account
var apiKey = '46004832';
var sessionId = '1_MX40NjAwNDgzMn5-MTUxMTc1MDI1MTg1OH40VFZadjlYaUUzWkt3WEtnTzlTeVJwWkx-UH4';
var token = 'T1==cGFydG5lcl9pZD00NjAwNDgzMiZzaWc9NzhkMDVkOTYxYjYxZjIxMjc5ZDMzY2NkODQwMGVkM2FmOGJkNjMyNTpzZXNzaW9uX2lkPTFfTVg0ME5qQXdORGd6TW41LU1UVXhNVGMxTURJMU1UZzFPSDQwVkZaYWRqbFlhVVV6V2t0M1dFdG5UemxUZVZKd1dreC1VSDQmY3JlYXRlX3RpbWU9MTUxMTc1MDI3NCZub25jZT0wLjg5NTk2OTM1MzA5NzU1NDgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxNDM0MjI3MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
 //  var publisher = OT.initPublisher('publisher', {
 //    insertMode: 'append',
 //    width: '100%',
 //    height: '100%'
 //  }, handleError);

 //  // Connect to the session
 //  session.connect(token, function(error) {
 //    // If the connection is successful, publish to the session
 //    if (error) {
 //      handleError(error);
 //    } else {
 //      session.publish(publisher, handleError);
 //    }
 //  });

 //  session.on('streamCreated', function(event) {
	//   session.subscribe(event.stream, 'subscriber', {
	//     insertMode: 'append',
	//     width: '100%',
	//     height: '100%'
	//   }, handleError);
	// });
}

function publisher() {
  var session = OT.initSession(apiKey, sessionId);
	// Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

function subscriber() {
  var session = OT.initSession(apiKey, sessionId);
	// Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });

  session.on('streamCreated', function(event) {
	  session.subscribe(event.stream, 'subscriber', {
	    insertMode: 'append',
	    width: '100%',
	    height: '100%'
	  }, handleError);
	});
}

// (optional) add server code here
initializeSession();