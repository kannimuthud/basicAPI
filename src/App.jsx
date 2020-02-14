import React, { Component } from 'react'
import './Style.css'
const API_KEY = "5586e35dfd543e0199b80ac1461baab2";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "chennai",

            data: [],
            show: false
        };
        this.handleNodeClick = this.handleNodeClick.bind(this);
    }
    handleChange = event => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
        
    }
    //  async componentDidMount() {
    //     const responce = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}`);
    //     const json1 = await responce.json();
    //     console.log(json1)
    //    this.setState({ data: json1 });
    //    console.log(this.state.city)
    //   }

    async handleNodeClick() {
        try {
            const jsonPromise = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}`);
            this.setState({
                data: await jsonPromise.json(),
                show: true
            });
        } catch (err) {
            console.log('failed');
        }
        console.log(this.state);
    }


    getInfo = () => {
        //const we=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}`);
        //console.log(we)
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <div>
                {/* <a href="http://localhost:3000/"> NextPage</a> */}
                <input type="text"
                    name='city'
                    value={this.state.city}
                    onChange={this.handleChange} />
                <input type="text"
                    name='country'
                    value={this.state.country}
                    onChange={this.handleChange} />
                   
                <button onClick={this.handleNodeClick}>clickme</button>
                {this.state.show && <h2>Temperature {this.state.data.name}{Math.floor(this.state.data.main.temp) - 273}  <sup>o</sup>C</h2>}
                {this.state.show && <h2>Min Temperature {this.state.data.name}{Math.floor(this.state.data.main.temp_min) - 273}  <sup>o</sup>C</h2>}
                {this.state.show && <h2>Max Temperature {this.state.data.name}{Math.floor(this.state.data.main.temp_max) - 273}  <sup>o</sup>C</h2>}

            </div>
        );
    }
}
export default App;