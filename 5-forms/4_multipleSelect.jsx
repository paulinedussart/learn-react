class Form extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			test: ["test3", "test1"]
		}
	}

	handleChange = (event) => {
		// récuper la value saisie par l'utilisateur et changer l'état avec cette nouvelle valeur
		// la valeur user se situe dans event.target
		// il va donc f	aloir récupérer une selection multiple
		this.setState({test: Array.from(event.target.selectedOptions).map(option => option.value)})
	}

	render() {
		return <div>
			{JSON.stringify(this.state.test)} <br/>
			{typeof this.state.test} <br/>
			<label htmlFor="test">Test</label>
			{/* React, au lieu d’utiliser l’attribut selected, utilise un attribut value sur la balise racine select.  */}
			<select name="test" value={this.state.test} id="test" onChange={this.handleChange} multiple={true}>
				<option value="test1">Test1</option>
				<option value="test2">Test2</option>
				<option value="test3">Test3</option>
				<option value="test4">Test4</option>
			</select>
		</div>
	}
}

ReactDOM.render(<Form/>, document.querySelector("#app"))