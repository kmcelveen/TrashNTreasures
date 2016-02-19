'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state){

  var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };

  $scope.takePhoto = function(){
    console.log('gotcha');
    //camera plugin

    options.sourceType = Camera.PictureSourceType.CAMERA

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," +photo;
      $state.go('tab.photo-detail');
    })
  }

  $scope.choosePhoto = function(){
    console.log('i have been chosen');

    options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," +photo;
      $state.go('tab.photo-detail');
    })
  }
  
})