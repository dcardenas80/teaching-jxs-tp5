var pokeApp = angular.module('pokedex', ['ngResource']);
pokeApp.controller('pokemonSearch', ['$scope', '$log', pokemonSearch]);
pokeApp.controller('pokemonSearchAPI', ['$scope','Pokemon', pokemonSearchAPI]);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
pokeApp.factory('Pokemon', function($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:id/", {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"} });
         // Note the full endpoint address
});
  
function pokemonSearchAPI($scope,Pokemon){
    
    $scope.poke = Pokemon.get({ id: 24});
    $scope.poke.$promise.then(function (result) {
        $scope.idPokedex = result.id;
        $scope.name = result.name;
        $scope.abilities = result.abilities;
    });

   
    $scope.getPokemon = function() {
        $scope.idPokedex = poke.id;
        $scope.name = poke.name;
        $scope.abilities = poke.abilities;
    };
}
 
function pokemonSearch($scope,$log) {
   
    $scope.pokemons = [
      {id:'1', name:'Pikachu'},
      {id:'2', name:'Charmander'},
      {id:'3', name:'Squirtle'},
      {id:'4', name:'Bulbasaur'},
      {id:'5', name:'jigglypuff'}
    ];
    $scope.$log = $log;
  
    $scope.searchByFilter = function(idPokemon) {
        var index = $scope.pokemons.indexOf(idPokemon);
        alert("Search Result:"+ $scope.pokemons );
      };
}  

pokeApp.factory('pokeJoin', function() {
    var savedPoke = {
        idNumber : null,
        pokeName : ""

    };
     function addPokemon(id, name){
        savedPoke.idNumber = id;
        savedPoke.pokeName = name;
     }
     function getPokemon(){
        return savedPoke;
     }
    // factory function body that constructs shinyNewServiceInstance
    return  {
        addPokemon: addPokemon,
        getPokemon: getPokemon
      };
  }); 