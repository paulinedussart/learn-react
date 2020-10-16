// Hook avec la logique du Fetch
const useFetch = (url) => {
 const [state, setState] = React.useState({
	 loading: true,
	 items: []
 })

  React.useEffect( function () {
		(async function () {
			await fetch(url)
			.then(response => response.json())
			.then(json => setState({
				loading: false,
				items: json}))
			.catch(function(error) {
				console.log(`Error: ${error.message}`);
			});
		})()
	}, [])

	// de quoi va ton avoir besoin au niveau du retour ? 
	// du statut de loading et des items
	return [state.loading, state.items]
}

//  Spinner Component
function Loading () {
	return (
		<div className="text-center">
		<div className="spinner-border" role="status">
			<span className="sr-only">Loading...</span>
		</div>
		chargement ...
	</div>
	)
}

// Post Component
const Post = () => {
	const [loading, posts] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=3")

	{loading && <Loading/>} 

	return ( 
	<div>
		<h2>My Comments</h2> 
		{posts.map(post => 
		<div className="card mb-2">
			<div className="card-body"> 
				<h6 className="card-title">{post.name.slice(0, 3)}</h6>
				<p className="card-subtitle mb-2 text-muted">{post.email}</p>
				<p className="card-text">{post.body}</p>
			</div>
		</div>)}
	</div>
	)
}

// Todolist Component
function TodoList () {
	// on va avoir besoin d'un etat local pour sauvegarder les différentes tâches
	// qui seront au départ un tableau vide
	const [loading, todos] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=7')

	{loading && <Loading/>} 
	
	return <div>
		<h2>My todoList</h2> 
		<ol>{todos.map(todo => 
			<li key={todo.id}>
				<strong className="mr-2">{todo.completed === false ? '❌' : "✅" }</strong>
				{todo.title}
			</li>)}
		</ol>
	</div>
}

// App Component
const App = () => {
	return (
		<div className="container col-6 mt-4">
			<Post/>
			<TodoList/>
		</div>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)