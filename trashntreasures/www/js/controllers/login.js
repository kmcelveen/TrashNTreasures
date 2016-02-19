'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function(){
    console.log('in');
  
  
    $scope.user = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/login.html',
      title: 'Signin',
      scope: $scope,
      buttons: [
        { text: '<b>Login</b>',
          type: 'button-energized',
          onTap: function(user) {
            user = $scope.user;
            console.log(user)
            Auth.login(user).then(function(){
              $state.go('tab.dash');
            }, function(err){
              console.log(err);
            })
          } 
        },
        {
          text: '<b>Register</b>',
          type: 'button-calm',
          onTap: function(user) {
            user = $scope.user;
            console.log(user)
            Auth.register(user).then(function(){
              console.log('success')
              $state.go('tab.dash');
            }, function(err){
              console.log(err);
            });
          }
        }
      ]
    });

    // myPopup.then(function(res) {
    //   console.log('Tapped!', res);
    // });

    // $timeout(function() {
    //    myPopup.close(); //close the popup after 3 seconds for some reason
    // }, 3000);
  };

})