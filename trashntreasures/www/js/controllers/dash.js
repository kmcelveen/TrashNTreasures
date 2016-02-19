'use strict';

app.controller('DashCtrl', function($scope, Products) {
  $scope.products = Products.getAllProducts();
  // console.log($scope.products);

})