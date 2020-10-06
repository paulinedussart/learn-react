// Etat et cycle de vie 
class Clock extends React.Component {
	// Ajout d'un constructeur de classe qui initialise this.state:
	constructor(props){
		// Lorsqu'il est utilisé dans un constructeur, il doit apparaître avant le mot-clé this :
		// sinon cela entraînera une exception ReferenceError.
		// Ce mot-clé est utilisé afin d'appeler des fonctions sur un objet parent.
		// this --> Clock {props: undefined, context: undefined, refs: {…}, updater: {…}}
		super(props)
		// Clock {props: undefined, context: undefined, refs: {…}, updater: {…}}
		// l'état du composant = object qui rpz les données utiles au composant 
		this.state = {date: new Date()};
		// this.timer = null;
	}

	// executer du code quand le composant vient d'etre monté/injecté dans le DOM
	componentDidMount() {
		this.timer = window.setInterval(() => {
			this.tick()
		}, 1000)
	}
	
	// executer du code quand le composant vient d'etre démonté du DOM
  componentWillUnmount() {
		// Si le composant Clock finit par être retiré du DOM, 
		// React appellera la méthode de cycle de vie componentWillUnmount() 
		// pour que le minuteur soit arrêté.
		window.clearInterval(this.timer)
	}
	
	// un appel à une fonction qui va changer l'état sous forme d'object
	tick() {
		// Grâce à l’appel à setState(), React sait que l’état a changé, 
		// il invoque à nouveau la méthode render() pour savoir ce qui devrait être affiché à l’écran.
		this.setState({ date: new Date()});
	}

	render() {
		return <React.Fragment>
			<h3> We are the {this.state.date.toLocaleDateString()} and it's {this.state.date.toLocaleTimeString()}  </h3>
		</React.Fragment>
	}
}

ReactDOM.render(<Clock/>, document.querySelector("#app"))


// https://fr.reactjs.org/docs/state-and-lifecycle.html

// class Clock extends React.Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount() {
// 		this.timer = window.setInterval(() => {
// 			this.tick()
// 		}, 1000)
// 	}
	
//   componentWillUnmount() { window.clearInterval(this.timer)	}
	
// 	tick() { this.setState({ date: new Date()});}

// 	render() {
// 		return <React.Fragment>
// 			<h3> We are the {this.state.date.toLocaleDateString()} and it's {this.state.date.toLocaleTimeString()}  </h3>
// 		</React.Fragment>
// 	}
// }

// ReactDOM.render(<Clock/>, document.querySelector("#app"))
