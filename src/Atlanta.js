import React, { Component } from 'react';

class Atlanta extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: null,
			temp: "",
			temp_min: null,
			temp_max: null,
			desc: null			
		}
	}

	 async componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		let results = await fetch(url)
		const {main:{temp, temp_min,temp_max},weather:[{icon,description}]}= await results.json();
		this.setState({
			icon:`http://openweathermap.org/img/w/${icon}.png`,
			temp,
			temp_max,
			temp_min,
			desc: description
		})
	}

	render(){
		return(
			<div>
				<table>
					<thead><tr>Today's Weather</tr></thead>	
					<tbody>
					<tr>
						<td>{this.state.desc}</td>
						<td><img src={this.state.icon} alt="Icon Is Broken"/></td>
					</tr>
					<tr>
						<td>Current Temp</td>
						<td>{this.state.temp}</td>
					</tr>
					<tr>
						<td>High's for Today</td>
						<td>{this.state.temp_max}</td>
					</tr>
					<tr>
						<td>Lows's for Today</td>
						<td>{this.state.temp_min}</td>
					</tr>
					</tbody>
				</table> 
			</div>
		);
	}
}

export default Atlanta;
