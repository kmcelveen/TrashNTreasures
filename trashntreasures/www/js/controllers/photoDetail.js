'use strict';

app.controller('PhotoDetailCtrl',  function($scope, Products, $rootScope, $state){

  $scope.imgURI = $rootScope.imgURI;

  $scope.submitProduct = function(product){
    Products.saveProduct(product, $scope.imgURI).then(function(){
      $state.go('tab.dash');
    })
  }
  
})