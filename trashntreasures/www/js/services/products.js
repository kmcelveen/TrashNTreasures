'use strict';

app.factory('Products', function(FirebaseURL, $firebaseArray, Auth) {
  var ref = new Firebase(FirebaseURL);
  var products = $firebaseArray(ref.child('products'));
  var Products = {
    getAllProducts: function(){
      return products;
    },
    
    saveProducts: function(product, image){
      var newProduct = {
        seller_image: Auth.user.profile.gravatar,
        seller_name: Auth.user.profile.name,
        name: product.name,
        tagline: product.tagline,
        price: product.price,
        image: image
      };
      return products.$add(newProduct).then(function(){
        console.log('success');
      })
    }
    
  };
  return Products;
});