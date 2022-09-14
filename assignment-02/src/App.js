import React from 'react';
import './App.css';
import RateCurrency from './components/RateCurrency/RateCurrency';

const App = () => {
	return (
		<div className="app-container">
			<div className="header">
				{/* <h1>Display Currency Rate</h1> */}
				{/* <h4>Rates are based from 1 USD</h4> */}
			</div>
			<div className="content">
				<RateCurrency />
			</div>

		</div>
	)
}

export default App;