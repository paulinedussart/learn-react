// // Faire descendre la référence au composant enfant

// // 1️⃣ COMPOSANT SOUS FORME DE CLASS 
// class ForwardField extends React.Component {
// 	render (){
// 		return (
// 			<div className="form-group">
// 				<label className="form-label" htmlFor="">{this.props.label}</label>
// 				<input type="text" className="form-control" ref={this.props.forwardRef} />
// 			</div>
// 		)
// 	}
// }

// const FieldWithRef = React.forwardRef((props, ref) => {
// 	// {...props} lors d'un appel/creéation de composant enfant
// 	// cela permet de récupérer toutes les propriétés d'un coups (this.props.label) 
// 	return <ForwardField forwardRef={ref} {...props}/>
// })

// // 2️⃣ COMPOSANT FUNCTIONNEL
// // Comme on ne peut pas faire passer de ref à des composants functionnels on utilise React.forwardRef()
// // cela permet de faire passer des paramètres tels que ref en plus de props
// // Utilisation d'une fonction d'ordre supérieur
// const Field = React.forwardRef(
// 	function Field (props, ref) {
// 		return (<input type="text" className="form-control" ref={ref} />)
// 	}
// )

// class App extends React.Component {
// 	constructor(props){
// 		super(props)
// 		// React.createRef() --> permet de créer un objet ayant une clé current: qui contiendra la référence que l'on souhaite utiliser
// 		this.input = React.createRef();
// 		console.log(React.createRef());
// 	}
// 	// l'arrow function permet de garder le contect du this
// 	handleClick = () => {
// 		console.log(this.input.current.value);
// 	}

// 	render () {
// 		console.log(this.input)
// 		return (
// 			<div className="container col-4 mt-4">
// 				{/* 1er ref = elemnt dans le DOM */}
// 				{/*  stocker la reference dans un element dans le DOM */}
// 				<Field ref={this.input} label="Your firstname ?"/>
// 				<button className="btn btn-danger" onClick={this.handleClick}>Valider</button>
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(<App/>, document.querySelector("#app"))

// // ⛔️ We get the error ⛔️
// // react-dom.development.js:82 Warning: Function components cannot be given refs. 
// // Attempts to access this ref will fail. Did you mean to use React.forwardRef()?




// const process = (firstname) => {
// 	alert("Bonjour " + firstname)
// }
// const tellName = (callback) => {
// 	const name = prompt("Enter your name");
// 	callback(name)
// }

const hello = (message) => {
	alert("Bonjour " + message)
}

const sayHello = hello

const callback = () => {
	sayHello("Paulin")
}
callback()
//Bonjour Paulin