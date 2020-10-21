const Button = React.memo(function ({onClick}) {
	console.log('render BUTTON component');
	return <button className="btn btn-primary" onClick={onClick}>Mon button</button>
});

function App() {
	const [count, setCount] = React.useState(0);

// USECALLBACK (avoid to pass function of function)
// lorsque l'on fait remonter les infos aux parents lors des callBack
const memoizedValue = React.useCallback(
	function () {
		console.log('BUTTON');
		alert('bonjour');
	}, []
);

	// USEMEMO (se souvenir d'une valeur)
	// when we click on the increment button the Button Component will not be rendered
	// utilisation de fonction de fonction
	const memoizedValue = React.useMemo(
		function () {
			console.log('BUTTON');
			return function () {
				alert('bonjour');
			}
		}, []
	);

	// With this code, when we click on the increment button the Button Component will be rendered
	// const memoizedValue = () => {
	// 	alert("Bonjour Pauline")
	// }
		
	const handleClick = ()  => {
		setCount(number => number + 1)
	}

	return (
		<div className="container mt-5 col-4">
			<Button onClick={memoizedValue}/>
			<button className="btn btn-success ml-2" onClick={handleClick}>Incrementer {count}</button>
		</div>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)

// optimiser les performances de l'app
// en memorisant les valeurs de retour de certaines fonctions
// et eviter de faire un traitement systèmaique au niveau de chaque rendu
