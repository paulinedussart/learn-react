// les form maintiennent eux même leurs propres états
// Utiliser l’état local React comme « source unique de vérité ».
// Ainsi le composant React qui affiche le formulaire contrôle aussi son comportement par rapport aux saisies de l’utilisateur.
// Un champ de formulaire dont l’état est contrôlé de cette façon par React est appelé un « composant contrôlé ».

class Form extends React.Component {
	// targeter la saisie utilisateur
	 constructor(props) {
		 super(props)
		 this.state = {
			 nom: "test3",
		 }
	 }
	
	 handleChange = (event) => {
		 this.setState({nom: event.target.value})
		//  console.log(this.state.nom);
		 console.log(event.target.value);
		}
	
		render(){
			return <div>
				{this.state.nom}
				<label htmlFor="name">nom</label>
				{/* a l'invers du HTML on n'a pas d'attribut selected, c'est la value qui track l'element selectionné */}
				<select name="name" value={this.state.nom} onChange={this.handleChange} id="name">
					<option value="test1">Test 1</option>
					<option value="test2">Test 2</option>
					<option value="test3">Test 3</option>
					<option value="test4">Test 4</option>
				</select>
			</div>
		}
	}
	
	ReactDOM.render(<Form/>, document.querySelector("#app"));
	