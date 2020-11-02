// fonction de retour afin de supprimer l'effet de bord du useEffect.
// effet associé aux changement d'états 
// se connecter à une API  

function useIncrement (initial, step) {
	const [count, setCount] = React.useState(initial)

	const increment = () => {
		setCount(c => c + step)
	}

	return [count, increment]
}


const Compteur = () => {
	const [count, increment] = useIncrement(1, 3)

	// hook UNIQUEMENT pour la gestion/création du timer
	React.useEffect( () => {
		const timer = window.setInterval(() => {
			increment()
		}, 1000)
	
		// nous nettoyons l'effet de bord à chaque fois qu'il est demonté
		return function () {
			clearInterval(timer)
		}
	}, [])
	
	// hook pour le changement de titre
	React.useEffect(()=> {
		document.title = "React " + count
		
	}, [count])

	return (
		<div>
			<button className="btn btn-success"	onClick={increment}>Increment {count}</button>
		</div>
	)
}

//ReactDOM.render(<div className="container mt-5 col-4"><Compteur/></div>, document.querySelector("#app"))