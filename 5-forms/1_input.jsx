// les form maintiennent eux même leurs propres états
// Utiliser l’état local React comme « source unique de vérité ».
// Ainsi le composant React qui affiche le formulaire contrôle aussi son comportement par rapport aux saisies de l’utilisateur.
// Un champ de formulaire dont l’état est contrôlé de cette façon par React est appelé un « composant contrôlé ».

class Form extends React.Component {
// targeter la saisie utilisateur
 constructor(props) {
	 super(props)
	 this.state = {
		 nom: "",
		 description: "",
	 }
 }

 handleChange = (event) => {
	 this.setState({nom: event.target.value})
 }

	render(){
		return <div>
			<label htmlFor="name">Nom</label>
			{/* at every change, I will change the state whit handleChange ---> (it's called a controlled field) */}
			<input type="text" id="name"	name="name" value={this.state.nom} onChange={this.handleChange}/> <br/>
		</div>
	}
}

ReactDOM.render(<Form/>, document.querySelector("#app"));
