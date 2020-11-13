// Monter un element ailleur dans le DOM
ReactDOM.createPortal(
	reactElement,
	whereToInsertIt
);

function Card () {
	return ReactDOM.createPortal(
		reactElement,
		whereToInsertIt
	);
}