// APPROCHE PAR CLASS
// Pour indiquer à Welcome qu'elle doit se comporter comme un composant React, il faut ajouter extends React.Component
class	Welcome extends React.Component {
	// Lorsqu'on a besoin des props, elles sont passées au niveau du constructeur
	// puis sont récupérable en faisant un this.props dans la function render()
	
	constructor(props) {
		super()
		// refer Welcome {props: {…}, context: undefined, refs: {…}, updater: {…}}
		// super(props) : By using this, we can access and use this.props object in the constructor.
		// If you are not using this.props in the constructor there is no need to pass props to the super().
		
		console.log(props);
		// refer {name: "Pauline", children: "today is raining"}
		// super() : Instead of this.props, you can always use props.
	}
	
	// il faut nécessairement une fonction render 
	// qui s'occupera du rendu et renverra un element 
	render() {
		console.log(this);
		// refer Welcome {props: {…}, context: undefined, refs: {…}, updater: {…}}
		console.log(this.props);
		// refer {name: "Pauline", children: "today is raining"}
		return <div>
						<h1>Welcome {this.props.name}</h1>
						<p>{this.props.children}</p>
					 </div>
	}
}

ReactDOM.render(<Welcome name="Pauline">today is raining</Welcome>, document.querySelector("#app"))

// composants Welcome dans le composant fonctionnel List
function List() {
	return 
		<div>
			<Welcome name="Pau"/>
			<Welcome name="James"/>
			<Welcome name="Pauline">try stuff</Welcome>
		</div>
}

//ReactDOM.render(<List/>, document.querySelector("#app"))