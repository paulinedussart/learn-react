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
const ThemeContext = React.createContext({
	theme: THEMES.light,
	toggle: null,
});

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
			const {theme} = this.context;
			// {backgroundColor: "#0F0402", color: "#FF5733"}
			return <button className="btn m-2" style={theme}>{children}</button>
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
	const {theme} = React.useContext(ThemeContext)
	// {backgroundColor: "#0F0402", color: "#FF5733"}
	return <button className="btn m-2" style={theme}>{children}</button>
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

// Component Picture
function Picture () {
	const {theme} = React.useContext(ThemeContext)
	console.log(theme);	
	return <div> {theme.backgroundColor === "#0F0402" ? "🌚🌚" : "🌞🌞"}</div>

}

// Component ThemeSwitcher
const ThemeSwitcher = () => {
	const {toggle} = React.useContext(ThemeContext)
	return <button className="btn btn-primary" onClick={toggle}>Change Theme</button>
}

// App Component
function App () {

	const [theme, setTheme] = React.useState('dark')

	// toggler qui va changer le theme
	const toggleTheme = React.useCallback(function() {
		setTheme(theme => theme === 'light' ? 'dark' : 'light');
	}, [])

	const valeur = React.useMemo(function () {
		return {
			theme: theme === 'light' ? THEMES.light : THEMES.dark,
			toggle: toggleTheme,
		}
	}, [toggleTheme, theme])

	return (
		<div className="container mt-5 col-4">
			{/* App est responsable de passer le context à ses enfants il doit donc les englober dans ThemeContext.Provider */}
			<ThemeContext.Provider value={valeur}>	
				<div className="d-flex">
					<h5 className="mr-2">Learn Context</h5>
					<Picture/>
				</div>
				<Toolbar></Toolbar>
				<ThemeSwitcher/>
			</ThemeContext.Provider>
		</div>
	)
}


ReactDOM.render(<App/>, document.getElementById("app"))

