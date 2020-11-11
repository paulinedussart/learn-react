const Santa = (props) => {
	return <h2><span className="badge badge-danger">Great, I will tell Santa you want {props.element} 🎄🎄 </span></h2>
}

const Input = () => {
	const input = React.useRef(null)
	const [appear, setAppear] = React.useState(false)
	const [ gift, setGift ] = React.useState("")
 	let result = null;

	function handleClick() {
		console.log("ref :",input.current.value);
		setGift(gift => gift = input.current.value);
		setAppear(appear => appear = true)
	}


	return (
		<div>
		{console.log(appear)}
			<div className="form-inline">
				<input ref={input} className="form-control" type="text"/>
				<button onClick={handleClick} className="btn btn-warning ml-2">GO</button> <br/>
			</div>
			{appear && <Santa element={gift}/>}
		</div>
	)
}

const App = () => {
	return (
		<div className="container col-4 mt-3">
			<h5>What do you want for Christmas :</h5>
			<Input/>
		</div>
	);
}

ReactDOM.render(<App/>, document.querySelector("#app"))
