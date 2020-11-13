// 2 TYPES D'ERRORS
// 1.Traitement d'un callback evenement
		// crash pas toute l'app, juste le code de l'event

// 2.Render un component
		// 1. l'error remonte au composant parent 
		// 2. lorsque qu'une erreur n'est pas capturé par le component,
		// 3. elle continue de remonter jusqu'à la racine,
		// 4. React démonte donc le composant parent

//		Capturer l'evenement (seulement pour les composants Class)


// Component qui capture l'erreur et empeche l'erreur de remonter
class ErrorBoundary extends React.Component {
	constructor (props) {
		super(props)
		this.state = {error: false}
	}

	static getDerivedStateFromError(error) {
		console.log("getDerived");
    return {error: true, error}
	}

	componentDidCatch (error, errorInfo) {
		console.log(error, errorInfo);
	}

	render () {
		if (this.state.error) {
			return <div className="alert alert-danger">{this.props.fallback}</div>		
		}
		return this.props.children
	}
}

function log () {
	console.log("clicked");
}

function Card () {
	throw new Error()
	return (
		<div className="card" style={{width: "18rem"}}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" className="btn btn-warning" >Go somewhere</a>
			  </div>
			</div>
	)
}

function App() {
	return (
		<div className="container mt-5 col-5" onClick={log}>
			<h3>The topic of today are Error Handling</h3>
			<p>This is a little text about tree climbing ... this is very goog</p>
			<ErrorBoundary fallback={<h2>L'action a échoué.</h2>}>
				<Card/>	
			</ErrorBoundary>	
		</div>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)