/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/store/store.js'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthContextProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</AuthContextProvider>
	</BrowserRouter>,
)