# Design

Pour la réalisation de ce projet on utilise AngularJs 1, dans ce document se décrit le choix de design faites.

On a utilisé les suivantes directives dans ce projet:

## Factory 
  Il y'a trois factories que permettent de faire appel aux services web de la deuxième version de l'api pokeapi.co
- getPokemon: Fait l'appel pour obtenir un pokemon avec son id.
- getPokemonList: Obtient les pokemons pour les mettre dans la liste de sélection.
- getDesc: Obtient à travers l'id la description du pokemon

## Controllers
 - pokemonSearch: Fait l'appel à la factory getPokemonList et ajoute le résultat au scope pour montrer les valeurs dans la liste déroulante dans la page web.
- pokemonSearchAPI: Fait l'appel aux deux factories restantes pour avoir le nom, image, description et aptitudes du pokemon sélectionné.
 
## Watch
-PokeJoin: ce Watch permet d'actualiser les données quand l'utilisateur change de pokemon sélectionné.
## Directive 

Cette directive permet d'ajouter le code HTML du fichier pokepedia dans le fichier index.




