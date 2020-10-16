// Hook d'incrementation
const useIncrement = (initialValue = 0, step = 1) => {
	const [count, setCount] = React.useState(initialValue)

	const increment = () => {
		setCount(count => ( count + step ))
	}

	return [count, increment]
}

// Composant Compteur
const Compteur = () => {
	const [count, setCount ] = useIncrement()
	React.useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

	return (
		<button className="btn btn-primary" onClick={setCount}>Incrementer {count}</button>
	)
}

// Hook de Toggle
const useToogle = (initial) => {
	const [check, setCheck] = React.useState(initial)
	
	const handleChange = () => {
		setCheck(check => ( check = !check ))
	}
	return [check, handleChange]
}


function App () {
	const [compteurVisible, handleClick] = useToogle(true)
	
	console.log(compteurVisible);

	return (
		<div>
				<div>
					Afficher le compteur : 
					<input type="checkbox" className="ml-1" onChange={handleClick} checked={compteurVisible}/>
				</div>
				{compteurVisible && <Compteur/>}
				
		</div>
	)
}

ReactDOM.render(
	<div className="container mt-5 col-3">
		<App/>
	</div>, 
	document.getElementById("app")
)