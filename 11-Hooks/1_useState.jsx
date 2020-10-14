// un Hook est une fonction précédée de use
// elle permet de gérer des etats dans des composants functionnel

function Compteur () {
	// setCount est un callBack à appeler à chaque fois que l'on veut modifier l'état que qui redéclanchera un rendu
	const [count, setCount] = React.useState(0)
	console.log("counter");
	
	const handleClick = (e) => {
		e.preventDefault()
		// contrairement au setState, il n'y a pas de fusion d'object
		// setCount(count + 1)
		// comme nous mofifions l'état à partir d'un état précédent, aut mieux ici utiliser un callback
		setCount(count => count + 1)
	}

	return <div>
		<span className="text-primary font-weight-bold">{count}</span>
		<button onClick={handleClick} className="btn btn-primary ml-3">Add + 1</button>
	</div>;
}

ReactDOM.render(
	<div className="container mt-4 col-4">
		<Compteur/>

	</div>,
	document.querySelector("#app")
)