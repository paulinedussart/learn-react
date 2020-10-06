// un composant est avant tout une foncion qui prendra des propriétés
// approche fonctionnelle

function Welcome () {
	return <h1>Welcome todos</h1>
}

function Welcome1 (props) {
return <h1>Welcome {props.name}</h1>
}

// je prends un object qui recevra name puor ensuite l'utiliser
// cela s'appelle la destructuration
function Welcome2 ({name}) {
	return <h1>Welcome {name}</h1>
}

ReactDOM.render(<Welcome2 name="Pauline"/>, document.querySelector("#app"))

// children contient ici tous les enfants
function Welcome3 ({name, children}) {
	return 
		<div>
		  <h1>Welcome {name}</h1>
			<p>{children}</p>
	 </div>
}

ReactDOM.render(<Welcome3 name="Pauline">Aujourd'hui nous apprenons l'utilisation des composants</Welcome3>, document.querySelector("#app"))
