function BoilingVerdict ({temperature}) {
	if (parseInt(temperature) >= 100) {
		return <div className="alert alert-danger" role="alert"> Attention, l'eau bout !!!</div>
	} else {
		return <div className="alert alert-success" role="alert">Pas de danger, l'eau ne bout pas !</div>
	}
}

function Input ({name, label, value, onChange}) {
	//const {name, label, value, onChange} = props
	return <div className="form-group">
		<label htmlFor={name}>
		{/* {props.label} */}
			{label}
			<input 
			className="form-control"
				type="text"
				name={name}
				value={value}
				onChange={onChange}/>
		</label>
	</div>
}

class Calculator extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			celsius: "",
			fahrenheit: "", 
		}
	}

	toFahrenheit = (event) => {
		//T(°F) = T(°C) × 9/5 + 32
		const value = event.target.value;
		const calcul = (value * 9/5) + 32;
		(value === "") ? this.setState({fahrenheit: ""}) : this.setState({fahrenheit: calcul})
		this.setState({celsius: value})
	}

	toCelsius = (event) => {
		// T(°C) = (T(°F) - 32) × 5/9
		const value = event.target.value;
		const calcul = (value - 32) * 5/9;
		(value === "") ? this.setState({celsius: ""}) : this.setState({celsius: Math.round(calcul * 100) / 100});
		this.setState({fahrenheit: value})
	}

	render(){
		console.log(this.state)
		return <div className="container mt-5 col-6">
			<Input name="celsius" value={this.state.celsius} label="T° en Celsius" onChange={this.toFahrenheit} autocomplete="off"/>
			<Input name="fahrenheit" value={this.state.fahrenheit} label="T° en Fahrenheit" onChange={this.toCelsius} autocomplete="off"/>
			<BoilingVerdict temperature={this.state.celsius}/>
		</div>
	}
}

ReactDOM.render(<Calculator/>, document.querySelector("#app"))