// Create a function that accepts another function as an argument
const callbackAcceptingFunction = (fn) => {
  // Calls the function with any required arguments
  return fn(1, 2, 3)
}

// Callback gets arguments from the above call
const callback = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3
}

// Passing a callback into a callback accepting function
const result = callbackAcceptingFunction(callback)
console.log(result) // 6

// ____________________________________________________________________________
function Child({ color,  onChildClick }) {
  function handleClick(event) {
    onChildClick(event.target.name); // pass any argument to the callback
  }
  return (
    <button name={color} onClick={handleClick}>{color}</button>
  )
}

function Parent() {
  const [color, setColor] = useState('');
  function handleChildClick(color) {
    setColor(color);
  }
  return (
    <>
      <h1>selected color: {color}</h1>
      {['green','red','blue'].map((color) => (
        <Child color={color} onChildClick={handleChildClick} ... />
      ))}
    </>
  )
}