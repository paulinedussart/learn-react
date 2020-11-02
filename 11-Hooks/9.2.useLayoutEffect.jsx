//useEffect
// fonctionne un peu comme useEffect (async)
// Le code present dans useEffect ne sera pas executé tant que nos changements soient faits
// React va changer l'interface avant d'executer le code de useEffect
// le temps de rendu ne sera pas affecté sur le traitemetn dans useEffect est lourd

// useLayoutEffect (synch)
// le but c'est de ne pas attendre le rendu React pour effectuer nos changement 
// l'objectif ici est d'executer le code avant le rendu de la page
// ce qui est utile si on veut modifier des elements au niveau du DOM 

const App = () => {
	const [count, setCount] = React.useState(0)
	const button = React.useRef(null)

	const handleClick = React.useCallback(
		() => {
			setCount(c => c + 1)
		}, []
	)

	{console.log(button);}

	// we need to pass a callback to the Hook
	React.useLayoutEffect(() => {
		setInterval(console.log("hello"), 1000)
		if (count % 2 === 0) {
			button.current.style.color = "black"
		} else {
			button.current.style.color = "white"
		}
		console.log(count);
		}
	)

	return (
		<div className="container mt-4 col-4">
			<button onClick={handleClick} ref={button} className=" btn btn-primary">{count} times</button>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"))			