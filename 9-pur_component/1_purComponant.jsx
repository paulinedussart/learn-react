// Un composant pur c'est un composant qui ne sera rendu que si son état ou ses props changent. 
// si un des deux ou les deux changent, il appelle : 
// la function render() si c'est un class Component
// la function si c'est un composant Fonctionnel

const { PureComponent } = require("react");

 
// CLASS
class Component extends React.PureComponent {}

//FUNCTIONNEL 
function Component () {}
const myComponent = React.memo(Component);

// cela permet d'optimiser les performances de l'app et de ne pas 
// Car si l'element existe mais n'a pas été modifié, il n'appelera pas le render

// Il va faire une comparaison de surface avant de faire un render (parfois ce n'est donc pas utiles)

// ON DEMANDE A REACT SOUS CERTAINES CONDITIONS DE NE PAS RENDRE LES ELEMENTS
// CONDITIONS D'UTILISATION 
// - Element qui sont importants
// - Avec une logique complexe
// - On connait les conditions de rendu 