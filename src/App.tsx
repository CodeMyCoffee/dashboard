import React, { useState, useEffect } from 'react';
import { logIn } from "./api/auth";
import { getBandwidth, getAudience } from "./api/graphs";
import { Capacity } from "./components/Capacity/Capicity";
import { Viewers } from "./components/Viewers/Viewers";
import './App.css';

const App = () => {

	const [token, setToken] = useState()
	const [bandwidth, setBandwidth] = useState()
	const [audience, setAudience] = useState()

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

		getAudience({ session_token: token, from: from.getTime(), to: to.getTime() })
		.then(data => setAudience(data))
	}

	return (
		<div className="App">
			{token}
			<button onClick={getData}>GET DATA</button>
			{bandwidth ? <Capacity bandwidthData={bandwidth} /> : null}
			{audience ? <Viewers audienceData={audience} /> : null}
		</div>
	);
}

export default App;
