import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<React.Fragment>
			<nav className="mw-100 d-flex justify-content-between navbar navbar-dark bg-dark navbar-expand-sm p-4">
				<div>
					<Link to={'/'} className="navbar-brand">
						<i className="fa fa-mobile text-warning" /> My Contacts{' '}
						<span className="text-warning">Book</span>
					</Link>
				</div>
				<Link to={'/contact/add'} className="btn btn-warning ms-2">
					<i className="fa fa-plus-circle me-2" />
					Add Contact
				</Link>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
