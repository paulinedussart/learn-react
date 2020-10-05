let counter = 0;

function render() {
	const title = React.createElement("h1", {}, "Hello World !!! :) ", 
		React.createElement("span", {}, counter)
	)
	console.log(title)
	// on va maintenant branch notre element h1 à notre DOM
	ReactDOM.render(title, document.querySelector("#app"))
	// 1st parameter : element to integrate
	// 2nd parameter : where to insert it 
}

render()

// window.setInterval(() => {
// 	counter ++
//  	render()
// }, 1500)

// A chaque render(), React va aller regarder l'element qui a l'id app (ligne 9) (2nd parameter)
// sur lequel a été branché l'objet title. 
// React va être capable de détécter à chaque render() la différence entre les deux versions
// ici c'est la valeur du counter
// React va donc effectuer une seul modification à savoir le contenu du span pour coller auw changements de l'utilisateur.