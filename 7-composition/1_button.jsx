function Buttons ({color, children}) {
	const className = "btn btn-" + color
	return 	<button className={className}>{children}</button>
}

function BtnBlue (props) {
	return <Buttons color="primary">{props.children}</Buttons>
}

function BtnRed (props) {
	return <Buttons color="danger">{props.children}</Buttons>
}

function BtnGreen ({children}) {
	return <Buttons color="success">{children}</Buttons>
}

function BtnYellow ({children}) {
	return <Buttons color="warning">{children}</Buttons>
}


function Page () {
	return <div className="container mt-5">
					<BtnBlue>Click</BtnBlue><br/><br/>
					<BtnGreen>Subscribe</BtnGreen><br/><br/>
					<BtnGreen>Alert</BtnGreen><br/><br/>
					<BtnYellow>Download</BtnYellow><br/><br/>
					<BtnYellow>Leave</BtnYellow><br/><br/>
					<BtnRed>Accept</BtnRed>
				</div>
}

ReactDOM.render(<Page/>, document.querySelector("#app"));