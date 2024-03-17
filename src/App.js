import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContactList from './components/ContactList/ContactList';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';

export const defaultContacts = [
	{
		id: 1,
		name: 'John Doe',
		phoneNumber: '123-456-7890',
		createdAt: '2024-03-16',
		isFavorite: 'false',
		note: 'Friend',
	},
	{
		id: 2,
		name: 'Jane Smith',
		phoneNumber: '987-654-3210',
		createdAt: '2024-03-15',
		isFavorite: 'true',
		note: 'Family',
	},
	{
		id: 3,
		name: 'Alice Johnson',
		phoneNumber: '555-555-5555',
		createdAt: '2024-03-14',
		isFavorite: 'false',
		note: 'Colleague',
	},
];

function App() {
	const [contacts, setContacts] = useState(defaultContacts);

	useEffect(() => {
		const storedContacts = JSON.parse(localStorage.getItem('contacts'));
		if (storedContacts) {
			setContacts(storedContacts);
		}
	}, []);

	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Navigate to={'/contact/list'} />} />
				<Route
					path={'/contact/list'}
					element={<ContactList contacts={contacts} setContacts={setContacts} />}
				/>
				<Route
					path={'/contact/add'}
					element={<AddContact contacts={contacts} setContacts={setContacts} />}
				/>
				<Route
					path={`/contact/edit/:id`}
					element={<EditContact contacts={contacts} setContacts={setContacts} />}
				/>
			</Routes>
		</React.Fragment>
	);
}

export default App;
