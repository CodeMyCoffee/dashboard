import React, { useState, useEffect } from 'react';
import { logIn } from "./api/auth";
import { getBandwidth } from "./api/graphs";
import { CapacityChart } from "./components/Capacity/Capicity";
import './App.css';

const App = () => {

	const [token, setToken] = useState()
	const [bandwidth, setBandwidth] = useState()

	useEffect(() => {
		const temp = { identifiant: "urtoob", password: "ToobRU" }
		const localToken = localStorage.getItem('token')

		if (!localToken) {
			logIn(temp).then(token => {
				setToken(token.session_token)
				localStorage.setItem('token', token.session_token)
			})
		} else {
			setToken(localToken)
		}

	}, [])


	const getData = () => {

		const from = new Date()
		const to = new Date()

		from.setDate(to.getDate() - 15)

		getBandwidth({ session_token: token, from: from.getTime(), to: to.getTime() })
			.then(data => setBandwidth(data))		
	}

	return (
		<div className="App">
			{token}
			<button onClick={getData}>GET DATA</button>
			{bandwidth ? <CapacityChart bandwidthData={bandwidth} /> : null}
		</div>
	);
}

export default App;
