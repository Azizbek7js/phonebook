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
	{
		id: 4,
		name: 'Bob Brown',
		phoneNumber: '111-222-3333',
		createdAt: '2024-03-13',
		isFavorite: true,
		note: 'Neighbor',
	},
	{
		id: 5,
		name: 'Emily White',
		phoneNumber: '444-444-4444',
		createdAt: '2024-03-12',
		isFavorite: false,
		note: 'Classmate',
	},
	{
		id: 6,
		name: 'David Lee',
		phoneNumber: '666-777-8888',
		createdAt: '2024-03-11',
		isFavorite: true,
		note: 'Business Partner',
	},
	{
		id: 7,
		name: 'Sarah Davis',
		phoneNumber: '999-999-9999',
		createdAt: '2024-03-10',
		isFavorite: false,
		note: 'Roommate',
	},
	{
		id: 8,
		name: 'Michael Taylor',
		phoneNumber: '333-222-1111',
		createdAt: '2024-03-09',
		isFavorite: true,
		note: 'Co-worker',
	},
	{
		id: 9,
		name: 'Olivia Martinez',
		phoneNumber: '123-123-1234',
		createdAt: '2024-03-08',
		isFavorite: false,
		note: 'Childhood Friend',
	},
	{
		id: 10,
		name: 'James Wilson',
		phoneNumber: '555-123-7890',
		createdAt: '2024-03-07',
		isFavorite: true,
		note: 'Gym Buddy',
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
