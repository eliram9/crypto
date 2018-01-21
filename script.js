var myApp = angular.module("myApp", []);

myApp.controller('myController', ['$scope', function($scope) {
	$scope.gmail = {
		username = "",
		email = ""
	};

	$scope.onGoogleLogin = function() {
		var params = {
			'clientid': '546866803079-s7k1g9dau57f73t1md3g6n6qtol8vj3k.apps.googleusercontent.com',
			'coockepolicy': 'single_host_origin',
			'callback': function(result) {
				if(result['status']['sign_in']) {
					var = request.gapi.client.plus.people.get(
						{
							'userId': 'me'

						}

					);
					request.execute(function(resp) {
						$scope.$apply(function() {
							$scope.gmail.username = resp.dispalyName;
							$scope.gmail.email = resp.emails[0].value;
						});

					});
				}
			},
			'approvalprompt': 'force',
			'scope': 'https:://www.googleapis.com/auth/plus.login https:://www.googleapis.com/auth/plus.profile.emails.read'

		};
		gapi.auth.signIn(params);
	}
}]);