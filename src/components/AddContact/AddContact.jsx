import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function AddContact({ contacts, setContacts }) {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [createdAt, setCreatedAt] = useState('');
	const [isFavorite, setIsFavorite] = useState('');
	const [note, setNote] = useState('');
	

	const handleCreateContact = () => {
		const newContact = {
			id: Date.now(),
			name,
			phoneNumber,
			createdAt,
			isFavorite,
			note,
		};
		setContacts([...contacts, newContact]);
		localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
	};

	return (
		<React.Fragment>
			<section>
				<div className="add-contact p-3">
					<div className="container">
						<div className="row">
							<div className="col">
								<p className="h4 text-success fw-bold">Create New Contact</p>
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
									<Link to="/contact/list">
										<Button onClick={handleCreateContact} className="btn btn-success">
											Create
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

export default AddContact;
