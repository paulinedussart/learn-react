class Form extends React.Component {
	// targeter la saisie utilisateur
	 constructor(props) {
		 super(props)
		 this.state = {
			 checked: true,
		 }
	 }
	
	 	handleChange = (event) => {
		 this.setState({checked: event.target.checked})
		 console.log(event.target.checked);
		}

		message = () => {
			return "Abbonement de 12 mois, 4 mois offert 45$HT"
		}
		
		render(){
			return <div>
				<label htmlFor="check">Newsletter ?</label>
				{/* at every change, I will change the state whit handleChange ---> (it's called a controlled field) */}
				<input type="checkbox" name="check" checked={this.state.checked} onChange={this.handleChange}/> <br/>
				<p>{ this.state.checked=== true && this.message()}</p>
				{this.state.checked ? this.message() : null}
			</div>
		}
	}
	
	ReactDOM.render(<Form/>, document.querySelector("#app"));
	