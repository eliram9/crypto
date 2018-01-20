// Google Login
function onLoadFunction() {
	gapi.client.setApiKey('AIzaSyDxCwk2q9ydUGqSDrpJp6KFZc7O_oRiX9g');
	gapi.client.load('plus', 'v1', function() {});
}