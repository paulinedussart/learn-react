// REFERENCES
// Quand on veut intéragir avec le DOM cas d'usage: 
// utiliser des librairies JS spécifiques 
// utiliser des champs non controlés avec React

class App extends React.Component {
	constructor(props){
		super(props)
		// ⚠️⚠️ Quand on souhaite récupérer un element dans le DOM
		// 1. On créé une référence
		this.input = React.createRef();
	}
	// l'arrow function permet de garder le contect du this
	handleClick = (event) => {
		// 3. On récupère le DOM
		// cela cré un object avec un seule propriété current qui contient la value de this.input
		console.log(this.input.current.value);
	}

	render () {
		return (
			<div className="container form-inline col-4 mt-4">
				{console.log(this.input)}
				{/* // 2. On passe cette référence à notre élément  */}
				<input type="text" className="form-control"  ref={this.input}/>
				<button className="btn btn-warning m-3" onClick={this.handleClick}>Valider</button>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"))

// ⛔️ We get the error ⛔️
// react-dom.development.js:82 Warning: Function components cannot be given refs. 
// Attempts to access this ref will fail. Did you mean to use React.forwardRef()?