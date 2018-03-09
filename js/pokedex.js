var pokeApp = angular.module('pokedex', ['ngResource']).service('pokeJoin',pokeJoin);
pokeApp.controller('pokemonSearch', ['$scope', '$log', '$http','getPokemonList','pokeJoin',pokemonSearch]);
pokeApp.controller('pokemonSearchAPI', ['$scope','getPokemon', 'pokeJoin' , pokemonSearchAPI]);


// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'https://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
pokeApp.factory('getPokemon', function($resource, POKEAPI) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:id/", {}, {
        get: { method: "GET"}});
     // Note the full endpoint address
});
pokeApp.factory('getPokemonList', ['$resource', 'POKEAPI', function($resource, POKEAPI) {
    return $resource(POKEAPI + "/api/v2/pokemon/?limit=802&offset=0",{},{
        get: {method: "GET"},
    });
}]);

/**
 * Controlleur charge de la recherche de pokemons
 * 
 * */  

 /**
 * Controlleur charge de la recherche de pokemons
 * 
 * */ 
function pokemonSearch($scope,$log, $http,getPokemonList,pokeJoin) {
   
    $scope.pokemons = [
      ];
    $scope.$log = $log;
    getPokemonList.get().$promise.then(function (result) {
        $scope.pokemons = result.results;
        $scope.pokemons.forEach(function(e){
            e.id = e.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
          });
    });
    console.log($scope.pokemons);

    $scope.searchPok=function(pokemon) {
     
            pokeJoin.addPokemon(pokemon.id);
        
    }

}  


  function pokeJoin(){
    this.addPokemon = function(id) {
        this.id = id;
    };
    this.getPokemon = function() {
        return this.id;
    };
};

function pokemonSearchAPI($scope,getPokemon,pokeJoin){
    $scope.service = pokeJoin;
  
    console.log(pokeJoin.getPokemon());
    $scope.getItem = function() {
        $scope.poke = getPokemon.get({id: pokeJoin.getPokemon()})
    
    };
    $scope.$watch('service.getPokemon()', $scope.getItem);

}
