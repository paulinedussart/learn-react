let counter = 0;

function render() {
	const items = ["task 1",
								 "task 2",
								 "task 3",
								 "task 4"
								];

	const list = items.map((item, id) => <li key={id} className="itemName">{item}</li>);

	console.log(list);
	
	const title = <React.Fragment><h1>Hello World !</h1>
									<span>counter : {counter}</span>
									<p><strong>My favourites things :</strong> </p>
									<ul id="list"	>{list}</ul>
								</React.Fragment>

	ReactDOM.render(title, document.querySelector("#app"));
}
// By executing this code, you will get a warning saying that a key should 
// be provided for items in a list. A "key", is an attribute 
// special that you must include when you create a list of items.

// OLD --> const list = items.map(item => <li className="itemName">{item}</li>)
// NEW --> const list = items.map((item, k) => <li key={k} className="itemName">{item}</li>)

// Keys help React to identify which items in a list have changed,
// have been added or removed. You must give a key to each item 
// in a table in order to give the elements a stable identity

render()

// window.setInterval(() => {
// 	counter += 1 
// 	render()
// }, 1000)