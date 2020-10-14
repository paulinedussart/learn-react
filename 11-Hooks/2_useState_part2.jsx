// un Hook est une fonction précédée de use
// elle permet de gérer des etats dans des composants functionnel

// on separe la logique incrementation du composant compteur
function useIncrement (initial, step) {
	// creation du hook
	const [count, setCount] = React.useState(initial)

	// on crée la fonction qui va permettre de modifier l'état 
	const increment = () => {
		// utilisation d'un callBak car on utilise l'état précédent
		setCount(count => count + step)
	}
	
	// la fonction va retourner la valeur du compteur et la fonction qui permet l'incrementation
	// afin de l'utiliser dans le composant
	return [count, increment]
}

function Compteur (props) {
	// on utilise la destructuration pour récupérer les données de useIncrement()
	// la valeur de count et la fonction de modification du state
	const [count, incrementer] = useIncrement(0, props.step)
	const color = "btn ml-3 btn-" + props.color
	const textColor = "font-weight-bold text-" + props.color
	return (
		 <div>
			<span className={textColor}>{count}</span>
			{/* a chaque fois que l'on va cliquer sur le btn, il va utiliser un setter et on va appeler la ligne 10  */}
			{/* le hook permet de créer une variable qui va memoriser l'état du composant et sa valeur tout au long de sa vie */}
			{/* il utilisera l'état actuel du count pour ensuite lui ajouter +2 */}
			<button onClick={incrementer} className={color} >{props.children}</button>
		</div>
	);
}

ReactDOM.render(
	<div className="container mt-4 col-4">
		<Compteur step={1} color={"warning"}>Add +1</Compteur> <br/>
		<Compteur step={2} color={"success"}>Add +2</Compteur> <br/>
		<Compteur step={3} color={"danger"}>Add +3</Compteur>
	</div>,
	document.querySelector("#app")
)