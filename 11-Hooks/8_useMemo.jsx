console.log("Youpiii");
const Button = React.memo(function Button({onclick}) {
	console.log('render BUTTON component');
	return <button className="btn btn-primary" onClick={onclick}>Mon button</button>
});

const App = () => {
	// when we click on the increment button the Button Component will not be rendered
	const memoizedValue = React.useMemo( 
		function () {
			alert("Bonjour Pauline")
		}, []
	);
	
	// With this code, when we click on the increment button the Button Component will be rendered
	// const memoizedValue = () => {
	// 	alert("Bonjour Pauline")
	// }
		
	const [count, setCount] = React.useState(0);

	const handleClick = ()  => {
		setCount(number => number + 1)
	}

	return (
		<div className="container mt-5 col-4">
			<Button onClick={memoizedValue}/>
			<button className="btn btn-success ml-2" onClick={handleClick}>Incrementer {count}</button>
		</div>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)