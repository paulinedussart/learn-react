function Double ({number, children}) {
	return (
		<span>
			{`Le double de ${number} est ${number + number}`}
			{children}
		</span>
	)
}

Double.propTypes = {
	number: window.PropTypes.number.isRequired,
	children: window.PropTypes.element.isRequired
}

// element = Element React
// node = Tout ce que peux acceptre en enfant un Element React

function App() {
	return (
		<div className="container mt-5 col-6">
			<div className="card" style={{width: "18rem"}}>
				<h2>Handling PropTypes</h2>
			  <div className="card-body">
			    <p className="card-text">
						<Double number={2}>
							<em><br/><b>https://www.npmjs.com/package/prop-types</b></em>
						</Double>
					</p>
			  </div>
			</div>
		</div>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)