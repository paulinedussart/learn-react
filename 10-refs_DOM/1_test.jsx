// REFERENCES
// Quand on veut intéragir avec le DOM cas d'usage: 
// utiliser des librairies JS spécifiques 
// utiliser des champs non controlés avec React

class App extends React.Component {
	constructor(props){
		super(props)
		this.input = null 
	}
	// l'arrow function permet de garder le contect du this
	handleClick = (event) => {
		console.log(this.input.value);
	}

	render () {
		return (
			<div className="container form-inline col-4 mt-4">
				{/* 1er ref = elemnt dans le DOM */}
				<input type="text" className="form-control"  ref={(ref) => this.input = ref}/>
				<button className="btn btn-primary m-3" onClick={this.handleClick}>Valider</button>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"))
