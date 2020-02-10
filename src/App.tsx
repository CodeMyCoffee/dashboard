import React, { useState, useEffect } from 'react';
import Datepicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { logIn } from "./api/auth";
import { getBandwidth, getAudience } from "./api/graphs";
import { Capacity } from "./components/Capacity/Capicity";
import { Viewers } from "./components/Viewers/Viewers";
import { ZoomChart } from "./components/ZoomChart/ZoomChart";
import './App.css';

const App = () => {

	const [token, setToken] = useState()
	const [bandwidth, setBandwidth] = useState()
	const [audience, setAudience] = useState()
	const [dates, setDates] = useState({
		begin: new Date(),
		end: new Date(),
		max: new Date(),
		min: new Date()
	})

	useEffect(() => {

		function getData() {

			const from = new Date()
			const to = new Date()

			from.setDate(to.getDate() - 15)



			getBandwidth({ session_token: token, from: from.getTime(), to: to.getTime() })
				.then(data => {
					setBandwidth(data)
				})

			getAudience({ session_token: token, from: from.getTime(), to: to.getTime() })
				.then(data => {
					setAudience(data)
					setDates({ begin: from, end: to, min: from, max: to })
				})
		}


		const credentials = { identifiant: "urtoob", password: "ToobRU" }
		const localToken = localStorage.getItem('token')

		if (!localToken) {
			logIn(credentials).then(token => {
				setToken(token.session_token)
				localStorage.setItem('token', token.session_token)
			})
		} else {
			setToken(localToken)
			getData()
		}

	}, [token])


	const dateChange = (date: Date, begin: Boolean) => {
		if (date >= dates.min && date <= dates.max) {
			begin ? setDates({ ...dates, begin: date }) : setDates({ ...dates, end: date })
		}

	}

	return (
		<div className="App">
			{bandwidth ? <Capacity bandwidthData={bandwidth} /> : null}
			{audience ?
				<>
					<Viewers audienceData={audience} />
					<div id="zoom-container">
						<Datepicker selected={dates.begin} onChange={(date: Date) => dateChange(date, true)} />
						<ZoomChart audienceData={audience} dates={dates} />
						<Datepicker selected={dates.end} onChange={(date: Date) => dateChange(date, false)} />
					</div>

				</> : null}
		</div>
	);
}

export default App;
