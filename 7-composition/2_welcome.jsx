function Dialog (props) {
	return ( 
		<div>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
			{props.children}
		</div>
	)
}

function BoardingPass({name}) {
	return 	<h4><span className="badge badge-info">BOARDING PASS 🐙  {name} </span></h4>
}

class SignUpDialog extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			state: false,
			firstName: "",
		} 
	} 
	
	handleChange = (event) => {
		this.setState({firstName: event.target.value})
	};

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({state: true})
	};

	render () {
		return <div className="container mt-5">
			{console.log(this.state.firstName)}
			<Dialog
			title="Welcome to Jurassik Park 🦖🦕"
			text="First name on the boarding PASS ?">
				<form className="form-inline" onSubmit={this.handleSubmit}>
				<input type="text" name="first_name" id="first_name" className="form-control" value={this.state.firstName} onChange={this.handleChange}/>
				<button type="submit" className="btn btn-success m-2">Submit</button>
				</form>
				{this.state.state && <BoardingPass name={this.state.firstName}/>}
			</Dialog>
		</div>
	}
}

ReactDOM.render(<SignUpDialog/>, document.querySelector("#app"))