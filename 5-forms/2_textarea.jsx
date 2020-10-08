// les form maintiennent eux même leurs propres états
// Utiliser l’état local React comme « source unique de vérité ».
// Ainsi le composant React qui affiche le formulaire contrôle aussi son comportement par rapport aux saisies de l’utilisateur.
// Un champ de formulaire dont l’état est contrôlé de cette façon par React est appelé un « composant contrôlé ».

class Form extends React.Component {
	// targeter la saisie utilisateur
	 constructor(props) {
		 super(props)
		 this.state = {
			 description: "",
		 }
	 }
	
	 handleChange = (event) => {
		 this.setState({description: event.target.value})
		//  console.log(this.state.description);
		//  console.log(event.target.value);
		}
	
		render(){
			return <div>
				<label htmlFor="name">Description</label>
				{/* textarea don't take children as HTML but a value */}
				<textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}></textarea>
	
			</div>
		}
	}
	
	ReactDOM.render(<Form/>, document.querySelector("#app"));
	