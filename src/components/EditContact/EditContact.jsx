import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EditContact({ contacts, setContacts }) {
	const { id } = useParams();
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [createdAt, setCreatedAt] = useState('');
	const [isFavorite, setIsFavorite] = useState('');
	const [note, setNote] = useState('');
	const [oldContact, setOldContact] = useState(null);

	useEffect(() => {
		const foundContact = contacts.find((contact) => contact.id === parseInt(id));
		if (foundContact) {
			setOldContact(foundContact);
			setName(foundContact.name);
			setPhoneNumber(foundContact.phoneNumber);
			setCreatedAt(foundContact.createdAt);
			setIsFavorite(foundContact.isFavorite);
			setNote(foundContact.note);
		}
	}, [contacts, id]);

	const handleUpdateContact = () => {
		const updatedContact = {
			id: oldContact.id,
			name: name || oldContact.name,
			phoneNumber: phoneNumber || oldContact.phoneNumber,
			createdAt: createdAt || oldContact.createdAt,
			isFavorite: isFavorite || oldContact.isFavorite,
			note: note || oldContact.note,
		};

		const updatedContacts = contacts.map((contact) =>
			contact.id === oldContact.id ? updatedContact : contact
		);

		setContacts(updatedContacts);

		localStorage.setItem('contacts', JSON.stringify(updatedContacts));
	};

	return (
		<React.Fragment>
			<section>
				<div className="add-contact p-3">
					<div className="container">
						<div className="row">
							<div className="col">
								<p className="h4 text-success fw-bold">Edit Contact</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="Phone number"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>
								</div>
								<div className="mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="CreatedAt"
										value={createdAt}
										onChange={(e) => setCreatedAt(e.target.value)}
									/>
								</div>
								<div className="mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="isFavorite (true or false)"
										value={isFavorite}
										onChange={(e) => setIsFavorite(e.target.value)}
									/>
								</div>
								<div className="mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="Note"
										value={note}
										onChange={(e) => setNote(e.target.value)}
									/>
								</div>

								<div className="d-flex mb-2 gap-2">
									<Link to={'/contact/list'}>
										<Button className="btn btn-success" onClick={handleUpdateContact}>
											Update
										</Button>
									</Link>

									<Link to={'/contact/list'} className="btn btn-dark">
										Cancel
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default EditContact;
