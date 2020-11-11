// permet de gérer les etats avec des mutations complexes. 
function init(initialCount) {
	return {count: initialCount}
}

const reducer = (state, action ) => {
	// on va regarder quel type d'action nous avons
	switch(action.type) {
		case "increment":
			return {count: state.count + 1};
		case "decrement":
			if (state.count <= 0) {
				return state;
			} else {
				return {count: state.count - 1};
			}
		case "reset":
			return init(0);
		default:
			throw new Error("Sorry I don't know " + action.type + " action ")	
	}
}

const App = () => {
	console.log("App");
	// 1param = une fonction qui va recevoir une action et qui va en fonction de cette action changer l'état 
	// 2param = la valeur initial
	// 3param = une fonction d'initialisation de l'etat
	// count = l'etat
	// dispatch = fonction qui va recevoir une action
	const [counter, dispatch ] = React.useReducer(reducer, 0, init)

	return (
		<div className="container d-flex justify-content-center col-3 mt-3 form-inline border border-success rounded py-4">
		<h3>How old are you ? </h3>
			<button className="btn-calcul" onClick={() => dispatch({type: "decrement"})}><h4 className="m-0">-</h4></button>
			<div className="px-3 age">{JSON.stringify(counter.count) } years old</div>		
			<button className="btn-calcul" onClick={() => dispatch({type: "increment"})}><h4 className="m-0">+</h4></button>
			<button className="btn btn-success mt-4" onClick={() => dispatch({type: "reset"})}>Reset your age</button>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"))