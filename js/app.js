// replace these values with those generated in your TokBox Account
var apiKey = '46004832';
var sessionId = '1_MX40NjAwNDgzMn5-MTUxMTIzODIzODIwN343YVVmRjFSUDFzeW15RUcxekdUcHpCTWJ-UH4';
var token = 'T1==cGFydG5lcl9pZD00NjAwNDgzMiZzaWc9YTI0OTNhYmEzZDNjMGUyOWRkZjk4MDYwYjQ5MzYzYmQ5MTQzM2E2MTpzZXNzaW9uX2lkPTFfTVg0ME5qQXdORGd6TW41LU1UVXhNVEl6T0RJek9ESXdOMzQzWVZWbVJqRlNVREZ6ZVcxNVJVY3hla2RVY0hwQ1RXSi1VSDQmY3JlYXRlX3RpbWU9MTUxMTIzODI1OSZub25jZT0wLjMzNzc4Mzk2NDU5NzUyNDkmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxMTI0MTg1NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

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