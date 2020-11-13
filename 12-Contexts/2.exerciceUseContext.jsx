const OBJ = {name: 'Pauline', firstname: 'Duss'}

const FormContexted = React.createContext({})

function PrimaryButton ({children}) {
	return <button type="submit" className="btn btn-primary">{children}</button>		
}

function FormContext ({defaultValue, children, onSubmit}) {
	const [data, setData ] = React.useState(defaultValue)

	const change = React.useCallback(function (name, value) {
		setData(data => ({...data, [name]: value}))
	})

	const valeur = React.useMemo(function () {
		return {...data, change}
	}, [data, change])

	const handleSubmit = React.useCallback(function() {
		onSubmit(valeur)
	}, [onSubmit, valeur])

	return (
		<FormContexted.Provider value={valeur}>
			<form onSubmit={handleSubmit} >
				{children}
			</form>
			{JSON.stringify(valeur)}
		</FormContexted.Provider>
	)
}

function FormField ({name, children}) {
	const data = React.useContext(FormContexted)

	const handleChange = React.useCallback(function (event) {
		data.change(event.target.name, event.target.value)
	}, [data.change])

	return(
		<div className="form-group">
			<label htmlFor={name}>{children}</label>
			<input type="text" name={name} id={name} className="form-control" onChange={handleChange}/>
		</div>
	)
}


function App () {
	const handleSubmit = React.useCallback( function (value) {
		e.preventDefault()
		console.log(value);
	}, [])

	return (
		<div className="container mt-5 col-4">
			<FormContext defaultValue={OBJ} onSubmit={handleSubmit}>
				<FormField name="firstname">Firstname</FormField>
				<FormField name="name">Lastname</FormField>
				<PrimaryButton>Send</PrimaryButton>	
			</FormContext>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'))