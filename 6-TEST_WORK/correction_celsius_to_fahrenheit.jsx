function BoilingVerdict (props) {
	if (parseInt(props.celsius) >= 100) {
		return <div className="alert alert-danger" role="alert"> Attention, l'eau bout !!!</div>
	} else {
		return <div className="alert alert-success" role="alert">Pas de danger, l'eau ne bout pas !</div>
	}
}


function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => { this.props.onTemperatureChange(e.target.value); }

  render() {
		console.log(this)
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Saisissez la température en {scaleNames[scale]} :</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			temperature: '',
			scale: 'c'};
  }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature: temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature: temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale === 'f' ? temperature: tryConvert(temperature, toFahrenheit);

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator/>, document.querySelector("#app"))