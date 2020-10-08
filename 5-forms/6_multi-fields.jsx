// CONTREOLED FIELD 

class Form extends React.Component {
	// targeter la saisie utilisateur
	constructor(props) {
		super(props)
		this.state = {
			name: "",
		  prenom: "",
			guest: "",
			newsletter: false,
		}
	}
	
	handleChange = (event) => {
		// Quand vous souhaitez gérer plusieurs champs contrôlés, vous pouvez ajouter un attribut name à chaque champ 
		// et laisser la fonction gestionnaire choisir quoi faire en fonction de la valeur de event.target.name.
		//this.setState({nom: event.target.value})
		const type = event.target.type
    const value = type === "checkbox" ?  event.target.checked : event.target.value
		const name = event.target.name
		this.setState({[name]: value})
	}

	message = () => {
		return "Abbonement de 12 mois, 4 mois offert 45$HT"
	}
	
	render(){
		return <div>
			<label htmlFor="name">
				Nom : 
				{/* at every change, I will change the state whit handleChange ---> (it's called a controlled field) */}
				<input 
					type="text" 
					name="name" 
					placeholder="your name"
					value={this.state.nom} 
					onChange={this.handleChange}/> 
			</label><br/>
			<label>
        Prénom :
        <input
          type="text"
					name="prenom"
					placeholder="your first_name"
          value={this.state.prenom}
          onChange={this.handleChange} />
      </label><br/>
			<label>
        Guest :
        <input
          name="guest"
          type="number"
          value={this.state.guest}
          onChange={this.handleChange} />
      </label><br/>
			<label>
        Newsletter ? :
        <input
          name="newsletter"
          type="checkbox"
          checked={this.state.newsletter}
          onChange={this.handleChange} />
      </label>
			{this.state.newsletter === true ? this.message() : null} <br/>
			{JSON.stringify(this.state)}
		</div>
	}
}
	
	ReactDOM.render(<Form/>, document.querySelector("#app"));
 	