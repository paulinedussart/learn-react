// // 1ere problematique : IMMUABILITE
// const obj1 = [{
// 	name: "Hector",
// 	age: 45
// }]

// const obj2 = obj1
// console.log(obj2);
// // mutation 
// const newItem = {city: "Mexico"}
// obj2.push(newItem)
// console.log(obj2 === obj1);
// // true
// // ici comme les elements sont identiques, React ne rendera pas la nouvelle liste 
// ❌ // il ne regarde pas à l'interieur de l'object

// const obj3 = {...obj1, newItem}
// // il vaut mieux utiliser le spread operator
// console.log(obj3 === obj1);
// // false
// ✅ // ici comme les elements sont différents, React rendera la nouvelle liste 
// ⚠️ // Toujours renvoyer un nouvelle object rpz le nouvel état et non muter l'état précedant. 

// // 2eme probabilite : Quand la comparaison des etats  de l'éelement > au render de l'element 

// // 3eme problematique 
// // Attention à la definition des callback car certaines synthaxes ne permettent pas la memorisation. 
// //  ce sera une nouvelle fonction à chaque fois et déclancherai un render à chq fois
// // TOUJOURS LA MEME FONCTION QUI EST ENVOYEE
// ✅ constructor (prosp) {
// 	this.handleClick = this.handleClick.bind(this)
// }

// ✅ onClick{this.handleClick};

// ✅ const handleClick = () => {}