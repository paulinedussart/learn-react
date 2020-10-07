// create a pause button to stop the auto incrementation
class ManualIncrementer extends React.Component {
	constructor(props) {
		super(props)
		// on a placé le timer dans le state car il va être traqué par React et sera rendu à la vue
		this.state = {counter: 0, timer: null};
		this.action = this.action.bind(this)
		this.restart = this.restart.bind(this)

	}
	
	increment(){
		this.setState((state, props) => ({counter: state.counter + 1 }))
	}

	componentDidMount(){
		//this.state.timer = setInterval(()=> { this.increment() }, 1000)
		this.play()
	}

	componentWillUnmount(){
		// pas besoin d'appeller la methode this.pause() 
		// on ne fait pas d'appel au setState() vu que l'element n'existe plus
		clearInterval(this.state.timer)
	}

	pause() {
		// on stop le timer afin d'eviter un traitement chaque seconde
		clearInterval(this.state.timer)
		this.setState({timer: null})
	}

	play () {
		// on clean le timer en cours pour supprimer l'ancien
		// on evite le fait de lancer plusieurs fois le timer
		clearInterval(this.state.timer)
		// on relance le timer 
		// pas besoin de lui preciser la valeur du counter la methode .setState() va fusionner le nouvel état et l'ancien 
		this.setState({
			timer: setInterval(()=> { this.increment() }, 1000) 
		})
	}

	action() {

		return this.state.timer ? this.pause() : this.play()
	}

	label() {
		return this.state.timer ? "Pause" : "Play" 
	}

	restart(){
		this.setState((state, props) => ({counter: 0 }))
		// permet de recommancer le timer meme si on est arreter de l'autre côté
		this.play()
	}

	
	render(){
		// nous avons ici besoin de faire un .bind(this) sur increment pour passer la valeur the this à la function 
		// car sinon le this à la ligne 10 sera undefined

		// NORMALE
		// return <h5> Valeur : {this.state.counter} <br/>
		// 			  <button onClick={this.pause.bind(this)}>Pause</button>
		// 		  	<button onClick={this.play.bind(this)}>Play</button>
		// 		   </h5>
		
		// LOGIQUE CONDITION TERNAIRE
		// return <div> 
		// 				Valeur : {this.state.counter} <br/>
		// 				{ this.state.timer ? 
		// 						<button onClick={this.pause.bind(this)}>Pause</button> : 
		// 						<button onClick={this.play.bind(this)}>Play</button>
		// 				}	
		// 			</div>
		
		// lLOGIQUE CONSTANTE
		// const label = this.state.timer ? "Pause" : "Play" 
	
		// const action = this.state.timer ? this.pause.bind(this) : this.play.bind(this)

		// return <div> 
		// 				Valeur : {this.state.counter} <br/>
		// 				<button onClick={action}>{label}</button>
		// 			</div>


		// LOGIQUE FONCTION 

		return <div> 
						Valeur : {this.state.counter} <br/>
						<button onClick={this.action}>{this.label()}</button>
						<button onClick={this.restart}>Recommancer</button>
					</div>

	}
}

// ReactDOM.render(<ManualIncrementer/>, document.querySelector("#app"));

// Le render va être fait à chaque changement d'état
// dans ce cas présent, this.action.bind(this) va créer une nouvelle fonction toutes les secondes
// afin d'éviter cela on va aller stocker notre fonction dans le constructeur
// this.action = this.action.bind(this)
// this.restart = this.restart.bind(this)


