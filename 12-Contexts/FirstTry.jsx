// transfert more easily data to child than props

const THEMES = {
	dark: {
		backgroundColor: "#0F0402",
		color: "#FF5733",
	},
	light: {
		backgroundColor: "#09BDF6",
		color: "#DDD508",
	}
}
// valeur initial par defaut 
const ThemeContext = React.createContext(THEMES.light);

// SearchBar Component
const SearchBar = () => {
	return (
		<div className="form-inline">
			<input className="form-control" type="text"/>
			<ThemedButtonClass>Search</ThemedButtonClass>
		</div>
	)
}

// ThemedButtonClass Component (on dépend d'un seul Context)
class ThemedButtonClass extends React.Component {
	render () {
		const {children} = this.props;
		// {children: "Search"}

		// 1er -- ** ThemeContext.Consumer**
			// return (
			// 	<ThemeContext.Consumer>
			// 		{value => {
			// 			return <button className="btn m-2" style={value}>{children}</button>
			// 		}}
			// 	</ThemeContext.Consumer>	
			// )
				
		// 2eme -- ** contextType **			
			const value = this.context;
			// {backgroundColor: "#0F0402", color: "#FF5733"}
			return <button className="btn m-2" style={value}>{children}</button>
	}
}
ThemedButtonClass.contextType = ThemeContext

// ThemedButton Component (influencé par le theme) (on peut dépendre de plusieurs Context)
const ThemedButton = ({children}) => {
	// 1er -- ** ThemeContext.Consumer **
	// être capable de recuperer le contexte et connaitre le theme
	// return (
	// 	<ThemeContext.Consumer>
  // 		{/* ce theme ne fonctionnera que si dans son parrent il y a un ThemeContext.Provider */}
	// 		{value => {
	// 			return <button className="btn m-2" style={value}>{children}</button>
	// 		}}
	// 	</ThemeContext.Consumer>	
	// )

	// 2eme -- ** useContext() **
	const value = React.useContext(ThemeContext)
	// {backgroundColor: "#0F0402", color: "#FF5733"}
	return <button className="btn m-2" style={value}>{children}</button>
}

// Toolbar Components
const Toolbar = () => {
	return (
		<div>
			<SearchBar/>
			<ThemedButton>Sign Up</ThemedButton>
			<ThemedButton>Sign In</ThemedButton>
		</div>
	)
}

function Picture () {
	const value = React.useContext(ThemeContext)	
	return <div> {value.backgroundColor === "#0F0402" ? "🌚🌚" : "🌞🌞"}</div>

}

// App Component
function App () {

	const [theme, setTheme] = React.useState('dark')

	// toggler qui va changer le theme
	const toggleTheme = React.useCallback(function() {
		setTheme(theme => theme === 'light' ? 'dark' : 'light');
	}, [])

	// avec une constante qui dépend de l'état
	const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark;

	return (
		<div className="container mt-5 col-4">
			{/* App est responsable de passer le context à ses enfants il doit donc les englober dans ThemeContext.Provider */}
			<ThemeContext.Provider value={currentTheme}>	
				<div className="d-flex">
					<h5 className="mr-2">Learn Context</h5>
					<Picture/>
				</div>
				<Toolbar></Toolbar>
				<button className="btn btn-primary" onClick={toggleTheme}>Change Theme</button>
			</ThemeContext.Provider>
		</div>
	)
}


ReactDOM.render(<App/>, document.getElementById("app"))

