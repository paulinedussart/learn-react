// Hook d'incrementation
const useIncrement = (initialValue = 0, step = 1) => {
	const [count, setCount] = React.useState(initialValue)

	const increment = () => {
		setCount(count => ( count + step ))
	}

	return [count, increment]
}
// Hook d'autoIncrementation
const useAutoIncrement = (initialValue = 0, step = 1) => {

	const [autoCount, setAutoCount] = React.useState(initialValue)

	React.useEffect(() => {

		const timer = setInterval( 
			function() {
				setAutoCount(autoCount => autoCount + 1)
			},
		  1000
		)

		return function () {
			clearInterval(timer)
		}

	}, [])

	return [autoCount]
}

// Composant Compteur
const Compteur = () => {
	const count = useAutoIncrement()
	
	React.useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

	return (
		<button className="btn btn-primary">Incrementer {count}</button>
	)
}

// Hook  Toggle
const useToogle = (initial) => {
	const [check, setCheck] = React.useState(initial)
	
	const handleChange = () => {
		setCheck(check => ( check = !check ))
	}
	return [check, handleChange]
}

// Notre composant App
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

// Le render DOM
ReactDOM.render(
	<div className="container mt-5 col-3">
		<App/>
	</div>, 
	document.getElementById("app")
)