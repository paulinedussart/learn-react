const Post = () => {
	const [posts, setPost] = React.useState([])

	React.useEffect( function () {
		(async function () {
			await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
			.then(response => response.json())
			.then(json => setPost(json))
			.catch(function(error) {
				console.log(`Error: ${error.message}`);
			});
		})()
	}, [])

	return ( 
	<div>
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

const App = () => {
	return (
		<div className="container col-6 mt-4">
			<Post/>
		</div>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)