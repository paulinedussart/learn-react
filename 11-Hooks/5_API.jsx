function TodoList () {
	// on va avoir besoin d'un etat local pour sauvegarder les différentes tâches
	// qui seront au départ un tableau vide
	const [todos, setTodos] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	// des que le component sera monté nous allons faire un appel ajax pour récuperer les todos
	React.useEffect( function () {
		(async function () {
			// nous allons créer un fonction qui va s'auto appeler et qui sera asynchrone
			// car si nous ne faison pas ça notre function async va retourner une promesse
			// useEffect attend qu'on lui retourne une function et non pas une promesse 
			await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
			.then(response => {
				if (response.ok) {
					return Promise.resolve(response);
				}
				else {
					return Promise.reject(new Error('Failed to load')); 
				}
			})
			.then(response => response.json()
			)
			// j'assigne le resultat de la requete ajax à todos grace à setTodos
			.then(json => setTodos(json))
			.catch(function(error) {
				console.log(`Error: ${error.message}`);
			});
			// quand la requête est terminé je peux passer le loading à false afin d'arrêter le spinner
			setLoading(false)
		})()
	}, [])

	//using a loading to tell the user
	if (loading) {
		return (
			<div class="text-center">
			  <div class="spinner-border" role="status">
			    <span class="sr-only">Loading...</span>
			  </div>
				chargement ...
			</div>
		)
	}
	
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


const App = () => {
	return (
		<div className="container col-6 mt-4">
			<TodoList/>
		</div>
	);
}



ReactDOM.render(
	<App/>,
	document.getElementById("app")
)