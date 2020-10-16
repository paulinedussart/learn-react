// comprendre les cycles de vie componentDidMount et componentWillUnmount avec useEffect

function useIncrement (initial, step) {
	const [count, setCount] = React.useState(initial)
	const increment = () => {
		setCount(count => count + step)
	}
	return [count, increment]
}

function Compteur (props) {
	const color = "btn ml-3 btn-" + props.color
	const textColor = "font-weight-bold text-" + props.color
	
	const [count, incrementer] = useIncrement(0, props.step)
	// ce code ne va être executé que si le compteur change 
	React.useEffect(() => {
		const sentence = document.getElementById("bonjour")
		 sentence.innerHTML = "Bonjour les amis " + count
		// tableau des valeurs à observer, des dépendances afin d'executer le code sous certaines conditions
		// si une des valeurs dans ce tableau change, le conde de useEffect va être réexecuter. 
		// un array vide équivaut à componentDidMount le code ne sera executer qu'une fois le component monté
		const timer = setInterval(() => {
			console.log("Helloooo")
			incrementer()
		}, 1000)
		return clearInterval(timer)
		// useState accepte une fonction de retour qui sert de nettoyage quand il n'y a pas de dépendance et que le component est démonté
		// [] equivalent du componentWillUnmount
	}, [])


	return (
		 <div>
			<span className={textColor}>{count}</span>
			<button onClick={incrementer} className={color} >{props.children}</button>
		</div>
	);
}

ReactDOM.render(
	<div className="container mt-4 col-4">
		<h1 id="bonjour">Hello</h1>
		<Compteur step={3} color={"danger"}>Add +3</Compteur>
	</div>,
	document.querySelector("#app")
)