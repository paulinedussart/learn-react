// ASYNC CODE
function main() {
  console.log('A');
  setTimeout (
    function display() {console.log('B');}
  , 0);
	console.log("C");
}

// main() ;
// Console
// A
// C
// B

// quasi sans temps de latence

// 1. On pousse main() dans la pile d'appels
			// (celle ci y restera tant que l'ensemble des instructions n'auront pas étaient traitées)
// 2. On pousse la ligne 2 qui est executé et affiche A en console
			// l'instruction disparait de la pile d'appel
// 3. On execute la ligne 3, la fonction setTimeout est poussée dans la pile d'appels
			// comme elle utilise une API de navigateur pour retarder l'appel de function fournie 
// 4. On enlève la fonction de la pile d'attente en la plaçant dans la pile "Browser API" 
			// (une fois le transfert au navigateur terminée.)
// 5. console.log("C") est envoyé en file d'attente, et affiche C en console
      // l'instruction disparait de la stack
// 6.  On ajoute le callback display()  à la file d'attente des messages 
			// Une fois que le navigateur a reçu display()
// 7. On remove main() de la pile d'appels car toutes les instructions ont étaient exécutées.
			// Pour que le navigateur puisse envoyer un message depuis la liste d'attente à la pile d'appel,
			// il est neccessaire que cette dernière soit vide
// 		9. console.log('B') est envoyé à la liste d'appel	et affiche A en console
			// l'instruction disparait de la pile d'appel

// ASYNCHRONE
function main() {
	console.log('A');
	setTimeout (
		function display() {
			console.log('B');
		},0
	);
	runWhileLoopForNSeconds(3);
	console.log("C"); 
}
main ();

function runWhileLoopForNSeconds(sec) {
	let start = Date.now(), now = start;
	while (now - start < (sec * 1000)) {
		now = Date.now();
	}
}

// A
// 3s
// C
// B

// 1. A s'affiche en console
// 2. ici runWhileLoopForNSeconds vérifie si le temps écoulé est égal au nombre donné en paramètre
			// tant qu'il n'est pas égal, il n'executera pas la suite
// 3. runWhileLoopForNSeconds ne dépend pas d'API
			// n'est donc pas mise dans la file d'attente "Browser API"
			// elle est bloquante car executée sur la pile d'attente
// 4. Il sera necessaire d'attendre un delai de 3s (fin de l'éxécution) pour passer à la suite 	
// 5. étape 3 à 6 first versions		

			
// ** CODE SYNCHRONE EN JAVASCRIPT ** 
			// code qui s'execute ligne par en ligne 
			// en attendant la fin de l'execution de la ligne precedente pour passer à la suivante
// ** CODE ASYNCHRONE EN JAVASCRIPT **
			// code qui s'ecrit ligne par ligne 
			// il n'attendra pas que la ligne précédente (asynchrone) ai fini de s'executer 

// ** CALLBACK **
			// Les callbacks sont une fonction que l'on passe à une fonction asynchrone 
			// une fois que la fonction asynchorne aura terminé sa tâche 
			// elle va appeler le callback en lui passant le résultat
			// de cette manière, le code executé de manière asynchrone 

			element.addEventListener('click',   {
				// Do something here ... 
			});

			// le 2nd argt est un callback
			// il ne bloque pas l'execution du code (il est donc asynchrone) 

