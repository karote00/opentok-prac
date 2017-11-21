// replace these values with those generated in your TokBox Account
var apiKey = '46004832';
var sessionId = '1_MX40NjAwNDgzMn5-MTUxMTI0NzY1ODU3Nn41S20wdUNyeW52Q3lQZ3ZCblkrbUt1ZEN-UH4';
var token = 'T1==cGFydG5lcl9pZD00NjAwNDgzMiZzaWc9NTZhMzY2ZjU1ZGM1NzJmNmYyMDg4NjNjZmYzODZkYzU5NTNjNjI0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQXdORGd6TW41LU1UVXhNVEkwTnpZMU9EVTNObjQxUzIwd2RVTnllVzUyUTNsUVozWkNibGtyYlV0MVpFTi1VSDQmY3JlYXRlX3RpbWU9MTUxMTI0NzY2OSZub25jZT0wLjAyNTExMjE0NDIwNjc2ODk5NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTExMzM0MDY2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

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