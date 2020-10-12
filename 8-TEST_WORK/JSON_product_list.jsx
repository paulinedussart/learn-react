const JSON = [
  {category: "Sporting Goods", price: "$49.99", stocked: false, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: true, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$1099.99", stocked: false, name: "iPhone 11"},
	{category: "Electronics", price: "$2599.99", stocked: true, name: "MacBook Pro"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "AirPods"},
	{category: "Electronics", price: "$19.99", stocked: true, name: "Timer"},
];


function ProductRow({product}) {
const name = product.stocked === false ? <span className="text-danger"><b>🚨 {product.name}</b></span> : <span>{product.name}</span>;
return (
		<tr>
			<td>{name}</td>
			<td className="text-right">{product.price}</td>
		</tr>	
	)
}

function ProductCategoryRow({category}){
	return (
		<tr>
			<th colSpan="2"><h5>{category}</h5></th>
		</tr>
	);
}

function ProductTable({data, stockStatus, productName}) {
	const content = []
	let lastCategory = null;
	data.forEach(item => {
		if ((stockStatus && !item.stocked) || (item.name.toLowerCase().indexOf(productName.toLowerCase()) === -1)) {return;}
		if (item.category !== lastCategory) {
			lastCategory = item.category 
			{content.push(<ProductCategoryRow key={item.category + Date.now()} category={item.category}/>)}
		};
		content.push(<ProductRow key={item.name + Date.now()} product={item}/>);
	})

	return (
		<div>
			<table className="table table-sm">
			  <thead>
			    <tr>
			      <th><h3>Products</h3></th>
			      <th className="text-right"><h3>Prices</h3></th>
			    </tr>
			  </thead>
			  <tbody>
					{content}
			  </tbody>
			</table>
		</div>
	)
}

class SearchBar extends React.Component {
	handleProductChange = (event) => {
		this.props.onProductNameChange(event.target.value)
	}

	handleCheckChange = (event) => {
		this.props.onStockChange(event.target.checked)
	}

	render () {
		return (
			<div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="search ..." value={this.props.productName} onChange={this.handleProductChange}/>
				</div>
				<div className="form-group form-check">
						 <input 
						 name="inStock"
						 checked={this.props.stockStatus}
						 type="checkbox" 
						 id="inStock"
						 onChange={this.handleCheckChange}
						 className="form-check-input"/>
						<label className="form-check-label" htmlFor="xinStock">Only show products in stock</label>
					 </div>
			</div>
		)
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stock: false,
			productName: "",
		}
	}

	handleStockChange = (stock) => {
		this.setState({stock})
	}

	handleProductNameChange = (productName) => {
		this.setState({ productName})
	}

	render () {
		const {data} = this.props
		return ( 
			<div className="container col-4 mt-">
			<h1>🦥 Paulin's Store 🦃</h1>
			<SearchBar productName={this.state.productName} stockStatus={this.state.stock} onProductNameChange={this.handleProductNameChange} onStockChange={this.handleStockChange}/>
			<ProductTable data={data} productName={this.state.productName} stockStatus={this.state.stock} />
		</div>
		)
	}
}


ReactDOM.render(<FilterableProductTable data={JSON}/>, document.querySelector("#app"))