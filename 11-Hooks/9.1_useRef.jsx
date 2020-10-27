// ref permet de récupérer un element dans le DOM qui ne sera pas traqué par React. 
// same as Ref

function App() {
	const [count, setCount] = React.useState(0)
	// utiliser les Ref dans un composant fonctionnel
	// initial value set to null because we don't know the value
	const input = React.useRef(null)
	const compteur = React.useRef({count: 1 })

	function handleClick() {
		console.log(input.current.value);
		console.log(compteur.current.count++)
		setCount(count => count + 1)
	} 
	return (
		<div className="container mt-4 col-4">
			{/* nous créons une référence pour récupérer cet element  */}
			<input type="text" className="form-control" ref={input}/>
			<button onClick={handleClick} className="btn btn-primary mt-2">Valider</button>
			<button className="btn btn-warning  mt-2 ml-2">
				clicked {count} times !
			</button>
		</div>
	)
}
// useMemo permet de memoriser une valeur 
// mais ne garantie pas le fait de conserver systèmatiquement la même valeur, 
// sous certaine conditions React peut décider de supprimer la valeur gardée en mémoire
// on utilisera donc le callback donnée à useMemo pour générer une nouvelle valeur


// useRef
// permet de conserver une valeur tout au long du cycle de vie du composant
// communiquer avec des element dans le DOM et l'aspect la plus utilisé de ce HOOK
ReactDOM.render(
	<App/>,
	document.querySelector("#app")
)
// GOAL : 
// Stocker une valeur et pouvoir faire référence à un obj dans le DOM
// Sauvegarder une valeur arbitraire qui n'est pas lié à l'état