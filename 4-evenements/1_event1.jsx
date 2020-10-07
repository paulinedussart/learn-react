// create a button to incement the counter

class ManualIncrementer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {counter: 0};
	}
	
	increment(){
		this.setState((state, props) => ({counter: state.counter + 1 }))
	}

	render(){
		// nous avons ici besoin de faire un .bind(this) sur increment pour passer la valeur the this à la function 
		// car sinon le this à la ligne 10 sera undefined
	return <h5> Valeur : {this.state.counter} <br/>
					<button onClick={this.increment.bind(this)}>Incrementer</button> <br/>
					<button>Pause</button>
				 </h5>
	}

}

// ReactDOM.render(<ManualIncrementer/>, document.querySelector("#app"));