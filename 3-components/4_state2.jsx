class Incrementer extends React.Component {
	constructor(props) {
		super(props)
		// on a besoin d'un etat pour conserver la valeur que l'on va incrementer
		this.state = {
			number: props.start, 
			//step: props.step
		};
	
		console.log(props)
		this.timer = null;
	}

	componentDidMount(){
		this.timer = setInterval(()=> { this.increase() }, 1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	increase(){
		// this = Incrementer {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
		
		// la valeur précédemment stockée
		//console.log(this.state.number);
		// 10 
		//console.log(this.state.step);

		// nous incrementons la valeur de number de 1
		// this.setState({number: this.state.number + 1 })
		// Attention car quand React lance bcp d'opperation en m tps, il groupe les setState en les appelant de manière consecutive
		// Comme ici nous utilisons le state pour construire le nouveau state (notre chgt d'état depent d'un état et/ou propriété)
		// cela peut provoquer des problèmes : NOUS ALLONS DONC RETURN  LE STATE SOUS FORME DE FUNCTION  
		this.setState((state, props) => ({number: state.number + props.step }))
	}

	render(){
	 return <h1>Valeur : {this.state.number}</h1>
	}
}

Incrementer.defaultProps  = {
	start: 1,
	step: 3,
}


function Things() {
	return 
		<div>
		  <Incrementer start={0} step={10}/>
		  <Incrementer start={100} step={1}/>
		  <Incrementer/>
	  </div>
}

ReactDOM.render(<Things/>, document.querySelector("#app"))