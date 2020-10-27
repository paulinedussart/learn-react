// ref permet de récupérer un element dans le DOM qui ne sera pas traqué par React. 
// same as Ref

function App() {
	// initial value set to null
	const input = React.useRef(null)
	const compteur = React.useRef({count: 0})

	function handleClick() {
		console.log(input.current.value);
		console.log(compteur.current.count++)
	} 
	return (
		<div className="container mt-4 col-4">
			<input type="text" className="form-control" ref={input}/>
			<button onClick={handleClick} className="btn btn-primary mt-2">Valider</button>
		</div>
	)
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
)
// GOAL : 
// Stocker une valeur et pouvoir faire référence à un obj dans le DOM
// Sauvegarder une valeur arbitraire qui n'est pas lié à l'état