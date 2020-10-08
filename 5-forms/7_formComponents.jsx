function Input ({name, value, onChange, label, placeholder}) {
	return <div className="form-group">
					<label htmlFor={name}>{label}</label>
					<input 
						type="text" 
						name={name} 
						className="form-control" 
						value={value} 
						placeholder={placeholder}
						onChange={onChange}/>
				 </div>
};

function Checkbox ({name, checked, onChange, children}) {
	return <div className="form-group form-check">
					 <input 
					 name={name} 
					 type="checkbox" 
					 className="form-check-input" 
					 checked={checked}
					 onChange={onChange}/>
					<label className="form-check-label" htmlFor={name}>{children}</label>
				 </div>
};

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: "",
		  last_name: "",
			email: "",
			newsletter: false,
		}
	}
	
	message = () => {
		return  "Check here indicate you have read and agree to the Services Agreement"
	}

	handleChange = (event) => {
		const type = event.target.type
    const value = type === "checkbox" ?  event.target.checked : event.target.value
		const name = event.target.name
		this.setState({[name]: value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		// const data = JSON.stringify(this.state);
		console.log(this.state)
	}

	render(){
		return <form className="container col-4 mt-4" onSubmit={this.handleSubmit}>
			<Input name="first_name" value={this.state.first_name} onChange={this.handleChange} label="First Name" placeholder="Paulin"/>
			<Input name="last_name" value={this.state.last_name} onChange={this.handleChange} label="Last Name" placeholder="Duss"/>
			<Input name="email" value={this.state.email} onChange={this.handleChange} label="Email Address" placeholder="paulin@duss.com"/>
			<Checkbox name="newsletter" checked={this.state.newsletter} onChange={this.handleChange}>Agree to terms and conditions</Checkbox>
			<p className="form-text text-muted mb-0 font-12 text-danger"><em>{this.state.newsletter === true ? this.message() : null} <br/></em></p>
			<div className="col text-center">
			<button type="submit" className="btn btn-primary center"  >Submit</button>
    </div>
			{/* {JSON.stringify(this.state)} */}
		</form>
	}
}
	
ReactDOM.render(<Form/>, document.querySelector("#app"));
	 

