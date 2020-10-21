const Item = () => {
	const [candies, setCandies] = React.useState(ITEMS)
	let itemm = []
	function handleBuy (candy) {
		setCandies(candyStock => candyStock.filter(element => element !== candy ))
	}
	
	function handleCandy () {
		setCandies(ITEMS)
	} 
	
	return (
		<ul>
		<div></div>
			{candies.map((element, id) => 
			<li className="m-2" key={id}>
				<button onClick={() => handleBuy(element)} className="btn btn-info mr-2">Buy</button>
				{element}
			</li>)}
			<button onClick={handleCandy}className="btn btn-warning"><h5>Refill the Shop !</h5></button>
		</ul>
	)
}

const CandyShop = () => {
	return (
		<div>
			<h2>Candy Shop</h2>
			<h5>Candy Available</h5>
		</div>
	)
}

const App = () => {
	return (
		<div className="container mt-3 col-4">
			<CandyShop/>
			<Item/>
		</div>
	)
}

const ITEMS = ["Brownie", "Coca Cola", "Skittles", "Snickers", "Twix"];

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
)