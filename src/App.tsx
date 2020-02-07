import React, { useState, useEffect } from 'react';
import { logIn } from "./api/auth";
import './App.css';

const App = () => {

	const [token, setToken] = useState()

	useEffect(() => {
		const temp = { identifiant: "shinynewclient", password: "siriusblack" }
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


	return (
		<div className="App">
			{token}
		</div>
	);
}

export default App;
