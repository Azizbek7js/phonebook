import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactList({ contacts, setContacts }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [nameFilter, setNameFilter] = useState('');
	const [dateFilter, setDateFilter] = useState('');

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleNameFilter = (e) => {
		setNameFilter(e.target.value);
	};

	const handleDateFilter = (e) => {
		setDateFilter(e.target.value);
	};

	const filteredContacts = contacts.filter((contact) => {
		const isNameMatch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
		const isNameFilterMatch = nameFilter === '' || contact.name === nameFilter;
		const isDateFilterMatch = dateFilter === '' || contact.createdAt === dateFilter;
		return isNameMatch && isNameFilterMatch && isDateFilterMatch;
	});

	const handleDeleteContact = (id) => {
		const updatedContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(updatedContacts);
		localStorage.setItem('contacts', JSON.stringify(updatedContacts));
	};

	return (
		<React.Fragment>
			<section className="d-flex justify-content-center">
				<div className="m-3">
					<form className="d-flex gap-2 mw-100">
						<div>
							<input
								type="text"
								className="form-control"
								placeholder="Search"
								value={searchTerm}
								onChange={handleSearch}
							/>
						</div>
						<div>
							<select className="form-select" value={nameFilter} onChange={handleNameFilter}>
								<option value="">All Names</option>
								{contacts.map((contact) => (
									<option key={contact.id} value={contact.name}>
										{contact.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<select className="form-select" value={dateFilter} onChange={handleDateFilter}>
								<option value="">All Dates</option>
								{contacts.map((contact) => (
									<option key={contact.id} value={contact.createdAt}>
										{contact.createdAt}
									</option>
								))}
							</select>
						</div>
						<div>
							<div className="mb-2">
								<input type="submit" className="btn btn-dark" value="Search" />
							</div>
						</div>
					</form>
				</div>
			</section>

			<section className="contact-list">
				<div className="container">
					<div className="row">
						{contacts.length === 0 ? (
							<p>No contacts available.</p>
						) : (
							filteredContacts.map((contact) => (
								<div className="col-md-6 my-2" key={contact.id}>
									<div className="card">
										<div className="card-body">
											<div className="row align-items-center justify-content-between p-2">
												<div className="col-md-10">
													<ul className="list-group">
														<li className="list-group-item list-group-item-action">
															Name :<span className="fw-bold"> {contact.name}</span>
														</li>
														<li className="list-group-item list-group-item-action">
															Phone Number :<span className="fw-bold"> {contact.phoneNumber}</span>
														</li>
														<li className="list-group-item list-group-item-action">
															Date :<span className="fw-bold"> {contact.createdAt}</span>
														</li>
														<li className="list-group-item list-group-item-action">
															Is Favorite :<span className="fw-bold"> {contact.isFavorite}</span>
														</li>
														<li className="list-group-item list-group-item-action">
															Note :<span className="fw-bold"> {contact.note}</span>
														</li>
													</ul>
												</div>
												<div className="col-md-1 d-flex flex-column align-items-center">
													<Link to={`/contact/edit/${contact.id}`} className="btn btn-primary my-1">
														<i className="fa fa-pen" />
													</Link>
													<button
														onClick={() => handleDeleteContact(contact.id)}
														className="btn btn-danger my-1"
													>
														<i className="fa fa-trash" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default ContactList;
